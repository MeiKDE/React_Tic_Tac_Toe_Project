export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((gameTurn, index) => {
        const { square, player } = gameTurn;
        return (
          <li key={`${square.row}-${square.col}`}>
            {player} selected row {square.row} and column {square.col}
          </li>
        );
      })}
    </ol>
  );
}
