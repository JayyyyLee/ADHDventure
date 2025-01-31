import { useState } from "react";
import IntroScene from "./components/IntroScene";
import ConversationScene from "./components/ConversationScene";
import PostConversationScene from "./components/PostConversation";
import GameOverScreen from "./components/GameOverScreen";
import StartScreen from "./components/StartScreen";
import NewScene from "./components/Clue";
import KnowledgeScene from "./components/Knowledge";
import MapScreen from "./components/MapScreen";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [mapComplete, setMapComplete] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [knowComplete, setKnowComplete] = useState(false);
  const [clueComplete, setClueComplete] = useState(false);
  const [conversationComplete, setConversationComplete] = useState(false);
  const [npcFinalState, setNpcFinalState] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const restartGame = () => {
    setGameStarted(false);
    setMapComplete(false);
    setIntroComplete(false);
    setClueComplete(false);
    setKnowComplete(false);
    setConversationComplete(false);
    setNpcFinalState(0);
    setGameOver(false);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-secondary">
      <div
        className="position-relative d-flex flex-column align-items-center justify-content-between"
        style={{
          width: "375px",
          height: "667px",
          backgroundColor: "#FFE3D1",
          border: "4px solid black",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {!gameStarted ? (
          <StartScreen onStart={() => setGameStarted(true)} />
        ) : gameOver ? (
          <GameOverScreen onRestart={restartGame} />
        ) : !mapComplete ? (
          <MapScreen
            onMapComplete={() => setMapComplete(true)}
            onReturn={restartGame}
            boxPositions={[
              { x: 120, y: 30, image: `${import.meta.env.BASE_URL}place3.png` },
              {
                x: 200,
                y: 250,
                image: `${import.meta.env.BASE_URL}place2.png`,
              },
              { x: 0, y: 450, image: `${import.meta.env.BASE_URL}place1.png` },
            ]}
          />
        ) : !introComplete ? (
          <IntroScene
            onIntroComplete={() => setIntroComplete(true)}
            onReturn={restartGame}
          />
        ) : !clueComplete ? (
          <NewScene
            backgroundImage="/selebg.png"
            message="Tap the shopping cart for more information."
            onButtonClick={() => setClueComplete(true)}
            onReturn={restartGame}
          />
        ) : !knowComplete ? (
          <KnowledgeScene
            onKnowledgeComplete={() => setKnowComplete(true)}
            onReturn={restartGame}
          />
        ) : !conversationComplete ? (
          <ConversationScene
            onRestart={restartGame}
            onGameOver={(finalState) => {
              setNpcFinalState(finalState); // Store final NPC state
              setConversationComplete(true);
            }}
          />
        ) : (
          <PostConversationScene
            npcState={npcFinalState}
            onRetry={() => setConversationComplete(false)}
            onNext={() => setGameOver(true)}
            onReturn={restartGame}
          />
        )}
      </div>
    </div>
  );
};

export default App;
