// Hooks
import { useState, useRef } from "react";

// Router
import { Link, Navigate, useBeforeUnload, useNavigate } from "react-router-dom";

// Icons
import Profile from "../icons/Profile";
import CloseEye from "../icons/CloseEye";
import OpenEye from "../icons/OpenEye";

const SignInPage = () => {
  const navigate = useNavigate();
  const [eyeOpen, setEyeOpen] = useState(false);

  const userNameRef = useRef();
  const passwordRef = useRef();

  const eyeHandler = () => {
    setEyeOpen(!eyeOpen);
  };

  const signInHandler = async (event) => {
    event.preventDefault();


    const userName = userNameRef.current.value.trim().toLowerCase();
    const password = passwordRef.current.value.trim();

    if (!userName || !password) {
      alert("Please fill all the fields");
      return;
    }

    const response = await fetch(
      `http://localhost:3000/users?userName=${userName}`
    );

    const data = await response.json();

    const user = data[0];

    if (!user || user?.password !== password) {
      alert("Incorrect username or password");
      return;
    }

    localStorage.setItem("userId", JSON.stringify(user.id));

    navigate("/");
  };

  return (
    <div className="h-[600px] mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome Back</h1>
        <h5 className="text-xs text-neutral-500 ">Login in to your account</h5>
      </div>
      <form onSubmit={signInHandler} className="w-full space-y-5">
        {/* userName */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="userName">
            Username
          </label>
          <div className="relative h-10">
            <input
              ref={userNameRef}
              type="text"
              id="userName"
              placeholder="hsynmrzyv"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="password">
            password
          </label>
          <div className="relative h-10">
            <input
              ref={passwordRef}
              type={eyeOpen ? "text" : "password" }
              id="password"
              placeholder="6+ strong character"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span onClick={eyeHandler} className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer">
              {eyeOpen ? (
                <OpenEye color="gray" className="w-5 h-5 " />
              ) : (
                    <CloseEye color="gray" className="w-5 h-5 " />
                
              )}
            </span>
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign In
        </button>
        <p className="text-center text-xs">
          Don't you have an account?{" "}
          <Link to="/sign-up" className="text-lightOrange">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;
