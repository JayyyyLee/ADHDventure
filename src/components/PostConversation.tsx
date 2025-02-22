import { useState, useEffect } from "react";
import NPC from "./NPC";
import BottomUI from "./BottomUI";
import { motion } from "framer-motion";

const getNPCImage = (state: number) => {
  if (state === -1) return `${import.meta.env.BASE_URL}sad.gif`;
  if (state === -2) return `${import.meta.env.BASE_URL}sad.gif`;
  if (state === 0) return `${import.meta.env.BASE_URL}base.png`;
  if (state === 1) return `${import.meta.env.BASE_URL}happy.gif`;
  return `${import.meta.env.BASE_URL}base.png`;
};

const getNPCMessage = (state: number) => {
  if (state === -1)
    return "You and Maddie went way over budget. Maddie feels frustrated during the checkout.";
  if (state === -2)
    return "You stayed within the budget, but you missed out on Maddie's excitement. ";
  if (state === 1)
    return "Great balance! You incorporated Maddie's spontaneity while staying on track financially. She's happy that you've considered her whim.";
  return "The NPC is looking at you...";
};

const PostConversationScene = ({
  npcState,
  onNext,
  onRetry,
  onReturn,
}: {
  npcState: number;
  onNext: () => void;
  onRetry: () => void;
  onReturn: () => void;
}) => {
  const [npcImage, setNpcImage] = useState(getNPCImage(npcState));
  const [npcMessage, setNpcMessage] = useState(getNPCMessage(npcState));

  useEffect(() => {
    setNpcImage(getNPCImage(npcState));
    setNpcMessage(getNPCMessage(npcState));
  }, [npcState]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
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
        <NPC
          position={{ x: 70, y: 165 }}
          size={{ width: 140, height: 100 }}
          image={npcImage}
        />
        <img
          src={`${import.meta.env.BASE_URL}cart.png`}
          alt="Cart"
          className="position-absolute"
          style={{
            width: "220px",
            left: "225px",
            top: "380px",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        />
        <BottomUI
          message={npcMessage}
          showPopup={true}
          onInteract={npcState > 0 ? onNext : onRetry}
          onSelect={() => {}}
          showNextButton={true}
          isRetry={npcState > 0 ? false : true}
          choices={[]}
        />
      </div>
    </motion.div>
  );
};

export default PostConversationScene;
