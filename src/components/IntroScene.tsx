import { useState } from "react";
import BottomUI from "./BottomUI";
import introMessages from "../data/introMessages.json";

const IntroScene = ({
  onIntroComplete,
  onReturn,
}: {
  onIntroComplete: () => void;
  onReturn: () => void;
}) => {
  const [introCount, setIntroCount] = useState(0);
  const introEnded = introCount >= introMessages.length;

  return (
    <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
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
      {introEnded ? (
        <div className="text-center mt-5">
          <h1 className="mb-4">Introduction Complete</h1>
          <button className="btn btn-primary" onClick={onIntroComplete}>
            Continue
          </button>
        </div>
      ) : (
        <BottomUI
          message={introMessages[introCount].message}
          showPopup={true}
          onInteract={() => setIntroCount((prev) => prev + 1)}
          onSelect={() => {}}
          showNextButton={true}
        />
      )}
    </div>
  );
};

export default IntroScene;
