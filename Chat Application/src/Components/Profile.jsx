// Icons
import ProfileIcon from "../icons/Profile";

// Router
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userId");

    navigate("/sign-in");
  };

  return (
    <button
      onClick={logoutHandler}
      className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center"
    >
      <ProfileIcon className="h-5 w-5" color="white" />
    </button>
  );
};

export default Profile;
