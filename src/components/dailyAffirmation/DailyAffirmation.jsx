import React, { useState } from "react";
import affirmations from "../../assets/data/affirmations";
import Confetti from "react-confetti";
import "./dailyAffirmation.css";

const DailyAffirmation = () => {
  const [completed, setCompleted] = useState(false);
  const [currentAffirmation, setCurrentAffirmation] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );
  const [goalCount, setGoalCount] = useState(0);

  const handleCompleteGoal = () => {
    setCompleted(true);
    setGoalCount(goalCount + 1);
    setTimeout(() => {
      setCompleted(false);
      setCurrentAffirmation(
        affirmations[Math.floor(Math.random() * affirmations.length)]
      );
    }, 3000); // Reset confetti and show new affirmation after 3 seconds
  };

  return (
    <div
      className="affirmation-widget"
      style={{
        background: `linear-gradient(40deg, rgb(${goalCount * 20}, 113, 255), rgb(221, ${goalCount * 20}, 255))`,
      }}
    >
      {completed && <Confetti />}
      <h2>Daily Dose of Motivation</h2>
      <blockquote>
        <p>"{currentAffirmation.text}"</p>
        <footer>- {currentAffirmation.author}</footer>
      </blockquote>
      <button className="complete-goal-button" onClick={handleCompleteGoal}>
        Complete Goal 🎉
      </button>
      <p className="goal-tracker">Goals Completed: {goalCount}</p>
    </div>
  );
};

export default DailyAffirmation;