import RoughBorder from "../RoughBorder";

export default function Panel({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`box ${className}`.trim()}>
      <RoughBorder color="var(--text-primary)" strokeWidth={3} />
      {children}
    </Tag>
  );
}
