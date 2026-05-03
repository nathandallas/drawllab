import "./Canvas.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "wouter";
import rough from "roughjs/bundled/rough.esm";
import { getStroke } from "perfect-freehand";
import { SketchPicker } from "react-color";
import { v4 as uuidv4 } from "uuid";

// -----------------------------
// ----- icons for toolbar -----
// -----------------------------

import paintbrush from "../assets/images/paintbrush.svg";
import eraser from "../assets/images/eraser.png"
import line from "../assets/images/draw-line.svg";
import square from "../assets/images/rectangle.svg";
import select from "../assets/images/select.svg";
import home from "../assets/images/home.png";
import about from "../assets/images/about.png";

// ---------------------------------------------
// ---------- Functionality for Tools ----------
// ---------------------------------------------
// ------------- Element Creation --------------
// ---------------------------------------------

const generator = rough.generator();

const createElement = (x1, y1, x2, y2, type, color = "#363636", existingId = null) => {
  const id = existingId ?? uuidv4();
  switch (type) {
    case "line":
    case "rectangle":
      const roughElement =
        type === "line"
          ? generator.line(x1, y1, x2, y2, { bowing: 2, strokeWidth: 3, stroke: color })
          : generator.rectangle(x1, y1, x2 - x1, y2 - y1, { bowing: 2, strokeWidth: 3, stroke: color });

      return { id, x1, y1, x2, y2, type, roughElement, color };
    case "paintbrush":
      return { id, type, points: [{ x: x1, y: y1 }], color };
    default:
      throw new Error(`unrecognized: ${type}`);
  }
};

const SVGpathData = stroke => {
  if (!stroke.length) return "";

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ["M", ...stroke[0], "Q"],
  );

  d.push("Z");
  return d.join(" ");
};

const drawElement = (roughCanvas, context, element) => {
  switch (element.type) {
    case "line":
    case "rectangle":
      roughCanvas.draw(element.roughElement);
      break;
    case "paintbrush":
      const stroke = SVGpathData(
        getStroke(element.points, {
          size: 8,
          thinning: 0.3,
          smoothing: 0.5,
          streamline: 0.7,
        }),
      );
      context.fillStyle = element.color;
      context.fill(new Path2D(stroke));
      break;
    default:
      throw new Error(`unrecognised: ${element.type}`);
  }
};

// --------------------------------------------------------
// ----- Functions to find Position for Select/Resize -----
// --------------------------------------------------------

const nearPoint = (x, y, x1, y1, name) => {
  return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
};

const onLine = (x1, y1, x2, y2, x, y, maxDistance = 1) => {
  const a = { x: x1, y: y1 };
  const b = { x: x2, y: y2 };
  const c = { x, y };
  const offset = distance(a, b) - (distance(a, c) + distance(b, c));
  return Math.abs(offset) < maxDistance ? "inside" : null;
};

const positionInElement = (x, y, element) => {
  const { type, x1, x2, y1, y2 } = element;
  switch (type) {
    case "line":
      const on = onLine(x1, y1, x2, y2, x, y);
      const start = nearPoint(x, y, x1, y1, "start");
      const end = nearPoint(x, y, x2, y2, "end");
      return start || end || on;
    case "rectangle":
      const topLeft = nearPoint(x, y, x1, y1, "tl");
      const topRight = nearPoint(x, y, x2, y1, "tr");
      const bottomLeft = nearPoint(x, y, x1, y2, "bl");
      const bottomRight = nearPoint(x, y, x2, y2, "br");
      const inside = x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
      return topLeft || topRight || bottomLeft || bottomRight || inside;
    case "paintbrush":
      const betweenAnyPoint = element.points.some((point, index) => {
        const nextPoint = element.points[index + 1];
        if (!nextPoint) return false;
        return onLine(point.x, point.y, nextPoint.x, nextPoint.y, x, y, 5) != null;
      });
      return betweenAnyPoint ? "inside" : null;
    default:
      throw new Error(`unrecognised: ${type}`);
  }
};

const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const getElementAtPosition = (x, y, elements) => {
  return elements.map(element => ({ ...element, position: positionInElement(x, y, element) })).find(element => element.position !== null);
};

const adjustElementCoordinates = element => {
  const { type, x1, y1, x2, y2 } = element;
  if (type === "rectangle") {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    return { x1: minX, y1: minY, x2: maxX, y2: maxY };
  } else {
    if (x1 < x2 || (x1 === x2 && y1 < y2)) {
      return { x1, y1, x2, y2 };
    } else {
      return { x1: x2, y1: y2, x2: x1, y2: y1 };
    }
  }
};

