import { useState, useEffect } from "react";
import NPC from "./NPC";
import BottomUI from "./BottomUI";
import conversationRounds from "../data/conversationRounds.json";
import GameOverScreen from "./GameOverScreen";
import { motion } from "framer-motion";

const getNPCImage = (state: number) => {
  if (state === -1) return `${import.meta.env.BASE_URL}sad.gif`;
  if (state === -2) return `${import.meta.env.BASE_URL}sad.gif`;
  if (state === 0) return `${import.meta.env.BASE_URL}base.png`;
  if (state === 1) return `${import.meta.env.BASE_URL}happy.gif`;
  return `${import.meta.env.BASE_URL}base.png`;
};

const ConversationScene = ({
  onRestart,
  onGameOver,
}: {
  onRestart: () => void;
  onGameOver: (finalState: number) => void;
}) => {
  const [selectionCount, setSelectionCount] = useState(0);
  const [npcState, setNpcState] = useState({
    id: 1,
    position: { x: 70, y: 165 },
    state: 0,
    image: getNPCImage(0),
    showPopup: true,
    message: conversationRounds[0]?.message || "",
  });

  const gameEnded = selectionCount >= conversationRounds.length;

  useEffect(() => {
    if (gameEnded) {
      onGameOver(npcState.state); // Pass final NPC state
    }
  }, [gameEnded, npcState.state, onGameOver]);

  if (gameEnded) {
    return null;
  }

  const currentRound = conversationRounds[selectionCount] || {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="position-relative w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url('/background.png')`,
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
        <div className="position-absolute top-0 start-0 m-2">
          <button
            className="position-absolute m-2 border-0 bg-white rounded-circle shadow-lg d-flex align-items-center justify-content-center"
            style={{
              top: "20px",
              left: "20px",
              width: "35px",
              height: "35px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            }}
            onClick={onRestart}
          >
            ←
          </button>
        </div>
        <NPC
          position={npcState.position}
          size={{ width: 140, height: 100 }}
          image={npcState.image}
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
          message={npcState.message}
          showPopup={true}
          onInteract={() => {
            setSelectionCount((prev) => prev + 1);
            setNpcState((prev) => ({
              ...prev,
              message:
                conversationRounds[selectionCount + 1]?.message ||
                "The journey ends here...",
            }));
          }}
          onSelect={(choice) => {
            if (!currentRound.choices) return;
            const choiceIndex = currentRound.choices.indexOf(choice);
            const newState =
              npcState.state +
              (choiceIndex !== -1
                ? currentRound.stateInfluence[choiceIndex]
                : 0);
            const newImage = getNPCImage(newState);
            setSelectionCount((prev) => prev + 1);
            setNpcState((prev) => ({
              ...prev,
              state: newState,
              image: newImage,
              message:
                conversationRounds[selectionCount + 1]?.message ||
                "The journey ends here...",
            }));
          }}
          showNextButton={
            !currentRound.choices || currentRound.choices.length === 0
          }
          choices={currentRound.choices || []}
        />
      </div>
    </motion.div>
  );
};

export default ConversationScene;
