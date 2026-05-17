import "./IconButton.css";
import RoughBorder from "../RoughBorder";

export default function IconButton({ children, onClick, className = "" }) {
  return (
    <button className={`surface lift icon-btn ${className}`.trim()} onClick={onClick}>
      <RoughBorder color="var(--text-primary)" strokeWidth={3} />
      {children}
    </button>
  );
}
