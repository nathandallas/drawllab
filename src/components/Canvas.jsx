import "./Canvas.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createElement } from "../utils/elements";
import { resizedCoordinates, computeSelectionBBox } from "../utils/geometry";
import { renderCanvas } from "../utils/canvasRenderer";
import { applyGroupTranslate, applyGroupScale } from "../utils/transforms";
import { loadElements, saveElements } from "../utils/storage";
import { WORLD_WIDTH, WORLD_HEIGHT, MARQUEE_PADDING } from "../utils/constants/canvas";
import useHistory from "../hooks/useHistory";
import useViewport from "../hooks/useViewport";
import useWindowSize from "../hooks/useWindowSize";
import useCanvasShortcuts from "../hooks/useCanvasShortcuts";
import useForceLightTheme from "../hooks/useForceLightTheme";
import NavBar from "./NavBar/NavBar";
import Toolbar from "./canvas/Toolbar/Toolbar";
import ZoomControls from "./canvas/ZoomControls/ZoomControls";
import CanvasActions from "./canvas/CanvasActions/CanvasActions";
import { TOOLS } from "../tools";

const CanvasPage = () => {
  // drawing state: list of elements plus undo/redo, current gesture, active tool,
  // and selection bookkeeping (single hit, multi-marquee, in-flight drag snapshot).
  const [initialElements] = useState(loadElements);
  const [elements, setElements, undo, redo] = useHistory(initialElements);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("pen");
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedElementIds, setSelectedElementIds] = useState([]);
  const [marquee, setMarquee] = useState(null);
  const [moveData, setMoveData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#363636");
  // ids the eraser is hovering — rendered semi-transparent until mouse-up confirms deletion
  const [fadingIds, setFadingIds] = useState(() => new Set());

  const canvasRef = useRef(null);
  const windowSize = useWindowSize();
  const { viewport, screenToWorld, zoomAtPoint, beginPan, updatePan, endPan } = useViewport(canvasRef);
  const { isSpaceDown } = useCanvasShortcuts({ undo, redo });
  useForceLightTheme();

  // persist on every change
  useEffect(() => {
    saveElements(elements);
  }, [elements]);

  // main render loop — paints before the next frame to prevent flicker during drag/resize
  useLayoutEffect(() => {
    renderCanvas(canvasRef.current, {
      elements,
      viewport,
      marquee,
      fadingIds,
      worldWidth: WORLD_WIDTH,
      worldHeight: WORLD_HEIGHT,
    });
  }, [elements, marquee, fadingIds, viewport, windowSize]);

  // mutate one element by id. shapes are recreated from new coords; pen strokes append a point.
  // the `true` flag tells useHistory to overwrite the latest entry, so dragging produces one
  // undo step rather than hundreds.
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

  // clear selection when switching away from a selection-related tool
  useEffect(() => {
    if (tool !== "pointer" && tool !== "marquee" && tool !== "move") {
      setSelectedElementIds([]);
      setMarquee(null);
    }
  }, [tool]);

  // show a grab/grabbing cursor while panning or holding space
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (action === "pan") canvas.style.cursor = "grabbing";
    else if (isSpaceDown) canvas.style.cursor = "grab";
  }, [action, isSpaceDown]);

  // bundle everything a tool handler needs into one object. each tool module in ../tools
  // receives this and reads/mutates the relevant pieces of canvas state.
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

  // pointer-down: start a pan if space/middle-click is held, otherwise delegate to the active tool
  const handleMouseDown = e => {
    const { clientX, clientY } = e;

    // space-drag and middle mouse button always pan, regardless of selected tool
    if (isSpaceDown || e.button === 1) {
      beginPan(clientX, clientY);
      setAction("pan");
      return;
    }

    const { x, y } = screenToWorld(clientX, clientY);
    TOOLS[tool]?.onMouseDown(getCtx(), x, y);
  };

  // pointer-move: dispatches based on the current action (draw / erase / move / resize / marquee / pan)
  const handleMouseMove = e => {
    const { clientX, clientY } = e;

    // safety net: if no button is currently pressed but a drag is still in progress
    // (e.g. user released outside the canvas), cancel the action
    if (e.buttons === 0 && action !== "none") {
      setAction("none");
      setMoveData(null);
      endPan();
      return;
    }

    // active pan drag: update viewport by the cursor delta from the gesture start
    if (action === "pan") {
      e.target.style.cursor = "grabbing";
      updatePan(clientX, clientY);
      return;
    }

    // space held but mouse not yet down — hint that panning is available
    if (isSpaceDown) {
      e.target.style.cursor = "grab";
      return;
    }

    // ask the active tool what cursor is appropriate at this world position
    const { x, y } = screenToWorld(clientX, clientY);
    e.target.style.cursor = TOOLS[tool]?.getCursor(getCtx(), x, y) ?? "default";

    if (action === "erase") {
      // eraser tool fades hovered elements; the actual delete happens on mouse-up
      TOOLS[tool]?.onMouseMove?.(getCtx(), x, y);
    } else if (action === "draw") {
      // extend the in-progress shape/stroke by updating its end point to the current cursor
      const { id, x1, y1 } = elements[elements.length - 1];
      updateElement(id, x1, y1, x, y, tool);
    } else if (action === "marquee") {
      // expand the marquee selection rectangle to follow the cursor
      setMarquee(prev => ({ ...prev, x2: x, y2: y, isDragging: true }));
    } else if (action === "move" && moveData) {
      // group move: translate every selected element using offsets snapshotted at mouse-down
      const next = applyGroupTranslate(elements, moveData, x, y);
      setElements(next, true);
      // recompute the marquee bbox so the selection rectangle follows the moved elements
      const bbox = computeSelectionBBox(next.filter(el => selectedElementIds.includes(el.id)));
      if (bbox) {
        setMarquee({
          x1: bbox.minX - MARQUEE_PADDING,
          y1: bbox.minY - MARQUEE_PADDING,
          x2: bbox.maxX + MARQUEE_PADDING,
          y2: bbox.maxY + MARQUEE_PADDING,
        });
      }
    } else if (action === "marquee-resize" && selectedElement && moveData) {
      // resize a group selection by dragging a handle on the marquee — scales all contained elements
      const { position, x1, y1, x2, y2 } = selectedElement;
      const coords = resizedCoordinates(x, y, position, { x1, y1, x2, y2 });
      if (!coords) return;
      setMarquee(prev => ({ ...prev, ...coords }));

      const { origBbox, origElements } = moveData;
      if (origBbox) {
        setElements(applyGroupScale(elements, origElements, origBbox, coords, MARQUEE_PADDING), true);
      }
    } else if (action === "resize" && selectedElement) {
      // single-element resize: derive new coords from the dragged handle and apply directly
      const { id, type, position, ...coordinates } = selectedElement;
      const { x1, y1, x2, y2 } = resizedCoordinates(x, y, position, coordinates);
      updateElement(id, x1, y1, x2, y2, type);
    }
  };

  // pointer-up: end pans cleanly, otherwise let the tool finalise its gesture and reset action state
  const handleMouseUp = () => {
    if (action === "pan") {
      endPan();
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
      <CanvasActions
        onUndo={undo}
        onRedo={redo}
        onClear={() => {
          setElements([]);
          setSelectedElementIds([]);
        }}
      />
      <ZoomControls viewport={viewport} zoomAtPoint={zoomAtPoint} anchorX={windowSize.w / 3} anchorY={windowSize.h / 3} />
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
