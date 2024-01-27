// import React from 'react';
// import './TextOnly.css'
// const TextOnly = () => {
//   return (
//     <div className="Questions_mainContainer__qq">
//       <div className="Questions_questionContent__popo">
//         <div className="Questions_header__nkXFu">
//           <div>01/01</div>
//           <div className="Questions_timer__hCcgT">00:00 Sec</div>
//         </div>
//         <div className="Questions_pollQuestion__8or34">1. hjvjhhxfdvv
//         <br/>
//           <div className="Questions_options__7AAWLsasa">
//             <div className="Questions_option__ozYZu" style={{ cursor: 'pointer' }}>
//                <div className='Questions_option_values_dfgdf'>1</div>
//             </div>
//             <div className="Questions_option__ozYZu" style={{ cursor: 'pointer' }}>
//             <div className='Questions_option_values_dfgdf'>2</div>
//             </div>
//             <div className="Questions_option__ozYZu" style={{ cursor: 'pointer' }}>
//             <div className='Questions_option_values_dfgdf'>fndfgfjdgdj</div>
//             </div>
//             <div className="Questions_option__ozYZu" style={{ cursor: 'pointer' }}>
//               <div className='Questions_option_values_dfgdf'>4</div>
//             </div>
//           </div>
//         </div>
//         <button className="Questions_nextBtn__tle5l" disabled>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default TextOnly;

// TextOnly.jsx

import React, { useState } from 'react';
import './TextOnly.css';

const TextOnly = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  return (
    <div className="Questions_mainContainer__qq">
      <div className="Questions_questionContent__popo">
        <div className="Questions_header__nkXFu">
          <div>01/01</div>
          <div className="Questions_timer__hCcgT">00:00 Sec</div>
        </div>
        <div className="Questions_pollQuestion__8or34">1. hjvjhhxfdvv
          <br />
          <div className="Questions_options__7AAWLsasa">
            <div
              className={`Questions_option__ozYZu ${selectedOption === 0 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(0)}
              style={{ cursor: 'pointer' }}
            >
              <div className="Questions_option_values_dfgdf">1</div>
            </div>
            <div
              className={`Questions_option__ozYZu ${selectedOption === 1 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className="Questions_option_values_dfgdf">2</div>
            </div>
            <div
              className={`Questions_option__ozYZu ${selectedOption === 2 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(2)}
              style={{ cursor: 'pointer' }}
            >
              <div className="Questions_option_values_dfgdf">fndfgfjdgdj</div>
            </div>
            <div
              className={`Questions_option__ozYZu ${selectedOption === 3 ? 'selected' : ''}`}
              onClick={() => handleOptionClick(3)}
              style={{ cursor: 'pointer' }}
            >
              <div className="Questions_option_values_dfgdf">4</div>
            </div>
          </div>
        </div>
        <button className="Questions_nextBtn__tle5l" disabled={selectedOption === null}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default TextOnly;
