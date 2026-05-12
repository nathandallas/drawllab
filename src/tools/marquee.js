import { computeSelectionBBox, elementInMarquee } from "../utils/geometry";
import { buildMoveData } from "./shared";

export const onMouseDown = (ctx, clientX, clientY) => {
  const { marquee, selectedElementIds, elements, setSelectedElementIds, setMarquee, setMoveData, setElements, setAction } = ctx;

  const insideExisting =
    marquee &&
    clientX >= Math.min(marquee.x1, marquee.x2) &&
    clientX <= Math.max(marquee.x1, marquee.x2) &&
    clientY >= Math.min(marquee.y1, marquee.y2) &&
    clientY <= Math.max(marquee.y1, marquee.y2);

  if (insideExisting && selectedElementIds.length > 0) {
    const targets = elements.filter(el => selectedElementIds.includes(el.id));
    const data = buildMoveData(targets, clientX, clientY);
    setMoveData(data);
    setElements(prev => prev);
    setAction("move");
    return;
  }

  setSelectedElementIds([]);
  setMarquee({ x1: clientX, y1: clientY, x2: clientX, y2: clientY, isDragging: true });
  setAction("marquee");
};

export const getCursor = () => "crosshair";

export const onMouseUp = ({ action, marquee, elements, setSelectedElementIds, setMarquee }) => {
  if (action !== "marquee" || !marquee) return;
  const selectedIds = elements
    .filter(el => elementInMarquee(el, marquee.x1, marquee.y1, marquee.x2, marquee.y2))
    .map(el => el.id);
  setSelectedElementIds(selectedIds);
  const bbox = computeSelectionBBox(elements.filter(el => selectedIds.includes(el.id)));
  setMarquee(bbox ? { x1: bbox.minX - 8, y1: bbox.minY - 8, x2: bbox.maxX + 8, y2: bbox.maxY + 8 } : null);
};
