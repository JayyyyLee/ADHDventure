import React from "react";

const BottomUI = ({
  message,
  showPopup,
  onInteract,
  onSelect,
  showNextButton,
  choices = [],
}: {
  message: string;
  showPopup: boolean;
  onInteract: () => void;
  onSelect: (choice: string) => void;
  showNextButton: boolean;
  choices?: string[];
}) => {
  if (!showPopup) return null;

  return (
    <div
      className="position-absolute bottom-0 w-100 d-flex flex-column align-items-center p-3"
      style={{ background: "transparent" }}
    >
      <div
        className="bg-white p-3 rounded shadow"
        style={{
          width: "90%",
          maxWidth: "350px",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <p className="m-0" style={{ fontSize: "16px", fontWeight: "500" }}>
          {message}
        </p>
      </div>
      {showNextButton ? (
        <button
          className="btn fw-bold mt-3 shadow"
          style={{
            backgroundColor: "#BF4B00",
            color: "white",
            borderRadius: "20px",
            width: "90%",
            maxWidth: "350px",
            padding: "10px 0",
            fontSize: "16px",
          }}
          onClick={onInteract}
        >
          Next
        </button>
      ) : (
        <div className="d-flex flex-column mt-3 w-100 align-items-center">
          {choices.map((choice, index) => (
            <button
              key={index}
              className="btn fw-bold my-1 shadow"
              style={{
                backgroundColor: "#D57A2E",
                color: "white",
                borderRadius: "20px",
                width: "90%",
                maxWidth: "350px",
                padding: "10px 0",
                fontSize: "16px",
              }}
              onClick={() => onSelect(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BottomUI;
