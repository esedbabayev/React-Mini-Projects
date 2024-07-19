import React, { useState, useRef, useEffect } from "react";
import Button from "./components/Button";
import DataGrid from "./components/DataGrid";
import InputField from "./components/InputField";

const App = () => {
  const [searhedIds, setSearchedIds] = useState();
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

  return (
    <div className="p-64">
      <div className="flex justify-center space-x-4 mb-4">
        <Button label="Reload" />
        <Button label="Clean" />
        <Button label="Delete" />
      </div>
      {
        searhedIds.filter((userId,id) => userId === posts.userId && id === posts.id
      )
      
    }
    <DataGrid />
      <div className="flex justify-center space-x-4 mt-4">
        <InputField ref={postIdRef} placeholder="Post ID" />
        <InputField ref={userIdRef} placeholder="User ID" />
        <Button searchByIdHandler={() => searchByIdHandler()} label="Get" />
      </div>
    </div>
  );
};

export default App;
