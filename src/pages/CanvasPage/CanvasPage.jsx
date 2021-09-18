import './CanvasPage.scss';
import React, { useLayoutEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

function createElement(x1, y1, x2, y2, type) {
	const roughElement =
		type === "line"
			? generator.line(x1, y1, x2, y2)
			: generator.rectangle(x1, y1, x2 - x1, y2 - y1);
		// generator.circle(80, 120, 50);;
  return {x1, y1, x2, y2, type, roughElement};
}

const isWithinElement = (x, y, element) => {
	const { type, x1, y1, x2, y2 } = element;
  if (type === "rectangle") {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    return x >= minX && x <= maxX && y >= minY && y <= maxY;
  } else {
		const a = { x: x1, y: y1 };
		const b = { x: x2, y: y2 };
		const c = { x, y };
		const offset = distance(a, b) - (distance(a, c) + distance(b, c));
		return Math.abs(offset) < 1;
  }
};

const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y-b.y, 2));

const getElementAtPosition = (x, y, elements) => {
	return elements.find(element => isWithinElement(x, y, element));
};

const CanvasPage = () => {

  const [elements, setElements] = useState([]);
	const [action, setAction] = useState("none");
	const [tool, setTool] = useState("line")

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);

    elements.forEach(({roughElement}) => roughCanvas.draw(roughElement));
  }, [elements]);
  
	const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
		
		if (tool === "select") {
			const element = getElementAtPosition(clientX, clientY, elements)
			if (element) {
				setAction("moving");
			}
		} else {
    const element = createElement(clientX, clientY, clientX, clientY, tool);
		setElements((prevState) => [...prevState, element]);
			
		setAction("drawing");

		}
  };
  
  const handleMouseMove = (e) => {
		if (action === "drawing") {
			const { clientX, clientY } = e;
			const index = elements.length - 1;
			const { x1, y1 } = elements[index];
			const updatedElement = createElement(x1, y1, clientX, clientY, tool);

			const elementsCopy = [...elements];
			elementsCopy[index] = updatedElement;
			setElements(elementsCopy);
		}
  };
  
  const handleMouseUp = () => {
    setAction("none");
  };

  return (
		<>
			{/* Toolbar Component */}
			<div className="toolbar">
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
					Line
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
					Rectangle
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
					Select
				</label>
			</div>
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
