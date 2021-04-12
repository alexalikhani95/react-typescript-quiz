import React from "react";
import { AnswerObject } from '../App'; 
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

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
  <Wrapper>
    <p className="number">Question: {questionNr} / {totalQuestions}</p>
    <p dangerouslySetInnerHTML={{__html: question }} />
    <div>
  {answers.map(answer => (
    <ButtonWrapper key={answer}
    correct={userAnswer?.correctAnswer === answer}
    userClicked={userAnswer?.answer === answer}
    >
      <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
      <span dangerouslySetInnerHTML={{ __html: answer }} />
      </button>
      </ButtonWrapper>
  ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
