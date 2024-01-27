import React from 'react';
import './quiz_published.css';

function QuizPublished() {
  
  return (
    <div className="Dashboard_modalOverlay__NqVJp">
      <canvas id="canvas" width="1011" height="730" style={{ zIndex: 2, position: 'absolute', pointerEvents: 'none', inset: 0 }}></canvas>
      <div className="Dashboard_modalPublished__h5ALC">
        <div className="Dashboard_modalContent__BmdQm">
          <p style={{ fontSize: '1.7rem', fontWeight: 'bold', textAlign: 'center' }}>Congrats your Quiz is <br />Published!</p>
          <div className="Dashboard_quizLink__O6HU6">https://BrijeshKumar.kumar.app/quiz/65ad056c5ebf0b062576702d</div>
          <div className="Dashboard_buttonContainer__jYQEj">
            <button className="Dashboard_shareLinkBtn__W2N8m">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPublished;
