import React from "react";
import "./styles.css";

const Word = ({ word, usedLetters }) => {
  // Function to render each letter of the word, either as a letter or an underscore
  const renderLetter = (letter, index) => {
    // Check if the letter is already used
    const isUsed = usedLetters.includes(letter);

    // Define the class name based on whether the letter is used or not
    const className = isUsed ? "used-letter big-letter" : "unused-letter";

    // Render the letter or an underscore, based on whether the letter is used or not
    return (
      <span key={index} className={className}>
        {isUsed ? letter : "_"}
      </span>
    );
  };

  // Render the word by mapping each letter to a rendered component
  return <div className="word">{word.split("").map(renderLetter)}</div>;
};

export default Word;
