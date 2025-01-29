const Player = ({
  position,
  size,
}: {
  position: { x: number; y: number };
  size: { width: number; height: number };
}) => {
  return (
    <div
      className="position-absolute bg-dark"
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "top 0.05s linear, left 0.05s linear",
      }}
    ></div>
  );
};

export default Player;
