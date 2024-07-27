import React, { useEffect, useRef, useState } from "react";
import SingleMessage from "./SingleMessage";

const Messages = (props) => {
  const signedInUserId = JSON.parse(localStorage.getItem("userId"));
  const selectedUserId = props.selectedUser.id;

  const [messages, setMessages] = useState([]);

  const scrollRef = useRef();

  const getMessages = async () => {
    const response = await fetch(`http://localhost:3000/messages`);
    const data = await response.json();

    const filteredMessages = data.filter(
      (message) =>
        (message.senderId === signedInUserId &&
          message.receiverId === selectedUserId) ||
        (message.senderId === selectedUserId &&
          message.receiverId === signedInUserId)
    );

    setMessages(filteredMessages);

    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getMessages();
  }, [messages, selectedUserId]);

  return (
    <div className="bg-[#f6f6f6] p-5 pb-0 rounded-2xl flex-1 overflow-scroll">
      {messages?.map((message) => (
        <SingleMessage
          content={message.content}
          time={message.sentTime}
          senderId={message.senderId}
          selectedUserId={message.selectedUserId}
        />
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
};

export default Messages;
