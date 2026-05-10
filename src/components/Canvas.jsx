import "./Canvas.css";
import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import { SketchPicker } from "react-color";

import { createElement, drawElement } from "../utils/elements";
import {
  getElementAtPosition,
  adjustElementCoordinates,
  cursorForPosition,
  resizedCoordinates,
  adjustmentRequired,
  elementInMarquee,
  computeSelectionBBox,
} from "../utils/geometry";
import useHistory from "../hooks/useHistory";
import NavBar from "./NavBar/NavBar";
import Toolbar from "./canvas/Toolbar/Toolbar";

// ---------------------------
// ----------- PAGE ----------
// ---------------------------

const CanvasPage = () => {
  const [elements, setElements, undo, redo, clear] = useHistory([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("paintbrush");
  const [selectedElement, setSelectedElement] = useState(null); // only used for resize
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
      case "paintbrush":
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
    const undoRedoFunction = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        undo();
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "y") {
        redo();
      }
    };
    document.addEventListener("keydown", undoRedoFunction);
    return () => document.removeEventListener("keydown", undoRedoFunction);
  }, [undo, redo]);

  // --------------------------
  // ----- Event Handlers -----
  // --------------------------

  const handleMouseDown = e => {
    const { clientX, clientY } = e;
    if (tool === "pointer") {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element) {
        const isAlreadySelected = selectedElementIds.includes(element.id);
        if (element.position !== "inside" && selectedElementIds.length === 1 && isAlreadySelected) {
          setSelectedElement({ ...element });
          setElements(prevState => prevState);
          setAction("resize");
        } else {
          const idsToMove = isAlreadySelected ? selectedElementIds : [element.id];
          if (!isAlreadySelected) setSelectedElementIds([element.id]);

          const data = {};
          elements
            .filter(el => idsToMove.includes(el.id))
            .forEach(el => {
              if (el.type === "paintbrush") {
                data[el.id] = {
                  type: "paintbrush",
                  originalPoints: el.points,
                  xOffsets: el.points.map(p => clientX - p.x),
                  yOffsets: el.points.map(p => clientY - p.y),
                };
              } else {
                data[el.id] = {
                  type: el.type,
                  color: el.color,
                  offsetX: clientX - el.x1,
                  offsetY: clientY - el.y1,
                  width: el.x2 - el.x1,
                  height: el.y2 - el.y1,
                };
              }
            });
          const bbox = computeSelectionBBox(elements.filter(el => idsToMove.includes(el.id)));
          if (bbox) setMarquee({ x1: bbox.minX - 8, y1: bbox.minY - 8, x2: bbox.maxX + 8, y2: bbox.maxY + 8 });
          setMoveData(data);
          setElements(prevState => prevState);
          setAction("move");
        }
      } else {
        setSelectedElementIds([]);
        setMarquee(null);
      }
    } else if (tool === "marquee") {
      const insideExistingMarquee =
        marquee &&
        clientX >= Math.min(marquee.x1, marquee.x2) &&
        clientX <= Math.max(marquee.x1, marquee.x2) &&
        clientY >= Math.min(marquee.y1, marquee.y2) &&
        clientY <= Math.max(marquee.y1, marquee.y2);
      if (insideExistingMarquee && selectedElementIds.length > 0) {
        const data = {};
        elements
          .filter(el => selectedElementIds.includes(el.id))
          .forEach(el => {
            if (el.type === "paintbrush") {
              data[el.id] = {
                type: "paintbrush",
                originalPoints: el.points,
                xOffsets: el.points.map(p => clientX - p.x),
                yOffsets: el.points.map(p => clientY - p.y),
              };
            } else {
              data[el.id] = {
                type: el.type,
                color: el.color,
                offsetX: clientX - el.x1,
                offsetY: clientY - el.y1,
                width: el.x2 - el.x1,
                height: el.y2 - el.y1,
              };
            }
          });
        setMoveData(data);
        setElements(prevState => prevState);
        setAction("move");
        return;
      }
      setSelectedElementIds([]);
      setMarquee({ x1: clientX, y1: clientY, x2: clientX, y2: clientY, isDragging: true });
      setAction("marquee");
    } else if (tool === "circle") {
      // circle drawing not yet implemented
    } else if (tool === "move") {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element) {
        const data = {};
        if (element.type === "paintbrush") {
          data[element.id] = {
            type: "paintbrush",
            originalPoints: element.points,
            xOffsets: element.points.map(p => clientX - p.x),
            yOffsets: element.points.map(p => clientY - p.y),
          };
        } else {
          data[element.id] = {
            type: element.type,
            color: element.color,
            offsetX: clientX - element.x1,
            offsetY: clientY - element.y1,
            width: element.x2 - element.x1,
            height: element.y2 - element.y1,
          };
        }
        setSelectedElementIds([element.id]);
        setMoveData(data);
        setElements(prevState => prevState);
        setAction("move");
      }
    } else {
      const element = createElement(clientX, clientY, clientX, clientY, tool, selectedColor);
      setElements(prevState => [...prevState, element]);
      setSelectedElementIds([element.id]);
      setAction("draw");
    }
  };

  const handleMouseMove = e => {
    const { clientX, clientY } = e;

    if (tool === "pointer") {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element && selectedElementIds.includes(element.id)) {
        e.target.style.cursor = "move";
      } else if (element && element.position !== "inside") {
        e.target.style.cursor = cursorForPosition(element.position);
      } else if (element) {
        e.target.style.cursor = "move";
      } else {
        e.target.style.cursor = "default";
      }
    } else if (tool === "marquee") {
      e.target.style.cursor = "crosshair";
    } else if (tool === "move") {
      const element = getElementAtPosition(clientX, clientY, elements);
      e.target.style.cursor = element ? "move" : "default";
    }

    if (action === "draw") {
      const { id, x1, y1 } = elements[elements.length - 1];
      updateElement(id, x1, y1, clientX, clientY, tool);
    } else if (action === "marquee") {
      setMarquee(prev => ({ ...prev, x2: clientX, y2: clientY, isDragging: true }));
    } else if (action === "move") {
      const elementsCopy = [...elements];
      Object.entries(moveData).forEach(([id, data]) => {
        const idx = elementsCopy.findIndex(el => el.id === id);
        if (idx === -1) return;
        if (data.type === "paintbrush") {
          const newPoints = data.originalPoints.map((_, i) => ({
            x: clientX - data.xOffsets[i],
            y: clientY - data.yOffsets[i],
          }));
          elementsCopy[idx] = { ...elementsCopy[idx], points: newPoints };
        } else {
          const newX1 = clientX - data.offsetX;
          const newY1 = clientY - data.offsetY;
          elementsCopy[idx] = createElement(newX1, newY1, newX1 + data.width, newY1 + data.height, data.type, data.color, id);
        }
      });
      setElements(elementsCopy, true);
      const bbox = computeSelectionBBox(elementsCopy.filter(el => selectedElementIds.includes(el.id)));
      if (bbox) setMarquee({ x1: bbox.minX - 8, y1: bbox.minY - 8, x2: bbox.maxX + 8, y2: bbox.maxY + 8 });
    } else if (action === "resize") {
      const { id, type, position, ...coordinates } = selectedElement;
      const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, position, coordinates);
      updateElement(id, x1, y1, x2, y2, type);
    }
  };

  const handleMouseUp = () => {
    if (action === "marquee" && marquee) {
      const selectedIds = elements.filter(el => elementInMarquee(el, marquee.x1, marquee.y1, marquee.x2, marquee.y2)).map(el => el.id);
      setSelectedElementIds(selectedIds);
      const bbox = computeSelectionBBox(elements.filter(el => selectedIds.includes(el.id)));
      setMarquee(bbox ? { x1: bbox.minX - 8, y1: bbox.minY - 8, x2: bbox.maxX + 8, y2: bbox.maxY + 8 } : null);
    } else if (action === "draw") {
      const lastElement = elements[elements.length - 1];
      if (lastElement && adjustmentRequired(lastElement.type)) {
        const { id, type } = lastElement;
        const { x1, y1, x2, y2 } = adjustElementCoordinates(lastElement);
        updateElement(id, x1, y1, x2, y2, type);
      }
    } else if (action === "resize" && selectedElement) {
      const { id, type } = selectedElement;
      const element = elements.find(el => el.id === id);
      if (element && adjustmentRequired(type)) {
        const { x1, y1, x2, y2 } = adjustElementCoordinates(element);
        updateElement(id, x1, y1, x2, y2, type);
      }
      setSelectedElement(null);
    }
    setAction("none");
    setMoveData(null);
  };

  // ----------------------------
  // ---------- Render ----------
  // ----------------------------

  return (
    <>
      <div className="color">
        <SketchPicker
          disableAlpha={true}
          presetColors={[
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
          ]}
          color={selectedColor}
          onChange={color => setSelectedColor(color.hex)}
        />
      </div>

      <Toolbar tool={tool} setTool={setTool} />

      {/* Undo/Redo/Clear Buttons */}
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

      {/* Canvas Component */}
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
