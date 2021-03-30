import React from "react";

// Declaring types of props
type Props = {
  question: string;
  answers: [];
  callback: any;
  userAnswer: any;
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
      <button disabled={userAnswer} onClick={callback}/>
      <span dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
  ))}
    </div>
  </div>
);

export default QuestionCard;
