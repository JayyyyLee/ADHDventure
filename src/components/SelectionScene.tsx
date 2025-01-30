import { useState } from "react";
import BottomUI from "./BottomUI";

const SelectionScene = ({
  onSelectionComplete,
  setSelectedMessage,
  selectedMessage,
  onBoxClick,
  clickedBoxes,
  onReturn,
}: {
  onSelectionComplete: () => void;
  setSelectedMessage: (message: string) => void;
  selectedMessage: string;
  onBoxClick: (id: number, message: string) => void;
  clickedBoxes: Set<number>;
  onReturn: () => void;
}) => {
  const boxes = [
    { id: 1, x: 50, y: 100, message: "You found an ancient relic!" },
    { id: 2, x: 200, y: 150, message: "A mysterious figure appears..." },
    { id: 3, x: 100, y: 250, message: "You discovered a hidden path!" },
    { id: 4, x: 150, y: 350, message: "A treasure chest lies ahead!" },
  ];

  return (
    <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
      <button
        className="position-absolute top-0 start-0 m-2 btn btn-secondary"
        onClick={onReturn}
      >
        Return
      </button>
      {boxes.map((box) => (
        <div
          key={box.id}
          className="position-absolute"
          style={{
            width: "50px",
            height: "50px",
            left: `${box.x}px`,
            top: `${box.y}px`,
            backgroundColor: clickedBoxes.has(box.id) ? "green" : "blue",
            cursor: "pointer",
          }}
          onClick={() => onBoxClick(box.id, box.message)}
        />
      ))}
      <BottomUI
        message={selectedMessage}
        showPopup={true}
        onInteract={onSelectionComplete}
        onSelect={() => {}}
        showNextButton={clickedBoxes.size === 4}
      />
    </div>
  );
};

export default SelectionScene;
