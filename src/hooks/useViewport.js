import { useEffect, useRef, useState } from "react";
import { WORLD_WIDTH, WORLD_HEIGHT, MIN_ZOOM, MAX_ZOOM } from "../utils/constants/canvas";

const clampZoom = z => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));

// owns viewport state (pan + zoom) and the math that goes with it. also attaches the
// non-passive wheel listener so ctrl/cmd-wheel anchored zoom and trackpad pan work.
const useViewport = canvasRef => {
  // initial pan centres the world inside the visible window
  const [viewport, setViewport] = useState(() => ({
    panX: window.innerWidth / 2 - WORLD_WIDTH / 2,
    panY: window.innerHeight / 2 - WORLD_HEIGHT / 2,
    zoom: 1,
  }));

  // ref (not state) so pan-drag updates don't trigger re-renders mid-gesture
  const panStateRef = useRef(null);

  // convert a screen-space coord (mouse event) into world-space, undoing pan + zoom
  const screenToWorld = (sx, sy) => ({
    x: (sx - viewport.panX) / viewport.zoom,
    y: (sy - viewport.panY) / viewport.zoom,
  });

  // anchored zoom: keep the world point under (anchorX, anchorY) fixed while zoom changes.
  // computeNewZoom receives the current zoom and returns the desired one (clamped here).
  const zoomAtPoint = (computeNewZoom, anchorX, anchorY) => {
    setViewport(v => {
      const newZoom = clampZoom(computeNewZoom(v.zoom));
      if (newZoom === v.zoom) return v;
      const worldX = (anchorX - v.panX) / v.zoom;
      const worldY = (anchorY - v.panY) / v.zoom;
      return { zoom: newZoom, panX: anchorX - worldX * newZoom, panY: anchorY - worldY * newZoom };
    });
  };

  // snapshot starting pos at mouse-down so the drag can be computed as a delta
  const beginPan = (startX, startY) => {
    panStateRef.current = { startX, startY, origPanX: viewport.panX, origPanY: viewport.panY };
  };

  const updatePan = (clientX, clientY) => {
    if (!panStateRef.current) return;
    const { startX, startY, origPanX, origPanY } = panStateRef.current;
    setViewport(v => ({ ...v, panX: origPanX + (clientX - startX), panY: origPanY + (clientY - startY) }));
  };

  const endPan = () => {
    panStateRef.current = null;
  };

  // wheel: ctrl/cmd+wheel zooms around the cursor; plain wheel pans.
  // non-passive listener so preventDefault suppresses the browser's native page zoom/scroll.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = e => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        const { clientX, clientY } = e;
        setViewport(v => {
          const newZoom = clampZoom(v.zoom * Math.exp(-e.deltaY * 0.0025));
          const worldX = (clientX - v.panX) / v.zoom;
          const worldY = (clientY - v.panY) / v.zoom;
          return { zoom: newZoom, panX: clientX - worldX * newZoom, panY: clientY - worldY * newZoom };
        });
      } else {
        const dx = e.deltaX,
          dy = e.deltaY;
        setViewport(v => ({ ...v, panX: v.panX - dx, panY: v.panY - dy }));
      }
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, [canvasRef]);

  return { viewport, screenToWorld, zoomAtPoint, beginPan, updatePan, endPan };
};

export default useViewport;
