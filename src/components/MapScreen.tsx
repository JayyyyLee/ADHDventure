const MapScreen = ({
  onMapComplete,
  onReturn,
  boxPositions,
}: {
  onMapComplete: () => void;
  onReturn: () => void;
  boxPositions: { x: number; y: number }[];
}) => {
  const sortedBoxes = [...boxPositions].sort((a, b) => b.y - a.y);
  const lowestBox = sortedBoxes[0];

  return (
    <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
      {/* Return Button */}
      <button
        className="position-absolute top-0 start-0 m-2 btn btn-secondary"
        onClick={onReturn}
      >
        Return
      </button>

      {/* Map Boxes */}
      {boxPositions.map((pos, index) => (
        <div
          key={index}
          className="position-absolute bg-primary"
          style={{
            width: "50px",
            height: "50px",
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            cursor: pos.y === lowestBox.y ? "pointer" : "default",
          }}
          onClick={pos.y === lowestBox.y ? onMapComplete : undefined}
        />
      ))}
    </div>
  );
};

export default MapScreen;
