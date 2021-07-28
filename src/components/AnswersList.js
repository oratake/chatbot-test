import React from 'react';
import { Answer } from './index';

const AnswersList = (props) => {
  return (
    <div className="c-grid__answer">
      <Answer content={props.answers} />
    </div>
  );
};

export default AnswersList;
