# Tic-Tac-Toe Game

This is a simple React-based implementation of a Tic-Tac-Toe game. The game supports two players and handles turn-based gameplay, with features such as player name changes, game log, and a rematch option.

## Features

- **Two-player gameplay**: Player 1 is represented by "X", and Player 2 by "O".
- **Dynamic player names**: Players can change their names during the game.
- **Game board**: The game board is dynamically rendered, and players can click to select squares.
- **Game Over state**: The game checks for a winner or draw and displays the result.
- **Game Log**: Displays the history of moves made by both players.
- **Rematch**: After a game ends, players can start a new game without refreshing the page.

## Components

### `App.js`

The main component that manages the game state, including the turns, players, and game board. It contains the logic for determining the active player, checking for a winner, and handling the game flow.

### `Player.js`

This component displays each player’s name, symbol, and a button to toggle between editing the player's name or displaying the current name. The name changes are reflected in the parent `App.js` component.

### `GameBoard.js`

This component renders the Tic-Tac-Toe game board and provides the ability for players to select squares during their turn.

### `Log.js`

The log component shows the history of the moves made by players, including which player selected each square.

### `GameOver.js`

This component is shown when the game is over. It displays the winner or indicates a draw and provides a rematch option.

## Game Logic

1. **Turns Management**: The `gameTurns` state tracks the moves made by both players. Each move is stored as an object containing the player and the square they selected.
2. **Player Determination**: The active player is derived from the `gameTurns` state, with "X" starting first. The active player alternates with each valid move.

3. **Game Validation**: The winner is determined by checking all possible winning combinations of squares. If no winner is found and all squares are filled, the game ends in a draw.

4. **State Updates**: State updates are done immutably to prevent accidental overwriting. Game state is updated in response to player moves or actions such as player name changes or rematch requests.

## Setup and Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe.git
   ```
