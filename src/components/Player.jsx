import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    console.log("clicked");
    setIsEditing((prev) => !prev); // this set isEditing to the opposite of the current state
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <ol id="players">
      <li>
        <span className="player">
          <span className="player-name">{playerName}</span>
          <span className="player-symbol">{symbol} </span>
        </span>
        {isEditing ? (
          <>
            <input
              type="text"
              required
              value={playerName}
              onChange={handleNameChange}
            />
            <button mode="text" onClick={handleEditClick}>
              Save
            </button>
          </>
        ) : (
          <button mode="text" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </li>
    </ol>
  );
}
