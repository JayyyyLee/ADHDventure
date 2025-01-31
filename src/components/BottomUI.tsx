import React from "react";

const BottomUI = ({
  message = "",
  showPopup,
  onInteract,
  onSelect,
  showNextButton,
  choices = [],
}: {
  message?: string;
  showPopup: boolean;
  onInteract: () => void;
  onSelect: (choice: string) => void;
  showNextButton: boolean;
  choices?: string[];
}) => {
  // Ensure message is defined before processing
  let [title, body] =
    message && message.includes("\t\t")
      ? message.split("\t\t")
      : ["", message || ""];

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
        {title && (
          <h3
            className="fw-bold"
            style={{
              fontSize: "24px",
              marginBottom: "10px",
              whiteSpace: "pre-line",
            }}
          >
            {title}
          </h3>
        )}
        <p className="m-0" style={{ fontSize: "16px", whiteSpace: "pre-line" }}>
          {body}
        </p>
      </div>
      {showNextButton && (
        <button
          className="btn fw-bold mt-3 shadow"
          style={{
            backgroundColor: "#BF4B00",
            color: "white",
            borderRadius: "20px",
            width: "90%",
            maxWidth: "350px",
            padding: "10px 0px",
            fontSize: "16px",
          }}
          onClick={onInteract}
        >
          Next
        </button>
      )}
      {choices?.length > 0 && (
        <div
          className="d-flex flex-column mt-3"
          style={{ width: "90%", maxWidth: "350px" }}
        >
          {choices.map((choice, index) => (
            <button
              key={index}
              className="btn fw-bold mt-2 shadow"
              style={{
                backgroundColor: "#BF4B00",
                color: "white",
                borderRadius: "20px",
                padding: "10px 0px",
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
