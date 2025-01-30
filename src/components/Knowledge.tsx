import { useState } from "react";
import BottomUI from "./BottomUI";
import introMessages from "../data/knowledgeMessages.json";

const KnowledgeScene = ({
  onKnowledgeComplete,
  onReturn,
}: {
  onKnowledgeComplete: () => void;
  onReturn: () => void;
}) => {
  const [introCount, setIntroCount] = useState(0);

  const handleNext = () => {
    if (introCount < introMessages.length - 1) {
      setIntroCount((prev) => prev + 1);
    } else {
      onKnowledgeComplete();
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

export default KnowledgeScene;
