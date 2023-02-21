// Still working on an implementation for this.

import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";

const Streak = ({ guessedWords }) => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const reversedGuessedWords = guessedWords.slice().reverse();
    let currentStreak = 0;
    for (let i = 0; i < reversedGuessedWords.length; i++) {
      if (reversedGuessedWords[i] === reversedGuessedWords[i + 1]) {
        currentStreak++;
      } else {
        break;
      }
    }
    setStreak(currentStreak);
  }, [guessedWords]);

  return (
    <div className="ml-3">
      <Badge variant="info">
        {streak > 0 ? `Streak: ${streak}` : "Start a streak!"}
      </Badge>
    </div>
  );
};

export default Streak;
