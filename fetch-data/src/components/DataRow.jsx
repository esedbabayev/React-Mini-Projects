import React from 'react';
import Checkbox from './Checkbox';

const DataRow = (props) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-2 border-t border-black">
      <div>{props.userId}</div>
      <div>{props.id}</div>
      <div>{props.title}</div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default DataRow;
