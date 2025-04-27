import React from 'react';
import Score from '../Score/Score';
import './Summary.css';
import { scores } from '../../Data';
import Button from '../Button/Button';

function Summary() {
  // let id, category, title, score, icon;

  // scores.map((item) => {
  //   id = item.id;
  //   title = item.category;
  //   category = title.toLowerCase();
  //   score = item.score;
  //   icon = item.icon;
  // });
  return (
    <div className='summary__card'>
      <h3>Summary</h3>
      {scores.map((item) => (
        <Score
          key={item.id}
          title={item.category}
          category={item.category.toLowerCase()}
          score={item.score}
          icon={item.icon}></Score>
      ))}
      <Button></Button>
    </div>
  );
}

export default Summary;
