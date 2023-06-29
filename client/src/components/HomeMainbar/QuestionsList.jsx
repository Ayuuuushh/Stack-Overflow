import React from "react";
import Questions from "./Questions";

const QuestionsList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => {
        return <Questions question={question} key={question.id} />;
        ;
      })}
    </>
  );
};

export default QuestionsList;
