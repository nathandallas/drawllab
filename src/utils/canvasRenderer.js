import rough from "roughjs/bundled/rough.esm";
import { drawElement } from "./elements";
import { getBounds } from "../tools/shared";

// imperative draw pass: clears the canvas, paints the world, draws every element, and
// overlays the marquee selection (if any). called from a useLayoutEffect in Canvas so
// painting happens before the browser shows the next frame.
export const renderCanvas = (canvas, { elements, viewport, marquee, fadingIds, worldWidth, worldHeight }) => {
  if (!canvas) return;
  const context = canvas.getContext("2d");

  // 1. paint the grey "out-of-world" background in screen-space
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#e8e8ea";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 2. apply pan + zoom so everything from here on is drawn in world-space
  context.setTransform(viewport.zoom, 0, 0, viewport.zoom, viewport.panX, viewport.panY);

  // 3. white "paper" representing the drawable world. dividing by zoom keeps line widths
  //    visually constant at any zoom level.
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, worldWidth, worldHeight);
  context.strokeStyle = "#bbbbbb";
  context.lineWidth = 2 / viewport.zoom;
  context.strokeRect(0, 0, worldWidth, worldHeight);

  // 4. draw each element; eraser-hovered ones render at 50% opacity as a preview
  const roughCanvas = rough.canvas(canvas);
  elements.forEach(element => {
    const display = fadingIds.has(element.id) ? { ...element, opacity: 0.5 } : element;
    drawElement(roughCanvas, context, display);
  });

  // 5. overlay the marquee selection rectangle. solid fill only while actively dragging it out.
  if (marquee) {
    context.save();
    context.strokeStyle = "#4a90d9";
    context.lineWidth = 1 / viewport.zoom;
    context.setLineDash([4 / viewport.zoom, 3 / viewport.zoom]);
    const { x, y, w, h } = getBounds(marquee);
    if (marquee.isDragging) {
      context.fillStyle = "rgba(74, 144, 217, 0.08)";
      context.fillRect(x, y, w, h);
    }
    context.strokeRect(x, y, w, h);
    context.restore();
  }
};
