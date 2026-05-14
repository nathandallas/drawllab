import RoughBorder from "../RoughBorder";

export default function Panel({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`box ${className}`.trim()}>
      <RoughBorder color="var(--surface-color)" strokeWidth={3} />
      {children}
    </Tag>
  );
}
