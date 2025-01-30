const NPC = ({
  position,
  size,
  image,
}: {
  position: { x: number; y: number };
  size: { width: number; height: number };
  image: string;
}) => {
  return (
    <img
      src={image}
      alt="NPC"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
      }}
    />
  );
};

export default NPC;
