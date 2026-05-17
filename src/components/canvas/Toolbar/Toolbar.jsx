import { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import { TOOLS } from "../../../utils/constants/tools";
import RoughBorder from "../../ui/RoughBorder";
import "./Toolbar.css";

const PRESET_COLORS = [
  "#8b3a35",
  "#bc5953",
  "#e67f6e",
  "#e8a09a",
  "#c47fa0",
  "#ed5689",
  "#f384a9",
  "#7b75da",
  "#a5abe7",
  "#3984a3",
  "#6fb7da",
  "#598b7f",
  "#7a9e5e",
  "#aebc89",
  "#d4753a",
  "#f1b376",
  "#d4a832",
  "#f1d896",
  "#363636",
  "#666",
  "#818589",
  "#A9A9A9",
  "#ccc",
  "#fff",
];

export default function Toolbar({ tool, setTool, selectedColor, onColorChange }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const prevToolRef = useRef(tool);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    if (!showColorPicker) return;
    const handleClickOutside = e => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) {
        setShowColorPicker(false);
        setTool(prevToolRef.current);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showColorPicker, setTool]);

  const handleSetTool = newTool => {
    if (newTool === "colorpicker") {
      if (tool !== "colorpicker") prevToolRef.current = tool;
      setShowColorPicker(true);
    } else {
      setShowColorPicker(false);
    }
    setTool(newTool);
  };

  return (
    <div className="toolbar surface">
      <RoughBorder color="var(--text-primary)" strokeWidth={3} />
      {TOOLS.map(({ id, icon: Icon }) => (
        <div key={id}>
          <input type="radio" id={id} checked={tool === id} onChange={() => handleSetTool(id)} className="tool" />
          <label htmlFor={id} className="tool__label">
            {id === "colorpicker" ? (
              <svg width={22} height={22} viewBox="0 0 22 22" className="toolbar__icon">
                <circle cx={11} cy={11} r={9} fill={selectedColor} stroke="currentColor" strokeWidth={2} />
              </svg>
            ) : (
              <Icon size={22} className="toolbar__icon" />
            )}
          </label>
        </div>
      ))}
      <div className="tool__divider" />
      {showColorPicker && (
        <div className="color-picker-popup" ref={colorPickerRef}>
          <SketchPicker disableAlpha presetColors={PRESET_COLORS} color={selectedColor} onChange={onColorChange} />
        </div>
      )}
    </div>
  );
}
