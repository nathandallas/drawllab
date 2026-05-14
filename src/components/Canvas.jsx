import "./Canvas.css";
import { useEffect, useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import { createElement, drawElement } from "../utils/elements";
import { resizedCoordinates, computeSelectionBBox } from "../utils/geometry";
import useHistory from "../hooks/useHistory";
import NavBar from "./NavBar/NavBar";
import Toolbar from "./canvas/Toolbar/Toolbar";
import { TOOLS } from "../tools";
import { getBounds } from "../tools/shared";
import { Redo2, Undo2 } from "lucide-react";
import RoughBorder from "./ui/RoughBorder";

const STORAGE_KEY = "drawllab-elements";

const loadElements = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw).map(el => (el.type === "pen" ? el : createElement(el.x1, el.y1, el.x2, el.y2, el.type, el.color, el.id)));
  } catch {
    return [];
  }
};

const CanvasPage = () => {
  const [initialElements] = useState(loadElements);
  const [elements, setElements, undo, redo] = useHistory(initialElements);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("pen");
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedElementIds, setSelectedElementIds] = useState([]);
  const [marquee, setMarquee] = useState(null);
  const [moveData, setMoveData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#363636");
  const [fadingIds, setFadingIds] = useState(() => new Set());

  useEffect(() => {
    try {
      const serializable = elements.map(({ roughElement, ...rest }) => rest);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } catch {}
  }, [elements]);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    const roughCanvas = rough.canvas(canvas);

    elements.forEach(element => {
      const display = fadingIds.has(element.id) ? { ...element, opacity: 0.5 } : element;
      drawElement(roughCanvas, context, display);
    });

    if (marquee) {
      context.save();
      context.strokeStyle = "#4a90d9";
      context.lineWidth = 1;
      context.setLineDash([4, 3]);
      const { x, y, w, h } = getBounds(marquee);
      if (marquee.isDragging) {
        context.fillStyle = "rgba(74, 144, 217, 0.08)";
        context.fillRect(x, y, w, h);
      }
      context.strokeRect(x, y, w, h);
      context.restore();
    }
  }, [elements, marquee, fadingIds]);

  const updateElement = (id, x1, y1, x2, y2, type) => {
    const elementsCopy = [...elements];
    const index = elementsCopy.findIndex(el => el.id === id);
    switch (type) {
      case "line":
      case "rectangle":
      case "circle":
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
    if (tool !== "pointer" && tool !== "marquee" && tool !== "move") {
      setSelectedElementIds([]);
      setMarquee(null);
    }
  }, [tool]);

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute("data-theme");
    root.setAttribute("data-theme", "light");
    return () => {
      if (previous === null) root.removeAttribute("data-theme");
      else root.setAttribute("data-theme", previous);
    };
  }, []);

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
    setFadingIds,
    updateElement,
  });

  const handleMouseDown = e => {
    const { clientX, clientY } = e;
    TOOLS[tool]?.onMouseDown(getCtx(), clientX, clientY);
  };

  const handleMouseMove = e => {
    const { clientX, clientY } = e;

    e.target.style.cursor = TOOLS[tool]?.getCursor(getCtx(), clientX, clientY) ?? "default";

    if (e.buttons === 0 && action !== "none") {
      setAction("none");
      setMoveData(null);
      return;
    }

    if (action === "erase") {
      TOOLS[tool]?.onMouseMove?.(getCtx(), clientX, clientY);
    } else if (action === "draw") {
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
    } else if (action === "marquee-resize" && selectedElement && moveData) {
      const { position, x1, y1, x2, y2 } = selectedElement;
      const coords = resizedCoordinates(clientX, clientY, position, { x1, y1, x2, y2 });
      if (!coords) return;
      setMarquee(prev => ({ ...prev, ...coords }));

      const { origBbox, origElements } = moveData;
      if (origBbox) {
        const newMinX = Math.min(coords.x1, coords.x2) + 8;
        const newMinY = Math.min(coords.y1, coords.y2) + 8;
        const newMaxX = Math.max(coords.x1, coords.x2) - 8;
        const newMaxY = Math.max(coords.y1, coords.y2) - 8;
        const origW = origBbox.maxX - origBbox.minX;
        const origH = origBbox.maxY - origBbox.minY;
        if (origW === 0 || origH === 0) return;
        const sx = (newMaxX - newMinX) / origW;
        const sy = (newMaxY - newMinY) / origH;
        const scaleX = v => newMinX + (v - origBbox.minX) * sx;
        const scaleY = v => newMinY + (v - origBbox.minY) * sy;

        const elementsCopy = [...elements];
        Object.entries(origElements).forEach(([id, origEl]) => {
          const idx = elementsCopy.findIndex(el => el.id === id);
          if (idx === -1) return;
          if (origEl.type === "pen") {
            elementsCopy[idx] = {
              ...elementsCopy[idx],
              points: origEl.points.map(p => ({ x: scaleX(p.x), y: scaleY(p.y) })),
            };
          } else {
            elementsCopy[idx] = createElement(
              scaleX(origEl.x1),
              scaleY(origEl.y1),
              scaleX(origEl.x2),
              scaleY(origEl.y2),
              origEl.type,
              origEl.color,
              id,
            );
          }
        });
        setElements(elementsCopy, true);
      }
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
      <Toolbar tool={tool} setTool={setTool} selectedColor={selectedColor} onColorChange={color => setSelectedColor(color.hex)} />
      <div className="canvas-tools">
        <div>
          <div onClick={undo} className="canvas-tools__button surface lift">
            <RoughBorder color="var(--surface-color)" strokeWidth={3} />
            <Undo2 />
          </div>
          <div onClick={redo} className="canvas-tools__button surface lift">
            <RoughBorder color="var(--surface-color)" strokeWidth={3} />
            <Redo2 />
          </div>
        </div>
        <div
          onClick={() => {
            setElements([]);
            setSelectedElementIds([]);
          }}
          className="canvas-tools__button surface lift">
          <RoughBorder color="var(--surface-color)" strokeWidth={3} />
          <h2>clear</h2>
        </div>
      </div>

      <NavBar className="canvas-nav" />

      <canvas
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        onPointerDown={handleMouseDown}
        onPointerMove={handleMouseMove}
        onPointerUp={handleMouseUp}
        onPointerCancel={handleMouseUp}>
        Canvas
      </canvas>
    </>
  );
};

export default CanvasPage;
