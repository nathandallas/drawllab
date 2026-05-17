import "./Canvas.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import { createElement, drawElement } from "../utils/elements";
import { resizedCoordinates, computeSelectionBBox } from "../utils/geometry";
import useHistory from "../hooks/useHistory";
import NavBar from "./NavBar/NavBar";
import Toolbar from "./canvas/Toolbar/Toolbar";
import { TOOLS } from "../tools";
import { getBounds } from "../tools/shared";
import { Minus, Plus, Redo2, Undo2 } from "lucide-react";
import RoughBorder from "./ui/RoughBorder";

const STORAGE_KEY = "drawllab-elements";

export const WORLD_WIDTH = 4000;
export const WORLD_HEIGHT = 4000;
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;
const clampZoom = z => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));

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

  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  const [viewport, setViewport] = useState(() => ({
    panX: window.innerWidth / 2 - WORLD_WIDTH / 2,
    panY: window.innerHeight / 2 - WORLD_HEIGHT / 2,
    zoom: 1,
  }));
  const [isSpaceDown, setIsSpaceDown] = useState(false);
  const [zoomInputValue, setZoomInputValue] = useState("");
  const [isEditingZoom, setIsEditingZoom] = useState(false);
  const panStateRef = useRef(null);

  const screenToWorld = (sx, sy) => ({
    x: (sx - viewport.panX) / viewport.zoom,
    y: (sy - viewport.panY) / viewport.zoom,
  });

  useEffect(() => {
    try {
      const serializable = elements.map(({ roughElement, ...rest }) => rest);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } catch {}
  }, [elements]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#e8e8ea";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.setTransform(viewport.zoom, 0, 0, viewport.zoom, viewport.panX, viewport.panY);

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
    context.strokeStyle = "#bbbbbb";
    context.lineWidth = 2 / viewport.zoom;
    context.strokeRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    const roughCanvas = rough.canvas(canvas);

    elements.forEach(element => {
      const display = fadingIds.has(element.id) ? { ...element, opacity: 0.5 } : element;
      drawElement(roughCanvas, context, display);
    });

    if (marquee) {
      context.save();
      context.strokeStyle = "#4a90d9";
      context.lineWidth = 1 / viewport.zoom;
      context.setLineDash([4 / viewport.zoom, 3 / viewport.zoom]);
      const { x, y, w, h } = getBounds(marquee);
      if (marquee.isDragging) {
        context.fillStyle = "rgba(74, 144, 217, 0.08)";
        context.fillRect(x, y, w, h);
      }
      context.strokeRect(x, y, w, h);
      context.restore();
    }
  }, [elements, marquee, fadingIds, viewport, windowSize]);

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
    const isEditable = el => el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
    const onKeyDown = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") undo();
      if ((e.metaKey || e.ctrlKey) && e.key === "y") redo();
      if (e.code === "Space" && !e.repeat && !isEditable(e.target)) {
        e.preventDefault();
        setIsSpaceDown(true);
      }
    };
    const onKeyUp = e => {
      if (e.code === "Space") setIsSpaceDown(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [undo, redo]);

  useEffect(() => {
    const onResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = e => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        const { clientX, clientY } = e;
        setViewport(v => {
          const newZoom = clampZoom(v.zoom * Math.exp(-e.deltaY * 0.0025));
          const worldX = (clientX - v.panX) / v.zoom;
          const worldY = (clientY - v.panY) / v.zoom;
          return { zoom: newZoom, panX: clientX - worldX * newZoom, panY: clientY - worldY * newZoom };
        });
      } else {
        const dx = e.deltaX,
          dy = e.deltaY;
        setViewport(v => ({ ...v, panX: v.panX - dx, panY: v.panY - dy }));
      }
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (action === "pan") canvas.style.cursor = "grabbing";
    else if (isSpaceDown) canvas.style.cursor = "grab";
  }, [action, isSpaceDown]);

  const zoomAtPoint = (computeNewZoom, anchorX, anchorY) => {
    setViewport(v => {
      const newZoom = clampZoom(computeNewZoom(v.zoom));
      if (newZoom === v.zoom) return v;
      const worldX = (anchorX - v.panX) / v.zoom;
      const worldY = (anchorY - v.panY) / v.zoom;
      return { zoom: newZoom, panX: anchorX - worldX * newZoom, panY: anchorY - worldY * newZoom };
    });
  };

  const zoomByFactor = factor => zoomAtPoint(z => z * factor, windowSize.w / 3, windowSize.h / 3);

  const commitZoomInput = () => {
    const parsed = parseFloat(zoomInputValue);
    if (!isNaN(parsed)) zoomAtPoint(() => parsed / 100, windowSize.w / 3, windowSize.h / 3);
    setIsEditingZoom(false);
  };

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

    if (isSpaceDown || e.button === 1) {
      panStateRef.current = { startX: clientX, startY: clientY, origPanX: viewport.panX, origPanY: viewport.panY };
      setAction("pan");
      return;
    }

    const { x, y } = screenToWorld(clientX, clientY);
    TOOLS[tool]?.onMouseDown(getCtx(), x, y);
  };

  const handleMouseMove = e => {
    const { clientX, clientY } = e;

    if (e.buttons === 0 && action !== "none") {
      setAction("none");
      setMoveData(null);
      panStateRef.current = null;
      return;
    }

    if (action === "pan" && panStateRef.current) {
      e.target.style.cursor = "grabbing";
      const { startX, startY, origPanX, origPanY } = panStateRef.current;
      setViewport(v => ({ ...v, panX: origPanX + (clientX - startX), panY: origPanY + (clientY - startY) }));
      return;
    }

    if (isSpaceDown) {
      e.target.style.cursor = "grab";
      return;
    }

    const { x, y } = screenToWorld(clientX, clientY);
    e.target.style.cursor = TOOLS[tool]?.getCursor(getCtx(), x, y) ?? "default";

    if (action === "erase") {
      TOOLS[tool]?.onMouseMove?.(getCtx(), x, y);
    } else if (action === "draw") {
      const { id, x1, y1 } = elements[elements.length - 1];
      updateElement(id, x1, y1, x, y, tool);
    } else if (action === "marquee") {
      setMarquee(prev => ({ ...prev, x2: x, y2: y, isDragging: true }));
    } else if (action === "move" && moveData) {
      const elementsCopy = [...elements];
      Object.entries(moveData).forEach(([id, data]) => {
        const idx = elementsCopy.findIndex(el => el.id === id);
        if (idx === -1) return;
        if (data.type === "pen") {
          elementsCopy[idx] = {
            ...elementsCopy[idx],
            points: data.originalPoints.map((_, i) => ({
              x: x - data.xOffsets[i],
              y: y - data.yOffsets[i],
            })),
          };
        } else {
          const newX1 = x - data.offsetX;
          const newY1 = y - data.offsetY;
          elementsCopy[idx] = createElement(newX1, newY1, newX1 + data.width, newY1 + data.height, data.type, data.color, id);
        }
      });
      setElements(elementsCopy, true);
      const bbox = computeSelectionBBox(elementsCopy.filter(el => selectedElementIds.includes(el.id)));
      if (bbox) setMarquee({ x1: bbox.minX - 8, y1: bbox.minY - 8, x2: bbox.maxX + 8, y2: bbox.maxY + 8 });
    } else if (action === "marquee-resize" && selectedElement && moveData) {
      const { position, x1, y1, x2, y2 } = selectedElement;
      const coords = resizedCoordinates(x, y, position, { x1, y1, x2, y2 });
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
      const { x1, y1, x2, y2 } = resizedCoordinates(x, y, position, coordinates);
      updateElement(id, x1, y1, x2, y2, type);
    }
  };

  const handleMouseUp = () => {
    if (action === "pan") {
      panStateRef.current = null;
      setAction("none");
      return;
    }
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
            <RoughBorder color="var(--text-primary)" strokeWidth={3} />
            <Undo2 />
          </div>
          <div onClick={redo} className="canvas-tools__button surface lift">
            <RoughBorder color="var(--text-primary)" strokeWidth={3} />
            <Redo2 />
          </div>
        </div>
        <div
          onClick={() => {
            setElements([]);
            setSelectedElementIds([]);
          }}
          className="canvas-tools__button surface lift">
          <RoughBorder color="var(--text-primary)" strokeWidth={3} />
          <h2>clear</h2>
        </div>
      </div>

      <div className="canvas-tools-zoom">
        <div onClick={() => zoomByFactor(1 / 1.1)} className="canvas-tools__button surface lift">
          <Minus />
        </div>
        <input
          className="canvas-tools-zoom__input"
          value={isEditingZoom ? zoomInputValue : `${Math.round(viewport.zoom * 100)}%`}
          onFocus={e => {
            setZoomInputValue(`${Math.round(viewport.zoom * 100)}`);
            setIsEditingZoom(true);
            setTimeout(() => e.target.select(), 0);
          }}
          onChange={e => setZoomInputValue(e.target.value)}
          onBlur={commitZoomInput}
          onKeyDown={e => {
            if (e.key === "Enter") e.target.blur();
            if (e.key === "Escape") {
              setIsEditingZoom(false);
              e.target.blur();
            }
          }}
        />
        <div onClick={() => zoomByFactor(1.1)} className="canvas-tools__button surface lift">
          <Plus />
        </div>
      </div>

      <NavBar className="canvas-nav" />

      <canvas
        id="canvas"
        ref={canvasRef}
        width={windowSize.w}
        height={windowSize.h}
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
