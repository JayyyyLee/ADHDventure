import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

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
  const [showPopup, setShowPopup] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}roadmap.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            onClick={
              pos.y === lowestBox.y ? () => setShowPopup(true) : undefined
            }
          />
        ))}

        {/* Styled Popup Window */}
        {showPopup && (
          <div
            className="position-absolute bg-white p-4 rounded shadow-lg d-flex flex-column"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "left",
              width: "80%",
              maxWidth: "350px",
              borderRadius: "20px",
            }}
          >
            {/* Stars Image Placeholder */}
            <div className="d-flex justify-content-center mb-3">
              <img
                src={`${import.meta.env.BASE_URL}star.png`}
                alt="Stars"
                style={{ width: "200px", position: "absolute", top: "-70px" }}
              />
            </div>
            {/* Title */}
            <h3 className="fw-bold" style={{ fontSize: "20px" }}>
              The Coffee Rush
            </h3>
            {/* Description */}
            <p style={{ fontSize: "14px", color: "#555" }}>
              Help Aiden order the right coffee on time!
            </p>
            {/* Clue and Time Info */}
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              Hidden Clues: <span style={{ fontWeight: "normal" }}>4</span>
            </p>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              Estimated Time:{" "}
              <span style={{ fontWeight: "normal" }}>20 minutes</span>
            </p>
            {/* Buttons */}
            <button
              className="btn fw-bold shadow mt-2"
              style={{
                backgroundColor: "#BF4B00",
                color: "white",
                borderRadius: "25px",
                padding: "10px 40px",
                fontSize: "16px",
                marginBottom: "10px",
              }}
              onClick={onMapComplete}
            >
              Go!
            </button>
            <button
              className="btn btn-link text-muted"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MapScreen;
