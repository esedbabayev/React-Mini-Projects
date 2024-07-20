import React, { useEffect, useState } from "react";
import DataRow from "./DataRow";

const DataGrid = (props) => {
  const [rows, setRows] = useState([]);

  const fetchDataHandler = async () => {
    const response = await fetch("http://localhost:3000/posts");

    const data = await response.json();

    setRows(data);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (
    <div className="border border-black rounded-lg">
      <div className="grid grid-cols-4 gap-2 p-2 border-b border-black">
        <div className="font-bold">Post ID</div>
        <div className="font-bold">User ID</div>
        <div className="font-bold">Titles</div>
        <div></div>
      </div>
      {rows.map(
        (row, index) =>
          row.id <= 5 && (
            <DataRow
              key={index}
              userId={row.userId}
              id={row.id}
              title={row.title}
            />
          )
      )}
    </div>
  );
};

export default DataGrid;