const cursorForPosition = position => {
  switch (position) {
    case "tl":
    case "br":
    case "start":
    case "end":
      return "nwse-resize";
    case "tr":
    case "bl":
      return "nesw-resize";
    default:
      return "move";
  }
};

const resizedCoordinates = (clientX, clientY, position, coordinates) => {
  const { x1, y1, x2, y2 } = coordinates;
  switch (position) {
    case "tl":
    case "start":
      return { x1: clientX, y1: clientY, x2, y2 };
    case "tr":
      return { x1, y1: clientY, x2: clientX, y2 };
    case "bl":
      return { x1: clientX, y1, x2, y2: clientY };
    case "br":
    case "end":
      return { x1, y1, x2: clientX, y2: clientY };
    default:
      return null; // Throws Error
  }
};

// --------------------------------------------
// ----- Undo / Redo Button Functionality -----
// --------------------------------------------

const useHistory = initialState => {
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([initialState]);

  const setState = (action, overwrite = false) => {
    const newState = typeof action === "function" ? action(history[index]) : action;
    if (overwrite) {
      const historyCopy = [...history];
      historyCopy[index] = newState;
      setHistory(historyCopy);
    } else {
      const updatedState = [...history].slice(0, index + 1);
      setHistory([...updatedState, newState]);
      setIndex(prevState => prevState + 1);
    }
  };

  const clear = () => index > 0 && setIndex(0);
  const undo = () => index > 0 && setIndex(prevState => prevState - 1);
  const redo = () => index < history.length - 1 && setIndex(prevState => prevState + 1);

  return [history[index], setState, undo, redo, clear];
};

const adjustmentRequired = type => ["line", "rectangle"].includes(type);

const elementInMarquee = (element, mx1, my1, mx2, my2) => {
  const left = Math.min(mx1, mx2);
  const right = Math.max(mx1, mx2);
  const top = Math.min(my1, my2);
  const bottom = Math.max(my1, my2);
  const inBounds = (x, y) => x >= left && x <= right && y >= top && y <= bottom;
  switch (element.type) {
    case "line":
      return inBounds(element.x1, element.y1) && inBounds(element.x2, element.y2);
    case "rectangle":
      return (
        Math.min(element.x1, element.x2) >= left &&
        Math.max(element.x1, element.x2) <= right &&
        Math.min(element.y1, element.y2) >= top &&
        Math.max(element.y1, element.y2) <= bottom
      );
    case "paintbrush":
      return element.points.some(p => inBounds(p.x, p.y));
    default:
      return false;
  }
};


const computeSelectionBBox = selectedElements => {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  selectedElements.forEach(el => {
    if (el.type === "paintbrush") {
      el.points.forEach(p => {
        minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y);
      });
    } else {
      minX = Math.min(minX, el.x1, el.x2); minY = Math.min(minY, el.y1, el.y2);
      maxX = Math.max(maxX, el.x1, el.x2); maxY = Math.max(maxY, el.y1, el.y2);
    }
  });
  return minX !== Infinity ? { minX, minY, maxX, maxY } : null;
};

// ---------------------------
// ----------- PAGE ----------
// ---------------------------

