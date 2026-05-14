import "./Button.css";
import RoughBorder from "../RoughBorder";

export default function Button({ children, variant = "default", onClick, className = "" }) {
  const variantClass = variant === "primary" ? "btn-primary" : variant === "accent" ? "btn-accent" : "";
  return (
    <button className={`surface lift ${variantClass} ${className}`.trim()} onClick={onClick}>
      <RoughBorder color="var(--surface-color)" strokeWidth={3} />
      {children}
    </button>
  );
}
