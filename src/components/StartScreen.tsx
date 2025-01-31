import React from "react";
import { motion } from "framer-motion";

const StartScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}homebg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}/homebg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          className="fw-bold position-absolute start-50 translate-middle border-0 shadow"
          style={{
            top: "600px",
            left: "20px",
            width: "260px",
            backgroundColor: "#BF4B00",
            color: "white",
            borderRadius: "30px",
            padding: "15px 40px",
            fontSize: "18px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            textTransform: "uppercase",
          }}
          onClick={onStart}
        >
          Start Exploring
        </button>
      </div>
    </motion.div>
  );
};

export default StartScreen;
