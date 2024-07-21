import React from "react";

const Country = (props) => {
  return (
    <div className="rounded-md drop-shadow overflow-hidden">
      <div>
        <img src={props.flag} className="h-[200px]" alt="" />
      </div>
      <div className="bg-white p-6 ">
        <p className="text-xl font-bold mb-3">{props.name}</p>
        <p className="mb-3">
          <span className="text-gray-600 font-medium">Population: </span>
          <span className="text-gray-500">{props.population}</span>
        </p>
        <p className="mb-3">
          <span className="text-gray-600 font-medium">Region: </span>
          <span className="text-gray-500">{props.region}</span>
        </p>{" "}
        <p className="mb-3">
          <span className="text-gray-600 font-medium">Capital: </span>
          <span className="text-gray-500">{props.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
