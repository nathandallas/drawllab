export default function Panel({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`box ${className}`.trim()}>
      {children}
    </Tag>
  );
}
