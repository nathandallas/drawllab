import { useState } from "react";
import { Minus, Plus } from "lucide-react";

// zoom UI: -, an editable percentage textbox, +. all three anchor zooming at (anchorX, anchorY).
const ZoomControls = ({ viewport, zoomAtPoint, anchorX, anchorY }) => {
  const [zoomInputValue, setZoomInputValue] = useState("");
  const [isEditingZoom, setIsEditingZoom] = useState(false);

  const zoomByFactor = factor => zoomAtPoint(z => z * factor, anchorX, anchorY);

  const commitZoomInput = () => {
    const parsed = parseFloat(zoomInputValue);
    if (!isNaN(parsed)) zoomAtPoint(() => parsed / 100, anchorX, anchorY);
    setIsEditingZoom(false);
  };

  return (
    <div className="canvas-tools-zoom">
      <div onClick={() => zoomByFactor(1 / 1.1)} className="canvas-tools__button surface lift">
        <Minus />
      </div>
      <input
        className="canvas-tools-zoom__input"
        // while editing the user sees raw input; otherwise the current zoom as a percentage
        value={isEditingZoom ? zoomInputValue : `${Math.round(viewport.zoom * 100)}%`}
        onFocus={e => {
          // entering edit mode: pre-fill with current zoom and select for easy overwrite
          setZoomInputValue(`${Math.round(viewport.zoom * 100)}`);
          setIsEditingZoom(true);
          setTimeout(() => e.target.select(), 0);
        }}
        onChange={e => setZoomInputValue(e.target.value)}
        onBlur={commitZoomInput}
        onKeyDown={e => {
          if (e.key === "Enter") e.target.blur(); // enter commits via the blur handler
          if (e.key === "Escape") {
            // escape cancels without committing
            setIsEditingZoom(false);
            e.target.blur();
          }
        }}
      />
      <div onClick={() => zoomByFactor(1.1)} className="canvas-tools__button surface lift">
        <Plus />
      </div>
    </div>
  );
};

export default ZoomControls;
