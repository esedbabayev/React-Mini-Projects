import React from "react";
import dateFormat, { masks } from "dateformat";

const SingleMessage = (props) => {
  const signedInUserId = JSON.parse(localStorage.getItem("userId"));

  masks.hammerTime = "HH:MM";
  const formattedTime = dateFormat(props.time, "hammerTime");

  return (
    <div
      className={`${
        signedInUserId === props.senderId ? "text-right" : "text-left"
      } mb-3`}
    >
      <div
        className={`${
          signedInUserId === props.senderId
            ? "rounded-t  r-none bg-gray-800 text-white"
            : "rounded-tl-none bg-gray-300 text-black"
        } py-2 px-4 mb-1 text-sm inline-block w-auto max-w-sm rounded-xl`}
      >
        {props.content}
      </div>
      <p
        className={`text-[9px] text-gray-500 ${
          signedInUserId === props.senderId ? "text-right" : "text-left"
        }`}
      >
        {formattedTime}
      </p>
    </div>
  );
};

export default SingleMessage;
