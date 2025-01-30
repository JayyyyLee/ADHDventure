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
        className="position-absolute top-0 start-0 m-2 btn btn-secondary"
        onClick={onReturn}
      >
        Return
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
