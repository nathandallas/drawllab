import "./IconButton.css";

export default function IconButton({ children, onClick, className = "" }) {
  return (
    <button className={`icon-btn ${className}`.trim()} onClick={onClick}>
      {children}
    </button>
  );
}
