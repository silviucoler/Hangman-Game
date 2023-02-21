import React from "react";
import { Button } from "react-bootstrap";

// Defining the functional component Alphabet that takes three props - letters, usedLetters and onLetterClick
const Alphabet = ({ letters, usedLetters, onLetterClick }) => {
  // Defining a handleClick function that takes in a letter parameter
  const handleClick = (letter) => {
    // Checking if the letter is not already in usedLetters array
    if (!usedLetters.includes(letter)) {
      // If not, calling onLetterClick function and passing the letter as parameter
      onLetterClick(letter);
    }
  };
  // Returning the JSX for Alphabet component
  return (
    <div className="alphabet">
      {letters.map((letter) => (
        <Button
          key={letter}
          variant={usedLetters.includes(letter) ? "secondary" : "primary"}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
};

export default Alphabet;
