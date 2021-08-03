import React from 'react';
import { Answer } from './index';

type Props = {
  answers: {
    content: String,
    nextId: String,
  }[],
  select: () => void,
};

const AnswersList = (props: Props) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value, index) => {
        return <Answer content={value.content} key={index.toString()} select={props.select} />
      })}
    </div>
  );
};

export default AnswersList;