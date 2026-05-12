export const buildMoveData = (elements, clientX, clientY) => {
  const data = {};
  elements.forEach(el => {
    if (el.type === "pen") {
      data[el.id] = {
        type: "pen",
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
  return data;
};
