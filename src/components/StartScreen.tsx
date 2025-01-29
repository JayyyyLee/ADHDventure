const StartScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Welcome to the Game</h1>
      <button className="btn btn-primary" onClick={onStart}>
        Start
      </button>
    </div>
  );
};

export default StartScreen;
