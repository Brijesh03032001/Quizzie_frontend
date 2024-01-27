
import React from 'react';
import eyePop from "./assets/icon-park-outline_eyes.png"
import './TrendingQuizCard.css'
const TrendingQuizCard = ({ quizName, impressions, creationDate }) => {
  return (
   
      <div className="TrendingCard_trendingQuizCard__GLOms">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="TrendingCard_quizName__csthr">{quizName}</div>
          <div className="TrendingCard_impressions__QL1NU">{impressions}</div>
          <img src={eyePop} alt="" />
        </div>
        <div className="TrendingCard_creationDate__A9CVV">Created on: {creationDate}</div>
      </div>
  
  );
};

export default TrendingQuizCard;
