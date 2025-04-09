import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  return (
    <main>
      <div id="game-container">
        <Player initialName="Player 1" symbol="X" />
        <Player initialName="Player 2" symbol="O" />

        <GameBoard />
      </div>

      <Log />
    </main>
  );
}

export default App;
