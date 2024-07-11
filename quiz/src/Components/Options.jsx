import React from "react";

const Options = (props) => {
  return (
    <div className="grid bg-black text-white gird-rows-2 grid-cols-2 gap-3 py-8 px-16 uppercase font-poppins">
      {props.question?.options.map((option) => {
        let btnClasses =
          "transition-all duration-200 rounded-lg text-md p-2 capitalize border border-white hover:bg-white hover:text-black active:scale-95";

        if (props.selectedOption) {
          if (option === props.question.answer) {
            btnClasses += " bg-green-500";
          } else if (
            props.selectedOption === option &&
            props.selectedOption !== props.question.answer
          ) {
            btnClasses += " bg-red-500";
          }
        }
        return (
          <button className={btnClasses} onClick={props.selectOption}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;