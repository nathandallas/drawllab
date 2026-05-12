import "./Canvas.css";
import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import { SketchPicker } from "react-color";

import { createElement, drawElement } from "../utils/elements";
import { resizedCoordinates, computeSelectionBBox } from "../utils/geometry";
import useHistory from "../hooks/useHistory";
import NavBar from "./NavBar/NavBar";
import Toolbar from "./canvas/Toolbar/Toolbar";
import { TOOLS } from "../tools";

const PRESET_COLORS = [
  "#8b3a35",
  "#bc5953",
  "#e67f6e",
  "#e8a09a",
  "#c47fa0",
  "#ed5689",
  "#f384a9",
  "#7b75da",
  "#a5abe7",
  "#3984a3",
  "#6fb7da",
  "#598b7f",
  "#7a9e5e",
  "#aebc89",
  "#d4753a",
  "#f1b376",
  "#d4a832",
  "#f1d896",
  "#363636",
  "#666",
  "#818589",
  "#A9A9A9",
  "#ccc",
  "#fff",
];

const CanvasPage = () => {
  const [elements, setElements, undo, redo, clear] = useHistory([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("pen");
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedElementIds, setSelectedElementIds] = useState([]);
  const [marquee, setMarquee] = useState(null);
  const [moveData, setMoveData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#363636");

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    const roughCanvas = rough.canvas(canvas);

    elements.forEach(element => drawElement(roughCanvas, context, element));

    if (marquee) {
      context.save();
      context.strokeStyle = "#4a90d9";
      context.lineWidth = 1;
      context.setLineDash([4, 3]);
      const mx = Math.min(marquee.x1, marquee.x2);
      const my = Math.min(marquee.y1, marquee.y2);
      const mw = Math.abs(marquee.x2 - marquee.x1);
      const mh = Math.abs(marquee.y2 - marquee.y1);
      if (marquee.isDragging) {
        context.fillStyle = "rgba(74, 144, 217, 0.08)";
        context.fillRect(mx, my, mw, mh);
      }
      context.strokeRect(mx, my, mw, mh);
      context.restore();
    }
  }, [elements, marquee]);

  const updateElement = (id, x1, y1, x2, y2, type) => {
    const elementsCopy = [...elements];
    const index = elementsCopy.findIndex(el => el.id === id);
    switch (type) {
      case "rectangle":
        elementsCopy[index] = createElement(x1, y1, x2, y2, type, elementsCopy[index].color, id);
        break;
      case "pen":
        elementsCopy[index].points = [...elementsCopy[index].points, { x: x2, y: y2 }];
        break;
      default:
        throw new Error(`unrecognised: ${type}`);
    }
    setElements(elementsCopy, true);
  };

  useEffect(() => {
    if (tool !== "pointer" && tool !== "marquee") {
      setSelectedElementIds([]);
      setMarquee(null);
    }
  }, [tool]);

  useEffect(() => {
    const onKeyDown = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") undo();
      if ((e.metaKey || e.ctrlKey) && e.key === "y") redo();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [undo, redo]);

  const getCtx = () => ({
    elements,
    action,
    selectedElement,
    selectedElementIds,
    marquee,
    moveData,
    selectedColor,
    setElements,
    setAction,
    setSelectedElement,
    setSelectedElementIds,
    setMarquee,
    setMoveData,
    updateElement,
  });

  const handleMouseDown = e => {
    const { clientX, clientY } = e;
    TOOLS[tool]?.onMouseDown(getCtx(), clientX, clientY);
  };

  const handleMouseMove = e => {
    const { clientX, clientY } = e;

    e.target.style.cursor = TOOLS[tool]?.getCursor(getCtx(), clientX, clientY) ?? "default";

    if (action === "draw") {
      const { id, x1, y1 } = elements[elements.length - 1];
      updateElement(id, x1, y1, clientX, clientY, tool);
    } else if (action === "marquee") {
      setMarquee(prev => ({ ...prev, x2: clientX, y2: clientY, isDragging: true }));
    } else if (action === "move" && moveData) {
      const elementsCopy = [...elements];
      Object.entries(moveData).forEach(([id, data]) => {
        const idx = elementsCopy.findIndex(el => el.id === id);
        if (idx === -1) return;
        if (data.type === "pen") {
          elementsCopy[idx] = {
            ...elementsCopy[idx],
            points: data.originalPoints.map((_, i) => ({
              x: clientX - data.xOffsets[i],
              y: clientY - data.yOffsets[i],
            })),
          };
        } else {
          const newX1 = clientX - data.offsetX;
          const newY1 = clientY - data.offsetY;
          elementsCopy[idx] = createElement(newX1, newY1, newX1 + data.width, newY1 + data.height, data.type, data.color, id);
        }
      });
      setElements(elementsCopy, true);
      const bbox = computeSelectionBBox(elementsCopy.filter(el => selectedElementIds.includes(el.id)));
      if (bbox) setMarquee({ x1: bbox.minX - 8, y1: bbox.minY - 8, x2: bbox.maxX + 8, y2: bbox.maxY + 8 });
    } else if (action === "resize" && selectedElement) {
      const { id, type, position, ...coordinates } = selectedElement;
      const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, position, coordinates);
      updateElement(id, x1, y1, x2, y2, type);
    }
  };

  const handleMouseUp = () => {
    TOOLS[tool]?.onMouseUp(getCtx());
    setAction("none");
    setMoveData(null);
  };

  return (
    <>
      <div className="color">
        <SketchPicker disableAlpha presetColors={PRESET_COLORS} color={selectedColor} onChange={color => setSelectedColor(color.hex)} />
      </div>

      <Toolbar tool={tool} setTool={setTool} />

      <div className="canvas-tools">
        <div className="canvas-tools-container">
          <div onClick={undo} className="canvas-tools__button">
            <h2>undo</h2>
          </div>
          <div onClick={redo} className="canvas-tools__button">
            <h2>redo</h2>
          </div>
        </div>
        <div
          onClick={() => {
            clear();
            setSelectedElementIds([]);
          }}
          className="canvas-tools__button">
          <h2>clear</h2>
        </div>
      </div>

      <NavBar />

      <canvas
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
        Canvas
      </canvas>
    </>
  );
};

export default CanvasPage;
