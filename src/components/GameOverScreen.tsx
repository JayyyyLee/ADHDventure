import React, { useState } from "react";
import { motion } from "framer-motion";

const GameOverScreen = ({ onProceed }: { onProceed: () => void }) => {
  const [showGameOverBox, setShowGameOverBox] = useState(true);
  const [showEverything, setShowEverything] = useState(true);
  const [background, setBackground] = useState(
    `${import.meta.env.BASE_URL}supno.png`
  );

  const handleProceed = () => {
    setShowGameOverBox(false);
    setBackground(`${import.meta.env.BASE_URL}trans.png`); // Change to the new background
  };

  const handleLetsGo = () => {
    setShowEverything(false);
    setBackground(`${import.meta.env.BASE_URL}newmap.png`); // Change to final background
  };

  return (
    <motion.div
      key={background}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {showEverything &&
        (showGameOverBox ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
            className="position-absolute shadow-lg d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "80%",
              maxWidth: "300px",
              height: "450px",
              padding: "30px 20px 20px",
              borderRadius: "25px",
              top: "15%",
              transform: "translateY(-50%)",
              backgroundColor: "#FFEBDD",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Trophy Image Above the Box */}
            <img
              src={`${import.meta.env.BASE_URL}cong.png`}
              alt="Game Over"
              style={{
                width: "200px",
                position: "absolute",
                top: "40px",
              }}
            />
            {/* Title */}
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#A04000",
                marginTop: "120px",
                marginBottom: "8px",
              }}
            >
              Unlocked ADHD Facts
            </h3>
            {/* Message */}
            <p
              style={{
                fontSize: "14px",
                color: "#5A3E36",
                margin: "0 15px",
                lineHeight: "1.5",
              }}
            >
              People with ADHD often enjoy the excitement of new, unplanned
              purchases. By choosing a small "fun item limit," you respect that
              spontaneity and keep priorities in check.
            </p>
            {/* Proceed Button */}
            <button
              className="position-absolute fw-bold mt-3 shadow border-0"
              style={{
                backgroundColor: "#BF4B00",
                color: "white",
                borderRadius: "25px",
                padding: "12px 40px",
                fontSize: "16px",
                bottom: "5%",
              }}
              onClick={handleProceed}
            >
              Done!
            </button>
          </motion.div>
        ) : (
          <button
            className="position-absolute fw-bold shadow border-0"
            style={{
              backgroundColor: "#BF4B00",
              color: "white",
              borderRadius: "25px",
              padding: "12px 40px",
              fontSize: "16px",
              bottom: "8%",
            }}
            onClick={handleLetsGo}
          >
            Let's go!
          </button>
        ))}
    </motion.div>
  );
};

export default GameOverScreen;