const CanvasPage = () => {
  // ---------------------------
  // ---------- Hooks ----------
  // ---------------------------

  const [elements, setElements, undo, redo, clear] = useHistory([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState("paintbrush");
  const [selectedElement, setSelectedElement] = useState(null); // only used for resize
  const [selectedElementIds, setSelectedElementIds] = useState([]);
  const [marquee, setMarquee] = useState(null);
  const [moveData, setMoveData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#363636");

  // --------------------------------------
  // ---------- Creating Element ----------
  // --------------------------------------

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
      case "line":
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

  // --------------------------------------------
  // --------- Undo/Redo Functionality ----------
  // --------------------------------------------

  useEffect(() => {
    if (tool !== "select") {
      setSelectedElementIds([]);
      setMarquee(null);
    }
  }, [tool]);

  useEffect(() => {
    const undoRedoFunction = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        if (e.shiftKey) {
          redo(); // Mac Redo Cmd + Shift + Z
        } else {
          undo(); // Undo Ctrl + Z
        }
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "y") {
        redo(); // Windows Redo Ctrl + Y
      }
    };
    document.addEventListener("keydown", undoRedoFunction);
    return () => {
      document.removeEventListener("keydown", undoRedoFunction);
    };
  }, [undo, redo]);

  // --------------------------
  // ----- Event Handlers -----
  // --------------------------

  const handleMouseDown = e => {
    const { clientX, clientY } = e;
    if (tool === "select") {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element) {
        const isAlreadySelected = selectedElementIds.includes(element.id);
        if (element.position !== "inside" && selectedElementIds.length === 1 && isAlreadySelected) {
          // Single selected element clicked on a resize handle
          setSelectedElement({ ...element });
          setElements(prevState => prevState);
          setAction("resize");
        } else {
          // Move: if clicking a selected element carry all selected, otherwise select this one alone
          const idsToMove = isAlreadySelected ? selectedElementIds : [element.id];
          if (!isAlreadySelected) setSelectedElementIds([element.id]);

          const data = {};
          elements.filter(el => idsToMove.includes(el.id)).forEach(el => {
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
        // Click on empty space — clear selection and start a new marquee drag
        setSelectedElementIds([]);
        setMarquee({ x1: clientX, y1: clientY, x2: clientX, y2: clientY, isDragging: true });
        setAction("marquee");
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

    if (tool === "select") {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element && selectedElementIds.includes(element.id)) {
        e.target.style.cursor = "move";
      } else if (element && element.position !== "inside") {
        e.target.style.cursor = cursorForPosition(element.position);
      } else if (element) {
        e.target.style.cursor = "move";
      } else {
        e.target.style.cursor = "crosshair";
      }
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
      let newElements = [...elements];
      const selectedIds = [];

      for (const element of elements) {
        if (element.type === "paintbrush") {
          const allIn = element.points.every(p =>
            p.x >= Math.min(marquee.x1, marquee.x2) && p.x <= Math.max(marquee.x1, marquee.x2) &&
            p.y >= Math.min(marquee.y1, marquee.y2) && p.y <= Math.max(marquee.y1, marquee.y2)
          );
          if (allIn) {
            selectedIds.push(element.id);
          } else if (elementInMarquee(element, marquee.x1, marquee.y1, marquee.x2, marquee.y2)) {
            // Partially inside — split into segments
            const { inside, outside } = splitPaintbrushByMarquee(element, marquee.x1, marquee.y1, marquee.x2, marquee.y2);
            newElements = newElements.filter(el => el.id !== element.id);
            inside.forEach(points => {
              const newEl = { id: uuidv4(), type: "paintbrush", points, color: element.color };
              newElements.push(newEl);
              selectedIds.push(newEl.id);
            });
            outside.forEach(points => {
              if (points.length > 0) newElements.push({ id: uuidv4(), type: "paintbrush", points, color: element.color });
            });
          }
        } else if (elementInMarquee(element, marquee.x1, marquee.y1, marquee.x2, marquee.y2)) {
          selectedIds.push(element.id);
        }
      }

      if (newElements.length !== elements.length) setElements(newElements);
      setSelectedElementIds(selectedIds);

      const bbox = computeSelectionBBox(newElements.filter(el => selectedIds.includes(el.id)));
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

      {/* Toolbar Component */}
      <div className="toolbar">
        <input type="radio" id="paintbrush" checked={tool === "paintbrush"} onChange={() => setTool("paintbrush")} className="tool" />
        <label htmlFor="paintbrush" className="tool__label">
          <img src={paintbrush} alt="paintbrush icon" className="toolbar__icon" />
        </label>
        <input type="radio" id="eraser" checked={tool === "eraser"} onChange={() => setTool("eraser")} className="tool" />
        <label htmlFor="eraser" className="tool__label">
          <img src={eraser} alt="eraser icon" className="toolbar__icon" />
        </label>
        <input type="radio" id="line" checked={tool === "line"} onChange={() => setTool("line")} className="tool" />
        <label htmlFor="line" className="tool__label">
          <img src={line} alt="line icon" className="toolbar__icon" />
        </label>
        <input type="radio" id="rectangle" checked={tool === "rectangle"} onChange={() => setTool("rectangle")} className="tool" />
        <label htmlFor="rectangle" className="tool__label">
          <img src={square} alt="rectangle icon" className="toolbar__icon" />
        </label>
        <input type="radio" id="select" checked={tool === "select"} onChange={() => setTool("select")} className="tool" />
        <label htmlFor="select" className="tool__label">
          <img src={select} alt="select icon" className="toolbar__icon" />
        </label>

        <div className="tool__divider"></div>
      </div>

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

        <div onClick={() => { clear(); setSelectedElementIds([]); }} className="canvas-tools__button">
          <h2>clear</h2>
        </div>
      </div>

      {/* Nav Bar Component */}

      <nav className="nav">
        <Link to="/">
          <img src={home} alt="home icon" className="nav__icon click" />
        </Link>
        <Link to="/about">
          <img src={about} alt="about icon" className="nav__icon click" />
        </Link>
      </nav>

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
