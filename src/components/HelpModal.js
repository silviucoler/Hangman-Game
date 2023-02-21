// Importing the required components and libraries
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

// Defining a functional component called HelpModal which accepts the props, show and handleClose
const HelpModal = ({ show, handleClose }) => {
  // Initializing a rules state using the useState hook
  const [rules] = useState([
    "The goal of the game is to guess the mystery word.",
    "The game will indicate how many letters are in the word, and you will have 10 guesses to correctly guess the letters in the word.",
    "If you guess a letter that is not in the word, the hangman will start to be drawn. If you make 10 incorrect guesses, the game is over and you lose.",
    "If you correctly guess all the letters in the word before the hangman is fully drawn, you win!",
  ]);

  // Defining a renderRules function that maps through the rules state and returns a list item for each rule
  const renderRules = () => {
    return rules.map((rule, index) => <li key={index}>{rule}</li>);
  };

  // Returns the Modal component with the passed in props, show and handleClose, a title and a list of rules
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hangman Help</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>{renderRules()}</ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HelpModal;
