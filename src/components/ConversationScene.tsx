import { useState } from "react";
import NPC from "./NPC";
import BottomUI from "./BottomUI";
import NPCStateDisplay from "./NPCStateDisplay";
import conversationRounds from "../data/conversationRounds.json";

const getNPCImage = (state: number) => {
  if (state === -2) return "${import.meta.env.BASE_URL}test1.jpg".trim();
  if (state === -1) return "${import.meta.env.BASE_URL}test2.jpg".trim();
  if (state === 0) return "${import.meta.env.BASE_URL}test3.jpg".trim();
  if (state === 1) return "${import.meta.env.BASE_URL}test4.jpg".trim();
  if (state === 2) return "${import.meta.env.BASE_URL}test5.jpg".trim();
  return "/test3.jpg";
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
    image: getNPCImage(0),
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
    <>
      <div className="position-absolute top-0 start-0 m-2">
        <button className="btn btn-secondary" onClick={onRestart}>
          Return
        </button>
      </div>
      <div className="position-absolute top-0 end-0 m-2">
        <NPCStateDisplay state={npcState.state} />
      </div>
      <NPC
        position={npcState.position}
        size={{ width: 100, height: 100 }}
        image={npcState.image}
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
    </>
  );
};

export default ConversationScene;
