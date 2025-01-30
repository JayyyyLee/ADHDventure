const GameOverScreen = ({ onRestart }: { onRestart: () => void }) => {
  return (
    <div className="text-center mt-5">
      <h1 className="mb-4">Game Over</h1>
      <p>Thank you for playing!</p>
      <button className="btn btn-secondary" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default GameOverScreen;
