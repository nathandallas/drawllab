import './Canvas.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import rough from 'roughjs/bundled/rough.esm';
import { getStroke } from 'perfect-freehand';
import { CirclePicker } from 'react-color';

// -----------------------------
// ----- icons for toolbar -----
// -----------------------------

import paintbrush from '../assets/images/paintbrush.svg';
import line from '../assets/images/draw-line.svg';
import square from '../assets/images/rectangle.svg';
import select from '../assets/images/select.svg';
import home from '../assets/images/home.png';
import about from '../assets/images/about.png';
import deleteicon from '../assets/images/delete.png';
// import colorpickicon from '../assets/images/color-picker.svg';
import undoIcon from '../assets/images/undo.svg'
import redoIcon from '../assets/images/redo.svg'


// ---------------------------------------------
// ---------- Functionality for Tools ----------
// ---------------------------------------------
// ------------- Element Creation --------------
// ---------------------------------------------

const generator = rough.generator();

const createElement = (id, x1, y1, x2, y2, type, selectedColor) => {
  switch (type) {
    case "line":
    case "rectangle":
      const roughElement =
        type === "line"
			  ? generator.line(x1, y1, x2, y2, { bowing: 2, strokeWidth: 2.5, stroke: selectedColor })
          : generator.rectangle(x1, y1, x2 - x1, y2 - y1, { bowing: 2, strokeWidth: 2.5, stroke: selectedColor });

      return { id, x1, y1, x2, y2, type, roughElement };
    case "paintbrush":
      return { id, type, points: [{ x: x1, y: y1 }]};
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
    ["M", ...stroke[0], "Q"]
  );

  d.push("Z");
  return d.join(" ");
};

