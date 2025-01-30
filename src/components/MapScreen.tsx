import React from "react";

const MapScreen = ({
  onMapComplete,
  onReturn,
  boxPositions,
}: {
  onMapComplete: () => void;
  onReturn: () => void;
  boxPositions: { x: number; y: number; image: string }[];
}) => {
  const sortedBoxes = [...boxPositions].sort((a, b) => b.y - a.y);
  const lowestBox = sortedBoxes[0];

  return (
    <div
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}roadmap.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Return Button */}
      <button
        className="position-absolute m-2 border-0 bg-white rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{
          top: "20px",
          left: "20px",
          width: "35px",
          height: "35px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        }}
        onClick={onReturn}
      >
        ←
      </button>

      {/* Map Image Buttons */}
      {boxPositions.map((pos, index) => (
        <img
          key={index}
          src={pos.image}
          alt={`Place ${index + 1}`}
          className="position-absolute"
          style={{
            height: "120px",
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
