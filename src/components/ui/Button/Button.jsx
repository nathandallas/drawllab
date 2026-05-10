import "./Button.css";

export default function Button({ children, variant = "default", onClick, className = "" }) {
  return (
    <button
      className={`${variant === "primary" ? "btn-primary" : ""} ${className}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
