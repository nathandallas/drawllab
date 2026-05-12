import { getElementAtPosition } from "../utils/geometry";
import { buildMoveData } from "./shared";

export const onMouseDown = ({ elements, setSelectedElementIds, setMoveData, setElements, setAction }, clientX, clientY) => {
  const element = getElementAtPosition(clientX, clientY, elements);
  if (!element) return;
  const data = buildMoveData([element], clientX, clientY);
  setSelectedElementIds([element.id]);
  setMoveData(data);
  setElements(prev => prev);
  setAction("move");
};

export const getCursor = ({ elements }, clientX, clientY) => {
  const element = getElementAtPosition(clientX, clientY, elements);
  return element ? "move" : "default";
};

export const onMouseUp = () => {};
