// Components
import SingleUser from "./SingleUser";

// Hooks
import { useState, useEffect } from "react";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const response = await fetch(`http://localhost:3000/users?id_ne=${userId}`);

    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
      {users.map((user) => (
        <SingleUser
          user={user}
          selectConversation={props.selectConversation}
          image={user.profilePic}
          fullName={user.fullName}
          userName={user.userName}
        />
      ))}
    </div>
  );
};

export default Users;
