import React from "react";

const Question = (props) => {

  return (
    <div className="bg-red-500 py-16 text-center">
      <p className="font-poppins text-sm text-white opacity-40 mb-4">
        <span>{props.questionId}</span> ⎯ <span>20</span>
      </p>
      <h1 className="font-playfair text-5xl">{props.question?.question}</h1>
    </div>
  );
};

export default Question;
