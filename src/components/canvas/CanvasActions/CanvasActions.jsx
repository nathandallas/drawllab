import { Redo2, Undo2 } from "lucide-react";
import RoughBorder from "../../ui/RoughBorder";

// undo / redo / clear button cluster shown in the top corner of the canvas
const CanvasActions = ({ onUndo, onRedo, onClear }) => (
  <div className="canvas-tools">
    <div>
      <div onClick={onUndo} className="canvas-tools__button surface lift">
        <RoughBorder color="var(--text-primary)" strokeWidth={3} />
        <Undo2 />
      </div>
      <div onClick={onRedo} className="canvas-tools__button surface lift">
        <RoughBorder color="var(--text-primary)" strokeWidth={3} />
        <Redo2 />
      </div>
    </div>
    <div onClick={onClear} className="canvas-tools__button surface lift">
      <RoughBorder color="var(--text-primary)" strokeWidth={3} />
      <h2>clear</h2>
    </div>
  </div>
);

export default CanvasActions;
