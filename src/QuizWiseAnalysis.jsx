import React from 'react';
import './QuizWiseAnalysis.css'
const QuizWiseAnalysis = ({ quizData }) => {
  return (
    <div className="QuizAnalysis_mainContainer__2cSRG">
      <div className="QuizAnalysis_header__7EMnW">Quiz Wise Analysis</div>
      {quizData.map((question, index) => (
        <div key={index} className="QuizAnalysis_questionAnalysisContainer__l0IxE">
          <div className="QuizAnalysis_question__IjrfM">{`Q.${index + 1} ${question.questionText}`}</div>
          <div className="QuizAnalysis_boxes__EeKsO">
            <div className="QuizAnalysis_totalAttemptsBox__3WsA8">
              <div>{question.totalAttempts}</div>
              People Attempted the Question
            </div>
            <div className="QuizAnalysis_correctAttemptsBox__V3s+i">
              <div>{question.correctAttempts}</div>
              People Attempted Correctly
            </div>
            <div className="QuizAnalysis_incorrectAttemptsBox__2BXah">
              <div>{question.incorrectAttempts}</div>
              People Attempted Incorrectly
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizWiseAnalysis;
