import { createElement } from "../utils/elements";
import { adjustElementCoordinates, adjustmentRequired } from "../utils/geometry";

const makeShapeTool = type => ({
  onMouseDown: ({ selectedColor, setElements, setSelectedElementIds, setAction }, clientX, clientY) => {
    const element = createElement(clientX, clientY, clientX, clientY, type, selectedColor);
    setElements(prev => [...prev, element]);
    setSelectedElementIds([element.id]);
    setAction("draw");
  },
  getCursor: () => "crosshair",
  onMouseUp: ({ action, elements, updateElement }) => {
    if (action !== "draw") return;
    const last = elements[elements.length - 1];
    if (last && adjustmentRequired(last.type)) {
      const { x1, y1, x2, y2 } = adjustElementCoordinates(last);
      updateElement(last.id, x1, y1, x2, y2, last.type);
    }
  },
});

export const line = makeShapeTool("line");
export const rectangle = makeShapeTool("rectangle");
export const circle = makeShapeTool("circle");
