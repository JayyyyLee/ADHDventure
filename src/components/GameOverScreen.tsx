import React from "react";

const GameOverScreen = ({ onRestart }: { onRestart: () => void }) => {
  return (
    <div
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('/supno.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Styled Box */}
      <div
        className="position-absolute shadow-lg d-flex flex-column align-items-center justify-content-center"
        style={{
          width: "80%",
          maxWidth: "300px",
          height: "450px",
          padding: "30px 20px 20px",
          borderRadius: "25px",
          top: "45%",
          transform: "translateY(-50%)",
          backgroundColor: "#FFEBDD",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Trophy Image Above the Box */}
        <img
          src="/cong.png"
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
      </div>
      {/* Done Button */}
      <button
        className="position-absolute fw-bold mt-3 shadow border-0"
        style={{
          backgroundColor: "#BF4B00",
          color: "white",
          borderRadius: "25px",
          padding: "12px 40px",
          fontSize: "16px",
          bottom: "8%",
        }}
        onClick={onRestart}
      >
        Done!
      </button>
    </div>
  );
};

export default GameOverScreen;
