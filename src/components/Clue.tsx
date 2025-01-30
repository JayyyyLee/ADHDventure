import React from "react";
import BottomUI from "./BottomUI";

const NewScene = ({
  backgroundImage,
  message,
  onButtonClick,
  onReturn,
}: {
  backgroundImage: string;
  message: string;
  onButtonClick: () => void;
  onReturn: () => void;
}) => {
  return (
    <div
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
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
      <button
        className="position-absolute translate-middle border-0"
        style={{
          top: "370px",
          left: "280px",
          width: "180px",
          height: "220px",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={onButtonClick}
      ></button>
      <BottomUI
        message={message}
        showPopup={true}
        onInteract={() => {}}
        onSelect={() => {}}
        showNextButton={false}
      />
    </div>
  );
};

export default NewScene;
