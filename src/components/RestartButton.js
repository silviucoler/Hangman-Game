import React from "react";
import { Button } from "react-bootstrap";

// Defining a functional component  RestartButton with props onClick, gameWon, gameOver.
const RestartButton = ({ onClick, gameWon, gameOver }) => {
  return (
    <div className="restart-button">
      {/* button changes between play again and restart. */}
      <Button variant="outline-warning" onClick={onClick}>
        {gameWon || gameOver ? "Play Again" : "Restart"}
      </Button>
    </div>
  );
};

export default RestartButton;
