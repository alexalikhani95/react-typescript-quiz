import React from "react";
import { AnswerObject } from '../App'; 

// Declaring types of props
type Props = {
  question: string;
  answers: string[]; // array with string types
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined 
  questionNr: number;
  totalQuestions: number;
};

//React.FC signals that this type will be a functional component
const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
  <div>
    <p className="number">Question: {questionNr} / {totalQuestions}</p>
    <p dangerouslySetInnerHTML={{__html: question }} />
    <div>
  {answers.map(answer => (
    <div>
      <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
      <span dangerouslySetInnerHTML={{ __html: answer }} />
      </button>
      </div>
  ))}
    </div>
  </div>
);

export default QuestionCard;
