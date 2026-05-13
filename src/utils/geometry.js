export const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

export const nearPoint = (x, y, x1, y1, name) => {
  return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
};

export const onLine = (x1, y1, x2, y2, x, y, maxDistance = 1) => {
  const a = { x: x1, y: y1 };
  const b = { x: x2, y: y2 };
  const c = { x, y };
  const offset = distance(a, b) - (distance(a, c) + distance(b, c));
  return Math.abs(offset) < maxDistance ? "inside" : null;
};

export const positionInElement = (x, y, element) => {
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
    case "circle": {
      const tlC = nearPoint(x, y, x1, y1, "tl");
      const trC = nearPoint(x, y, x2, y1, "tr");
      const blC = nearPoint(x, y, x1, y2, "bl");
      const brC = nearPoint(x, y, x2, y2, "br");
      const cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
      const rx = Math.abs(x2 - x1) / 2, ry = Math.abs(y2 - y1) / 2;
      const insideC = rx > 0 && ry > 0 && ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1 ? "inside" : null;
      return tlC || trC || blC || brC || insideC;
    }
    case "pen":
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

export const getElementAtPosition = (x, y, elements) => {
  return elements
    .map(element => ({ ...element, position: positionInElement(x, y, element) }))
    .find(element => element.position !== null);
};

export const adjustElementCoordinates = element => {
  const { type, x1, y1, x2, y2 } = element;
  if (type === "rectangle" || type === "circle") {
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

export const cursorForPosition = position => {
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

export const resizedCoordinates = (clientX, clientY, position, coordinates) => {
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
      return null;
  }
};

export const adjustmentRequired = type => ["line", "rectangle", "circle"].includes(type);

export const elementInMarquee = (element, mx1, my1, mx2, my2) => {
  const left = Math.min(mx1, mx2);
  const right = Math.max(mx1, mx2);
  const top = Math.min(my1, my2);
  const bottom = Math.max(my1, my2);
  const inBounds = (x, y) => x >= left && x <= right && y >= top && y <= bottom;
  switch (element.type) {
    case "line":
      return inBounds(element.x1, element.y1) && inBounds(element.x2, element.y2);
    case "rectangle":
    case "circle":
      return (
        Math.min(element.x1, element.x2) >= left &&
        Math.max(element.x1, element.x2) <= right &&
        Math.min(element.y1, element.y2) >= top &&
        Math.max(element.y1, element.y2) <= bottom
      );
    case "pen":
      return element.points.some(p => inBounds(p.x, p.y));
    default:
      return false;
  }
};

export const computeSelectionBBox = selectedElements => {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  selectedElements.forEach(el => {
    if (el.type === "pen") {
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
