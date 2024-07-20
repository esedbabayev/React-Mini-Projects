import React, { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
import DataGrid from "./components/DataGrid";
import InputField from "./components/InputField";

const App = () => {
  const [searchedIds, setSearchedIds] = useState();
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

  const deleteDataHandler = async () => {
    
  }

  return (
    <div className="p-64">
      <div className="flex justify-center space-x-4 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Reload
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Clean
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
      <DataGrid searchedIds={searchedIds} />
      <div className="flex justify-center space-x-4 mt-4">
        <InputField ref={postIdRef} placeholder="Post ID" />
        <InputField ref={userIdRef} placeholder="User ID" />
        <Button searchByIdHandler={searchByIdHandler} label="Get" />
      </div>
    </div>
  );
};

export default App;