const drawElement = (roughCanvas, context, element, selectedColor) => {
  switch (element.type) {
    case "line":
    case "rectangle":
      roughCanvas.draw(element.roughElement);
      context.fill(new Path2D(element.roughElement));
      context.fillStyle = selectedColor;
      break;
    case "paintbrush":
      const stroke = SVGpathData(getStroke(element.points, {
				size: 8,
				thinning: 0.3,
				smoothing: 0.5,
        streamline: 0.7
	  }));
      context.fill(new Path2D(stroke));
      context.fillStyle = selectedColor;
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
  return elements
    .map(element => ({ ...element, position: positionInElement(x, y, element) }))
    .find(element => element.position !== null);
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
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#363636');

  // --------------------------------------
  // ---------- Creating Element ----------
  // --------------------------------------

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);

    elements
      .map(element => drawElement(roughCanvas, context, element, selectedColor));
  }, [elements, ...selectedColor]);

  const updateElement = (id, x1, y1, x2, y2, type) => {
    const elementsCopy = [...elements];

    switch (type) {
      case "line":
      case "rectangle":
        elementsCopy[id] = createElement(id, x1, y1, x2, y2, type);
        break;
      case "paintbrush":
        elementsCopy[id].points = [...elementsCopy[id].points, { x: x2, y: y2 }];
        break;
      default:
        throw new Error(`unrecognised: ${type}`);
    }

    setElements(elementsCopy, true);
  };
  
	// --------------------------------------------
	// ----- Undo/Redo + Ctrl Z Functionality -----
	// --------------------------------------------

  useEffect(() => {
    const undoRedoFunction = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
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
        if (element.type === "paintbrush") {
          const xOffsets = element.points.map(point => clientX - point.x);
          const yOffsets = element.points.map(point => clientY - point.y);
          setSelectedElement({ ...element, xOffsets, yOffsets });
        } else {
          const offsetX = clientX - element.x1;
          const offsetY = clientY - element.y1;
          setSelectedElement({ ...element, offsetX, offsetY });
        }
        setElements(prevState => prevState);

        if (element.position === "inside") {
          setAction("move");
        } else {
          setAction("resize");
        }
      }
    } else {
      const id = elements.length;
      const element = createElement(id, clientX, clientY, clientX, clientY, tool);
      setElements(prevState => [...prevState, element]);
      setSelectedElement(element);

      setAction("draw");
    }
  };

  const handleMouseMove = e => {
    const { clientX, clientY } = e;

    if (tool === "select") {
      const element = getElementAtPosition(clientX, clientY, elements);
      e.target.style.cursor = element ? cursorForPosition(element.position) : "default";
    }

    if (action === "draw") {
      const index = elements.length - 1;
      const { x1, y1 } = elements[index];
      updateElement(index, x1, y1, clientX, clientY, tool);
    } else if (action === "move") {
      if (selectedElement.type === "paintbrush") {
        const newPoints = selectedElement.points.map((_, index) => ({
          x: clientX - selectedElement.xOffsets[index],
          y: clientY - selectedElement.yOffsets[index],
        }));
        const elementsCopy = [...elements];
        elementsCopy[selectedElement.id] = {
          ...elementsCopy[selectedElement.id],
          points: newPoints,
        };
        setElements(elementsCopy, true);
      } else {
        const { id, x1, x2, y1, y2, type, offsetX, offsetY } = selectedElement;
        const width = x2 - x1;
        const height = y2 - y1;
        const newX1 = clientX - offsetX;
        const newY1 = clientY - offsetY;
        updateElement(id, newX1, newY1, newX1 + width, newY1 + height, type);
      }
    } else if (action === "resize") {
      const { id, type, position, ...coordinates } = selectedElement;
      const { x1, y1, x2, y2 } = resizedCoordinates(clientX, clientY, position, coordinates);
      updateElement(id, x1, y1, x2, y2, type);
    }
  };

  const handleMouseUp = () => {
    if (selectedElement) {
      const index = selectedElement.id;
      const { id, type } = elements[index];
      if ((action === "draw" || action === "resize") && adjustmentRequired(type)) {
        const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
        updateElement(id, x1, y1, x2, y2, type);
      }
    }
    setAction("none");
    setSelectedElement(null);
  };
 


	// ----------------------------
	// ---------- Render ----------
	// ----------------------------

  return (
	  <>
			<div className="color">
				<CirclePicker
					colors={
						[ '#a5abe7',
						'#6fb7da', 
						'#aebc89', 
						'#f1d896', 
						'#e67f6e', 
						'#f384a9', 
						'#7b75da', 
						'#3984a3', 
						'#598b7f', 
						'#f1b376', 
						'#bc5953', 
						'#ed5689', 
						'#363636', 
						'#666',
						'#818589', 
						'#A9A9A9',
						'#ccc', 
						'#fff'
						]}
          color={selectedColor}
					onChange={color=>setSelectedColor(color.hex)}
				/>
			</div>
			
		{/* Toolbar Component */}
		  <div className="toolbar">
			{/* <input
				type="radio"
				id="colorpick"
				checked={tool === "colorpick"}
				onChange={() => setTool("colorpick")}
				className="tool color"
			/>
			<label
				htmlFor="colorpick"
				className="tool__label"
			>
			<div className="tool__div">
				<img src={colorpickicon} alt="colorpick icon" className="toolbar__icon"/>
			</div>
			</label> */}
			
			<input
				type="radio"
				id="paintbrush"
				checked={tool === "paintbrush"}
				onChange={() => setTool("paintbrush")}
				className="tool"
			/>
			<label
				htmlFor="paintbrush"
				className="tool__label"
			>
				<img src={paintbrush} alt="paintbrush icon" className="toolbar__icon"/>
			</label>
			<input
				type="radio"
				id="line"
				checked={tool === "line"}
				onChange={() => setTool("line")}
				className="tool"
			/>
			<label
				htmlFor="line"
				className="tool__label"
			>
				<img src={line} alt="line icon" className="toolbar__icon"/>
			</label>
			<input
				type="radio"
				id="rectangle"
				checked={tool === "rectangle"}
				onChange={() => setTool("rectangle")}
				className="tool"
			/>
			<label
				htmlFor="rectangle"
				className="tool__label"
			>
				<img src={square} alt="rectangle icon" className="toolbar__icon"/>
			</label>
			<input
				type="radio"
				id="select"
				checked={tool === "select"}
				onChange={() => setTool("select")}
				className="tool"
			/>
			<label
				htmlFor="select"
				className="tool__label"
			>
				<img src={select} alt="select icon" className="toolbar__icon"/>
			</label>

      <div className="tool__divider"></div>

				{/* Undo/Redo/Clear Buttons should stay at bottom of list */}
				
			<div onClick={clear} className="click">
				<img src={deleteicon} alt="clear canvas" className="toolbar__icon" />
			</div>
			<div onClick={undo} className="click">
				<img src={undoIcon} alt="undo" className="toolbar__icon" />
			</div>
			<div onClick={redo} className="click">
				<img src={redoIcon} alt="redo" className="toolbar__icon" />
			</div>

		</div>

		{/* Nav Bar Component */}

		<nav className="nav">
			<Link to="/">
				<img src={home} alt="home icon" className="nav__icon click"/>
			</Link>
			<Link to="/about">
				<img src={about} alt="about icon" className="nav__icon click"/>
			</Link>
		</nav>

		{/* Canvas Component */}
		<canvas
			id="canvas"
			width={window.innerWidth}
			height={window.innerHeight}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
		>
			Canvas
		</canvas>
    </>
  )
}

export default CanvasPage;
