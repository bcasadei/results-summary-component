import React from 'react';
import './Score.css';

function Score({ category, title, icon, score }) {
  return (
    <div className={`score__tab ${category}`}>
      <div className='score__category'>
        <img src={icon} alt='' />
        <span className='score__title'>{title}</span>
      </div>
      <div className='score__result'>
        {score}
        <span className='score__result-100'>&nbsp;/ 100</span>
      </div>
    </div>
  );
}

export default Score;
