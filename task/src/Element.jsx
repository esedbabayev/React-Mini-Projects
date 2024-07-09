import React from "react";


import { IoPeople } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";

const Element = (props) => {
  return (
    <div className="shadow pb-12 pt-6 px-6 overflow-hidden relative rounded-lg bg-white">
      <div>
        <div className="p-3 rounded-md bg-indigo-500 absolute">
          <IoPeople className="text-white w-6 h-6" />
        </div>
        <p className="text-gray-500 font-medium text-sm truncate ms-16">
          {props.title}
        </p>
      </div>
      <div className="pb-7 items-baseline flex ms-16">
        <p className="text-gray-900 font-semibold text-2xl">{props.total}</p>
        <p className="text-sm font-semibold text-green-600 flex items-baseline ms-2">
          {props.type === "decrease" ? <FiArrowDown className="text-red-500 self-center shrink-0 w-5 h-5" /> : <FiArrowUp className="text-green-500 self-center shrink-0 w-5 h-5" />}
          <span className={props.type === "decrease" ? "text-red-500" : "text-green-500"} >{props.increaseAmount}</span>
        </p>
        <div className="px-6 py-4 bg-gray-50 bottom-0 inset-x-0 absolute">
          <div className="text-sm">
            <a href="#" className="text-indigo-600 font-medium ">
              View all
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Element;