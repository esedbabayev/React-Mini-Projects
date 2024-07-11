import React from "react";

const Question = (props) => {
  return (
    <div className="bg-red-500 py-16 text-center">
      {props.questionId <= 20 && (
        <p className="font-poppins text-sm text-white opacity-40 mb-4">
          <span>{props.questionId}</span> ⎯ <span>20</span>
        </p>
      )}

      {props.questionId > 20 && (
        <h1 className="font-playfair text-5xl">
          You answered {props.totalPoints}/20{" "}
        </h1>
      )}

      {props.questionId <= 20 && (
        <h1 className="font-playfair text-5xl">{props.question?.question}</h1>
      )}
    </div>
  );
};

export default Question;
