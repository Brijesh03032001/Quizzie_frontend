import React, { useState } from 'react';
import './create_quiz.css';

function CreateQuiz() {
  const [quizName, setQuizName] = useState('');

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  return (
    <div className="Dashboard_modalOverlay__NqVJp">
      <div className="Dashboard_modal__BGhMb">
        <div className="Dashboard_modalQuizNameContent__P2yDB">
          <div>
            <input
              type="text"
              placeholder="Quiz name"
              className="Dashboard_modalQuizNameInput__1w26L"
              value={quizName}
              onChange={handleQuizNameChange}
            />
          </div>
          <div className="Dashboard_modalQuizTypeContainer__KFrc4">
            <div>Quiz Type</div>
            <label>
              <input type="radio" name="quizType" value="Q & A" /> Q & A
            </label>
            <label>
              <input type="radio" name="quizType" value="Poll Type" /> Poll Type
            </label>
          </div>
          <div className="Dashboard_buttonContainer__jYQEj">
            <button className="Dashboard_cancelModalButton__XBrnr">Cancel</button>
            <button className="Dashboard_confirmQuizNameButton__qZUIA" disabled={!quizName.trim()}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
