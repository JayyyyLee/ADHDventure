import { useState } from "react";
import IntroScene from "./components/IntroScene";
import ConversationScene from "./components/ConversationScene";
import GameOverScreen from "./components/GameOverScreen";
import StartScreen from "./components/StartScreen";
import MapScreen from "./components/MapScreen";
import KnowledgeScene from "./components/Knowledge";
import ClueScene from "./components/Clue";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [mapComplete, setMapComplete] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [clueComplete, setClueComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [knowledgeComplete, setkKnowledgeComplete] = useState(false);
  const [clickedBoxes, setClickedBoxes] = useState(new Set<number>());

  const handleBoxClick = (id: number, message: string) => {
    setClickedBoxes((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
    setSelectedMessage(message);
  };

  const restartGame = () => {
    setGameStarted(false);
    setMapComplete(false);
    setIntroComplete(false);
    setClueComplete(false);
    setGameOver(false);
    setkKnowledgeComplete(false);
    setSelectedMessage("");
    setClickedBoxes(new Set<number>());
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
          <ClueScene
            backgroundImage="/selebg.png"
            message="Tap the shopping cart for more information."
            onButtonClick={() => setClueComplete(true)}
            onReturn={restartGame}
          />
        ) : !knowledgeComplete ? (
          <KnowledgeScene
            onKnowledgeComplete={() => setkKnowledgeComplete(true)}
            onReturn={restartGame}
          />
        ) : (
          <ConversationScene
            onRestart={restartGame}
            onGameOver={() => setGameOver(true)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
