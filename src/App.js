// Importing all components and libraries
import React, { useState } from "react";
import Alphabet from "./components/Alphabet";
import Hangman from "./components/Hangman";
import Word from "./components/Word";
import RestartButton from "./components/RestartButton";
import HelpModal from "./components/HelpModal";
import WordHint from "./components/WordHint";
import { Button, Alert } from "react-bootstrap";
import "./components/styles.css";

const words = ["REACT", "JAVASCRIPT", "BOOTSTRAP", "HTML", "CSS"];
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  // Declaring different states for current word, for letters that have been used, for the hangman, whether to show the help modal and for the words that have been guessed. Set them accordingly.
  const [word, setWord] = useState(getRandomWord());
  const [usedLetters, setUsedLetters] = useState([]);
  const [state, setState] = useState(1);
  const [show, setShow] = useState(false);

  const handleLetterClick = (letter) => {
    if (!gameOver && !gameWon) {
      setUsedLetters([...usedLetters, letter]); // Adding a letter to the usedLetters array

      if (!word.includes(letter)) {
        setState(state + 1); // If the letter is not in the word, increment the hangman state
      }
    }
  };

  // This function handles restarting the game when the "Restart" button is clicked
  const handleRestart = () => {
    // Get a new random word
    const newWord = getRandomWord();
    // Set the state to reflect the new word and reset the used letters and game state
    setWord(newWord);
    setUsedLetters([]);
    setState(1);
  };
  // handler for closing the help modal
  const handleClose = () => setShow(false);

  // check if the game has been won.
  const gameWon = word
    .split("")
    .every((letter) => usedLetters.includes(letter));
  // check if the game is over
  const gameOver = state === 11;

  // Render the hangman interface. Self explanatory.
  return (
    <div className="app d-flex flex-column align-items-center">
      <HelpModal show={show} handleClose={handleClose} />
      <h1>Hangman Game</h1>
      <Hangman state={state} />
      <Word word={word} usedLetters={usedLetters} />
      <Alphabet
        letters={LETTERS}
        usedLetters={usedLetters}
        onLetterClick={handleLetterClick}
        disabled={gameOver || gameWon}
      />
      <WordHint word={word} />
      <RestartButton
        onClick={handleRestart}
        gameWon={gameWon}
        gameOver={gameOver}
      />
      {gameOver && (
        <Alert variant="danger" className="mt-3">
          Game over! The word was "{word}".
        </Alert>
      )}
      {gameWon && (
        <Alert variant="success" className="mt-3">
          You won! The word was "{word}".
        </Alert>
      )}
      <div className="d-flex justify-content-center mb-2">
        <Button variant="info" onClick={() => setShow(true)}>
          How to play
        </Button>
      </div>
    </div>
  );
};

export default App;
