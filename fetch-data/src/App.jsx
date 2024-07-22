import React, { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
import DataGrid from "./components/DataGrid";
import InputField from "./components/InputField";

import Context from "./context";

const App = () => {
  const [searchedIds, setSearchedIds] = useState();
  const [datas, setDatas] = useState();
  const postIdRef = useRef();
  const userIdRef = useRef();

  const searchByIdHandler = async () => {
    const postId = postIdRef.current?.value.trim();
    const userId = userIdRef.current?.value.trim();

    if (!postId || !userId) return;

    const response = await fetch(
      `http://localhost:3000/posts?userId=${userId}&id=${postId}`
    );

    const data = await response.json();

    setSearchedIds(data);

    console.log(postId, userId);

    postIdRef.current.value = "";
    userIdRef.current.value = "";
  };

  useEffect(() => {
    searchByIdHandler();
  }, []);

  const deleteDataHandler = async (checked) => {
    const response = await fetch(`http://localhost:3000/posts?post=${checked}`, {
      method: "DELETE",
    });
    const data = response.json();
    
    setDatas(data);
  };

  return (
    <Context.Provider
      value={{ searchByIdHandler, searchedIds, deleteDataHandler }}
    >
      <div className="p-64">
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Reload
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Clean
          </button>
          <button onclick={deleteDataHandler} className="bg-blue-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
        <DataGrid />
        <div className="flex justify-center space-x-4 mt-4">
          <InputField placeholder="Post ID" />
          <InputField placeholder="User ID" />
          <Button label="Get" />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
