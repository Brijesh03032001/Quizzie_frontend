
import React from 'react';
import './QuizCompletion.css'; // You can create a separate CSS file for styling
import completeQuiz from '../../assets/CompletionQuiz.png'
const QuizCompletion = () => {
  
  return (
    <div className="QuizCompletion_mainContainer__lqtv9">
      <canvas width="1206" height="730" style={{ zIndex: 2, position: 'absolute', pointerEvents: 'none', inset: '0px' }}></canvas>
      <div className="QuizCompletion_thankYouContainer__y-sOR">
        <div style={{ fontWeight: 'bold' }}>Congrats! Quiz is completed</div>
        <img src= {completeQuiz} alt="Trophy" className="QuizCompletion_trophyImage__-vCZi" />
        <div className="QuizCompletion_quizScore__PruI0">
          Your Score is <span className="QuizCompletion_scoreColor__YyK+Y">0/1</span>
         
        </div>
      </div>
    </div>
  );
};

export default QuizCompletion;
