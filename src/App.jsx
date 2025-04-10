import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerClick(rowIndex, colIndex) {
    console.log("handlePlayerClick");
    console.log(activePlayer);

    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameTurns((prev) => {
      //create variable instead of using activePlayer from another useState
      // avoid merging different states as optimal practice
      let currentPlayer = "X";

      if (prev.length > 0 && prev[0].player === "X") {
        currentPlayer = "O";
      }
      // create in an immutable way without overwriting the previous state
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];
      return updatedGameTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard onSelectSquare={handlePlayerClick} gameTurns={gameTurns} />
      </div>

      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
