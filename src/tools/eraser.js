const fadingIds = new Set();

const ERASER_RADIUS = 12;

const distToSegment = (px, py, x1, y1, x2, y2) => {
  const dx = x2 - x1, dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return Math.hypot(px - x1, py - y1);
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
};

const hitTest = (el, x, y) => {
  if (el.type === "pen") {
    if (!el.points?.length) return false;
    if (el.points.length === 1)
      return Math.hypot(x - el.points[0].x, y - el.points[0].y) <= ERASER_RADIUS;
    for (let i = 0; i < el.points.length - 1; i++) {
      if (distToSegment(x, y, el.points[i].x, el.points[i].y, el.points[i + 1].x, el.points[i + 1].y) <= ERASER_RADIUS)
        return true;
    }
    return false;
  }
  if (el.type === "line") {
    return distToSegment(x, y, el.x1, el.y1, el.x2, el.y2) <= ERASER_RADIUS;
  }
  return (
    x >= Math.min(el.x1, el.x2) && x <= Math.max(el.x1, el.x2) &&
    y >= Math.min(el.y1, el.y2) && y <= Math.max(el.y1, el.y2)
  );
};

const eraseAtPoint = ({ elements, setElements }, clientX, clientY) => {
  const hit = [...elements].reverse().find(el => !fadingIds.has(el.id) && hitTest(el, clientX, clientY));
  if (!hit) return;

  fadingIds.add(hit.id);

  // Dims erased element to 50% opacity
  setElements(prev => prev.map(el => el.id === hit.id ? { ...el, opacity: 0.5 } : el), true);

  // Remove element after .25 seconds
  setTimeout(() => {
    setElements(prev => prev.filter(el => el.id !== hit.id));
    fadingIds.delete(hit.id);
  }, 250);
};

export const onMouseDown = (ctx, clientX, clientY) => {
  ctx.setAction("erase");
  eraseAtPoint(ctx, clientX, clientY);
};

export const onMouseMove = (ctx, clientX, clientY) => {
  if (ctx.action !== "erase") return;
  eraseAtPoint(ctx, clientX, clientY);
};

export const getCursor = () => "cell";

export const onMouseUp = () => {};
