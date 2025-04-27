import React from 'react';
import './Results.css';

function Results({ score }) {
  return (
    <div className='results__card'>
      <h4>Your Result</h4>
      <div className='results__circle'>
        <h1>{score}</h1> <p>of 100</p>
      </div>
      <h2>Great</h2>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Results;
