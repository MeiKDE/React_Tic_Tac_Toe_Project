import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev); // this set isEditing to the opposite of the current state
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing ? (
        <>
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
          <button onClick={handleEditClick}>Save</button>
        </>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </li>
  );
}
