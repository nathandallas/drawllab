import { useEffect, useMemo, useRef } from "react";
import rough from "roughjs/bundled/rough.esm";

let seedCounter = 0;

export default function RoughBorder({ color = "currentColor", strokeWidth = 3, roughness = 1.5, bowing = 2 }) {
  const svgRef = useRef(null);
  const seed = useMemo(() => ++seedCounter, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || !svg.parentElement) return;

    const draw = () => {
      const parent = svg.parentElement;
      const width = parent.offsetWidth;
      const height = parent.offsetHeight;
      if (width <= 0 || height <= 0) return;
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
      svg.innerHTML = "";
      const rc = rough.svg(svg);
      const pad = strokeWidth;
      const node = rc.rectangle(pad, pad, width - pad * 2, height - pad * 2, {
        stroke: "currentColor",
        strokeWidth,
        roughness,
        bowing,
        seed,
      });
      svg.appendChild(node);
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(svg.parentElement);
    return () => observer.disconnect();
  }, [strokeWidth, roughness, bowing, seed]);

  return (
    <svg
      ref={svgRef}
      className="rough-border"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", color }}
      aria-hidden="true"
    />
  );
}
