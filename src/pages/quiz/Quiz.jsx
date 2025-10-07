import React, { useState, useEffect } from "react";
import quizData from "../../assets/data/quizData";
import "./quiz.css";
import Confetti from "react-confetti";
import { FaShare, FaRedo, FaStar, FaTrophy, FaLightbulb, FaHeart } from "react-icons/fa";

// Motivational messages for different score ranges
const motivationalMessages = {
  perfect: [
    "Absolutely perfect! You're a true champion! 🏆",
    "Flawless victory! Your knowledge is impressive! ✨",
    "100%! You've mastered this topic completely! 💯"
  ],
  excellent: [
    "Outstanding performance! You're a quick learner! 🚀",
    "Amazing job! Your hard work is paying off! 🌟",
    "Incredible! You're on the path to greatness! 💪"
  ],
  good: [
    "Great job! You're making excellent progress! 🌈",
    "Well done! Every step forward is a step toward success! 👏",
    "You're doing fantastic! Keep up the great work! 🌟"
  ],
  average: [
    "Good effort! Every expert was once a beginner! 🌱",
    "You're getting there! Practice makes perfect! 💫",
    "Nice try! Every mistake is a learning opportunity! 📚"
  ],
  needsWork: [
    "Don't give up! Every master was once a beginner! 🌟",
    "Keep going! Success is built one step at a time! 🚶‍♂️",
    "You've got this! Every challenge makes you stronger! 💪"
  ]
};

// Get a random motivational message based on score
const getRandomMessage = (score, total) => {
  const percentage = (score / total) * 100;
  let messageType;
  
  if (percentage === 100) messageType = 'perfect';
  else if (percentage >= 80) messageType = 'excellent';
  else if (percentage >= 60) messageType = 'good';
  else if (percentage >= 40) messageType = 'average';
  else messageType = 'needsWork';
  
  const messages = motivationalMessages[messageType];
  return messages[Math.floor(Math.random() * messages.length)];
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [motivationalMessage, setMotivationalMessage] = useState("");
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    const isAnswerCorrect = selectedOption === quizData[currentQuestion].answer;
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsCorrect(null);
        setShowFeedback(false);
        // Set a new motivational message for the next question
        setMotivationalMessage(getRandomMotivationalMessage());
      } else {
        setShowResult(true);
        localStorage.setItem("quizScore", isAnswerCorrect ? score + 1 : score);
      }
    }, 2000); // Slightly longer delay to show feedback
  };
  
  // Get a random motivational message
  const getRandomMotivationalMessage = () => {
    const messages = [
      "You're making progress! Keep it up! 🚀",
      "Every answer brings you closer to mastery! 💪",
      "Learning is a journey, not a destination! 🌟",
      "Your potential is limitless! Keep going! ✨",
      "Believe in yourself and all that you are! 💫",
      "Success is the sum of small efforts repeated! 🌈"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };
  
  // Set initial motivational message
  useEffect(() => {
    setMotivationalMessage(getRandomMotivationalMessage());
  }, []);

  const retryQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  const progress = ((currentQuestion) / quizData.length) * 100;
  const scorePercentage = Math.round((score / quizData.length) * 100);
  
  const getResultMessage = () => {
    return getRandomMessage(score, quizData.length);
  };

  const getEmojiForScore = () => {
    if (scorePercentage === 100) return <FaLightbulb className="result-emoji" />;
    if (scorePercentage >= 80) return <FaTrophy className="result-emoji" />;
    if (scorePercentage >= 60) return <FaStar className="result-emoji" />;
    return <FaHeart className="result-emoji" />;
  };
  
  const getScoreFeedback = () => {
    if (scorePercentage === 100) return "Perfect Score!";
    if (scorePercentage >= 80) return "Excellent Work!";
    if (scorePercentage >= 60) return "Great Job!";
    if (scorePercentage >= 40) return "Good Effort!";
    return "Keep Practicing!";
  };

  return (
    <div className="quiz-container">
      {showResult && (
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={false}
          numberOfPieces={1000}
        />
      )}
      <div className="quiz-hero">
        <div className="floating one">💡</div>
        <div className="floating two">🌟</div>
        <div className="quiz-header">
          <h1>Knowledge Check</h1>
          <p>Challenge yourself and grow with every question</p>
          {!showResult && (
            <div className="motivational-quote">
              {motivationalMessage}
            </div>
          )}
        </div>
      </div>
      <div className="quiz-content">
        {!showResult ? (
          <div className="quiz-question">
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="question-counter">
              Question {currentQuestion + 1} of {quizData.length}
            </div>
            
            <h2>{quizData[currentQuestion].question}</h2>
            <div className="quiz-options">
              {quizData[currentQuestion].options.map((option, index) => {
                const isSelected = selectedOption === option;
                const isAnswer = option === quizData[currentQuestion].answer;
                let className = '';
                
                if (selectedOption) {
                  if (isSelected) {
                    className = isAnswer ? 'correct' : 'incorrect';
                  } else if (isAnswer) {
                    className = 'correct';
                  }
                }
                
                return (
                  <button
                    key={index}
                    className={className}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            
            {selectedOption && (
              <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                <div className="explanation">
                  {isCorrect 
                    ? 'Great job! ' + (quizData[currentQuestion].explanation || 'Keep up the good work!') 
                    : (quizData[currentQuestion].explanation || 'Keep learning and try again!')}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="quiz-result">
            <h2>Quiz Completed!</h2>
            
            <div className="result-icon">
              {getEmojiForScore()}
            </div>
            
            <div className="score-display">
              {score}<span>/{quizData.length}</span>
            </div>
            
            <h3 className="score-feedback">{getScoreFeedback()}</h3>
            
            <p className="result-message">
              {getResultMessage()}
            </p>
            
            <div className="result-details">
              <p>
                <span>Correct Answers:</span>
                <span>{score} ({scorePercentage}%)</span>
              </p>
              <p>
                <span>Incorrect Answers:</span>
                <span>{quizData.length - score} ({100 - scorePercentage}%)</span>
              </p>
              <p>
                <span>Total Questions:</span>
                <span>{quizData.length}</span>
              </p>
            </div>
            
            <div className="button-group">
              <button className="retry-button" onClick={retryQuiz}>
                <FaRedo style={{ marginRight: '8px' }} /> Try Again
              </button>
              <button
                className="share-button"
                onClick={() => {
                  const shareText = `I scored ${score}/${quizData.length} on the quiz! Can you beat my score?`;
                  if (navigator.share) {
                    navigator.share({
                      title: 'Check out my quiz score!',
                      text: shareText,
                      url: window.location.href,
                    }).catch(console.error);
                  } else {
                    // Fallback for browsers that don't support Web Share API
                    navigator.clipboard.writeText(shareText);
                    alert('Score copied to clipboard!');
                  }
                }}
              >
                <FaShare style={{ marginRight: '8px' }} /> Share Score
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
