//Takeaways: Manage as few states as possible
// Derive the active player from the gameTurns state
// Avoid merging different states as optimal practice

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  //derive the active player from the gameTurns state
  // avoid merging different states as optimal practice

  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  // We can derive players from gameTurns, defaulting to initial values
  // const players = {
  //   X:
  //     gameTurns.find((turn) => turn.playerName && turn.player === "X")
  //       ?.playerName || "Player 1",
  //   O:
  //     gameTurns.find((turn) => turn.playerName && turn.player === "O")
  //       ?.playerName || "Player 2",
  // };

  //derive the active player from the gameTurns state
  const activePlayer = derivedActivePlayer(gameTurns);

  // gameBoard is derived from the gameTurns state
  // this is needed to make gameBoard immutable
  // creating new copy each time
  // [...initialGameBoard.map((row) => [...row])]
  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player; // this is a side effect, gameBoard array is not being reset
  }
  let winner = null;

  // this code logic loops through all the winning combinations
  // and checks if the first square symbol, second square symbol, and third square symbol are the same
  // if they are, then the winner is the first square symbol
  // if there is no winner, then the winner is null
  for (const combination of WINNING_COMBINATIONS) {
    //going through each winning combination matrix
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  // Move isDraw outside the loop
  const isDraw = gameTurns.length === 9 && !winner;

  //handle the player click event
  function handlePlayerClick(rowIndex, colIndex) {
    console.log("handlePlayerClick");
    console.log(activePlayer);

    setGameTurns((prevTurns) => {
      //derive the active player from the gameTurns state
      const currentPlayer = derivedActivePlayer(prevTurns);
      // create in an immutable way without overwriting the previous state
      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      if (isDraw) {
        return handleRematchClick();
      }

      return updatedGameTurns;
    });
  }

  // Update the handlePlayerNameChange to use gameTurns
  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers((prePlayers) => {
      // Add a special turn entry for name changes
      return {
        ...prePlayers,
        [symbol]: newName, //symbol is the key, newName is the value
      };
    });
  };

  function handleRematchClick() {
    setGameTurns([]);
  }

  function handlePlayerChange(symbol, newName) {
    setPlayers((prePlayers) => {
      return {
        ...prePlayers,
        // overwrite the player name
        [symbol]: newName, //symbol is the key, newName is the value
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver
            winner={players[winner]}
            onRematchClick={handleRematchClick}
          />
        )}
        <GameBoard onSelectSquare={handlePlayerClick} board={gameBoard} />
      </div>

      <Log gameTurns={gameTurns} onRematchClick={handleRematchClick} />
    </main>
  );
}

export default App;
