import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      // When saving (finishing edit), pass the name up to parent
      onNameChange(symbol, playerName);
    }
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
