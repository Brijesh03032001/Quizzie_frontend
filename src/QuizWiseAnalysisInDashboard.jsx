import React from 'react';
import QuizWiseAnalysis from './QuizWiseAnalysis';

const QuizWiseAnalysisInDashboard = () => {
  // Assuming quizData is fetched or passed as props
  const quizData = [
    {
      questionText: 'sdfdf rhtrffd adlewkewed asklqwjdwofsdbs diosdjkdsfs',
      totalAttempts: 10,
      correctAttempts: 5,
      incorrectAttempts: 5,
    },
    {
      questionText: 'fdf',
      totalAttempts: 8,
      correctAttempts: 3,
      incorrectAttempts: 5,
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <QuizWiseAnalysis quizData={quizData} />
    </div>
  );
};

export default QuizWiseAnalysisInDashboard;
