import { useState } from "react";
import NPC from "./NPC";
import BottomUI from "./BottomUI";
import NPCStateDisplay from "./NPCStateDisplay";
import conversationRounds from "../data/conversationRounds.json";

const getColorFromState = (state: number) => {
  if (state === 0) return "white";
  if (state === 1) return "red";
  if (state === -1) return "blue";
  if (state === 2) return "green";
  if (state === -2) return "yellow";
  return "gray"; // Default color for other states
};

const ConversationScene = ({
  onRestart,
  onGameOver,
}: {
  onRestart: () => void;
  onGameOver: () => void;
}) => {
  const [selectionCount, setSelectionCount] = useState(0);
  const [npcState, setNpcState] = useState({
    id: 1,
    position: { x: 162, y: 250 },
    state: 0,
    color: "white",
    showPopup: true,
    message: conversationRounds[0]?.message || "",
  });

  const gameEnded = selectionCount >= conversationRounds.length;

  if (gameEnded) {
    onGameOver();
    return null;
  }

  const currentRound = conversationRounds[selectionCount] || {};

  return (
    <div className="position-relative w-100 h-100">
      <button
        className="position-absolute top-0 start-0 m-2 btn btn-secondary"
        onClick={onRestart}
      >
        Return
      </button>
      <NPCStateDisplay state={npcState.state} />
      <NPC
        position={npcState.position}
        size={{ width: 50, height: 50 }}
        color={npcState.color}
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
            (choiceIndex !== -1 ? currentRound.stateInfluence[choiceIndex] : 0);
          const newColor = getColorFromState(newState);
          setSelectionCount((prev) => prev + 1);
          setNpcState((prev) => ({
            ...prev,
            state: newState,
            color: newColor,
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
  );
};

export default ConversationScene;
