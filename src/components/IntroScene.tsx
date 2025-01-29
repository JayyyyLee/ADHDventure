import { useState } from "react";
import BottomUI from "./BottomUI";
import introMessages from "../data/introMessages.json";

const IntroScene = ({ onIntroComplete }: { onIntroComplete: () => void }) => {
  const [introCount, setIntroCount] = useState(0);
  const introEnded = introCount >= introMessages.length;

  return introEnded ? (
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
  );
};

export default IntroScene;
