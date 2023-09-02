import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import questions from '../data/quiz1.json';
import '../styles/quiz.css';


export const Quiz = () => {


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const renderOptions = (options) => {
    return options.map((option, index) => (
      <div className="d-grid gap-2  pb-2">
      <button  
        className="btn btn-primary pb-2" type="button"
        key={index}
        onClick={() => handleOptionSelect(index)}
        disabled={selectedOption !== null}
      >
        {option}
      </button>
      </div>
    ));
    
  };

  return (
    <div  className='quiz-container'>
      {showResult ? (
        <div className="result">
          <h1>Quiz Ergebnis</h1>
          {/* Hier kannst du das Ergebnis anzeigen */}
        </div>
      ) : (
        <div>
          <h1>Frage {currentQuestionIndex + 1}</h1>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="options">{renderOptions(questions[currentQuestionIndex].options)}</div>
      
          <button onClick={handleNextQuestion} disabled={selectedOption === null} 
           className="btn btn-outline-success">
            {currentQuestionIndex < questions.length - 1 ? 'Nächste Frage' : 'Quiz beenden'}
          </button>
        </div>
      )}
    </div>
  );
};

