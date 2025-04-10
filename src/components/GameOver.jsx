export default function GameOver({ winner, onRematchClick }) {
  console.log("onRematchClick:", onRematchClick);
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <button onClick={onRematchClick}>Rematch!</button>
    </div>
  );
}
