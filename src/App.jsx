import React from 'react';
import './App.css';
import Results from './Components/Results/Results';
import Summary from './Components/Summary/Summary';
import { scores } from './Data';

function App() {
  let total = 0;
  scores.map((score) => {
    total += score.score;
  });
  let averageScore = Math.round(total / scores.length);

  return (
    <div className='container'>
      <Results score={averageScore}></Results>
      <Summary></Summary>
    </div>
  );
}

export default App;
