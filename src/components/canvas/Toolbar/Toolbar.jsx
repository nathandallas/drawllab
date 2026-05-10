import { TOOLS } from "../../../utils/constants/tools";
import "./Toolbar.css";

export default function Toolbar({ tool, setTool }) {
  return (
    <div className="toolbar">
      {TOOLS.map(({ id, icon: Icon }) => (
        <div key={id}>
          <input type="radio" id={id} checked={tool === id} onChange={() => setTool(id)} className="tool" />
          <label htmlFor={id} className="tool__label">
            <Icon size={22} className="toolbar__icon" />
          </label>
        </div>
      ))}
      <div className="tool__divider" />
    </div>
  );
}
