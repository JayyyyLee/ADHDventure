const NPC = ({
  position,
  size,
  color,
}: {
  position: { x: number; y: number };
  size: { width: number; height: number };
  color: string;
}) => {
  return (
    <div
      className="position-absolute border border-dark"
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: color,
        cursor: "pointer",
      }}
    ></div>
  );
};

export default NPC;
