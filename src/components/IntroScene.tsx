import { useState } from "react";
import BottomUI from "./BottomUI";
import introMessages from "../data/introMessages.json";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <motion.div
        key={introMessages[introCount]?.image || "/sup2.png"} // Ensures animation on background change
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
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
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroScene;
