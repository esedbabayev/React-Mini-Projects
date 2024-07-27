// Components
import Sidebar from "../Components/Sidebar";
import Contacts from "../Components/Contacts";
import Chats from "../Components/Chats";

// Hooks
import { useEffect, useState } from "react";

// Router
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("userId"));

  const [selectedUser, setSelectedUser] = useState(null);

  const selectConversation = (user) => {
    setSelectedUser(user)
  };

  useEffect(() => {
    if (!userId) navigate("/sign-in");
  }, []);

  return (
    <div className="h-[510px] w-full flex gap-2">
      <Sidebar />
      <div className="flex-1 grid grid-cols-12 gap-2">
        <Contacts selectConversation={selectConversation} />
        {selectedUser && <Chats selectedUser={selectedUser} />}
      </div>
    </div>
  );
};

export default Home;
