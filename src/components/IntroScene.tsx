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

  const handleNext = () => {
    if (introCount < introMessages.length - 1) {
      setIntroCount((prev) => prev + 1);
    } else {
      onIntroComplete();
    }
  };

  return (
    <div
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}${
          introMessages[introCount]?.image || "/sup2.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        className="position-absolute top-0 start-0 m-2 btn btn-secondary"
        onClick={onReturn}
      >
        Return
      </button>
      <BottomUI
        message={introMessages[introCount]?.message || ""}
        showPopup={true}
        onInteract={handleNext}
        onSelect={() => {}}
        showNextButton={true}
      />
    </div>
  );
};

export default IntroScene;
