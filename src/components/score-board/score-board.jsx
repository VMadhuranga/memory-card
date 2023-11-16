import "./score-board.css";

export function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="score-board">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}
