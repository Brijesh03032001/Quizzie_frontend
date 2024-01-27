// UrlPlusText.jsx

import React, { useState } from 'react';
import './UrlPlusText.css';

const UrlPlusText = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  return (
    <div className="Questions_mainContainer__sSFsX">
      <div className="Questions_questionContent__2bRG-">
        <div className="Questions_header__nkXFu">
          <div>01/01</div>
          <div className="Questions_timer__hCcgT">00:00 Sec</div>
        </div>
        <div className="Questions_pollQuestion__8or34">1. xfdvv
          <br />
          <div className="Questions_options__7AAWL">
            <div
              className={`Questions_option__ofgfdgd ${selectedOption === 0 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(0)}
              style={{ cursor: 'pointer' }}
            >
              <div><img className="Questions_optionImage__x7Gk" alt="" src="https://media.geeksforgeeks.org/wp-content/uploads/20201221222410/download3.png" /></div>
              <div>1</div>
            </div>
            <div
              className={`Questions_option__ofgfdgd ${selectedOption === 1 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(1)}
              style={{ cursor: 'pointer' }}
            >
              <div><img className="Questions_optionImage__x7Gk" alt="" src="https://media.geeksforgeeks.org/wp-content/uploads/20201221222410/download3.png" /></div>
              <div>2</div>
            </div>
            <div
              className={`Questions_option__ofgfdgd ${selectedOption === 2 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(2)}
              style={{ cursor: 'pointer' }}
            >
              <div><img className="Questions_optionImage__x7Gk" alt="" src="https://media.geeksforgeeks.org/wp-content/uploads/20201221222410/download3.png" /></div>
              <div>2</div>
            </div>
            <div
              className={`Questions_option__ofgfdgd ${selectedOption === 3 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(3)}
              style={{ cursor: 'pointer' }}
            >
              <div><img className="Questions_optionImage__x7Gk" alt="" style={{ backgroundImage: 'url("https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png")' }} /></div>
              <div>4</div>
            </div>
          </div>
        </div>
        <button className={`Questions_nextBtn__tle5l ${selectedOption !== null ? 'active' : ''}`} disabled={selectedOption === null}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UrlPlusText;
