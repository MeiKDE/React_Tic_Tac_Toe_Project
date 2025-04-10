const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, gameTurns }) {
  // gameBoard is derived from the gameTurns state
  let gameBoard = initialGameBoard;

  for (const gameTurn of gameTurns) {
    const { square, player } = gameTurn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((squareValue, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {squareValue}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
