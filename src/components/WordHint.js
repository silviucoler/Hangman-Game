import React from "react";

// Word hint functional component
const WordHint = ({ word }) => {
  return <div className="word-hint">This word has {word.length} letters.</div>;
};

export default WordHint;
