import rough from "roughjs/bundled/rough.esm";
import { getStroke } from "perfect-freehand";
import { v4 as uuidv4 } from "uuid";

const generator = rough.generator();

export const createElement = (x1, y1, x2, y2, type, color = "#363636", existingId = null) => {
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

export const drawElement = (roughCanvas, context, element) => {
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
