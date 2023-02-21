import React from "react";

// defining the functional component Hangman which returns a state image (11 states)
const Hangman = ({ state }) => {
  return (
    <div className="hangman">
      <img src={`/img/state${state}.GIF`} alt={`Hangman State ${state}`} />
    </div>
  );
};

export default Hangman;
