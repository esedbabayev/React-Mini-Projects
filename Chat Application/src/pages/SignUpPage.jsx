// Icons
import OpenEye from "../icons/OpenEye";
import CloseEye from "../icons/CloseEye";
import Profile from "../icons/Profile";

// Link
import { Link, useNavigate } from "react-router-dom";

// Hooks
import { useState, useRef } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [eyeOpen, setEyeOpen] = useState(false);

  const eyeHandler = () => {
    setEyeOpen(!eyeOpen);
  };

  const fullNameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const fullName = fullNameRef.current.value.trim();
    const userName = userNameRef.current.value.trim().toLowerCase();
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    if (!fullName || !userName || !password || !confirmPassword) {
      alert("Please fill all the fields");
      return;
    }

    if (password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and confirm password must be same");
      return;
    }

    const userResponse = await fetch(
      `http://localhost:3000/users?userName=${userName}`
    );

    const userData = await userResponse.json();

    const existingUser = userData[0];

    if (existingUser) {
      alert("Username is already in use");
      return;
    }

    const newUser = {
      id: String(Math.random()),
      userName,
      password,
      fullName,
      profilePic: `https://avatar.iran.liara.run/username?username=${fullName.replace(
        " ",
        "+"
      )}`,
    };

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(newUser),
    });

    const createdUser = await response.json();

    localStorage.setItem("userId", JSON.stringify(createdUser.id));

    navigate("/");
  };

  return (
    <div className="h-[600px]  mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome</h1>
        <h5 className="text-xs text-neutral-500 ">Create your account</h5>
      </div>
      <form onSubmit={submitHandler} className="w-full space-y-5">
        {/* fullName */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="fullName">
            Full Name
          </label>
          <div className="relative h-10">
            <input
              ref={fullNameRef}
              type="fullName"
              id="fullName"
              placeholder="Huseyn Mirzayev"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Username */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="username">
            Username
          </label>
          <div className="relative h-10">
            <input
              ref={userNameRef}
              type="text"
              id="username"
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
            Password
          </label>
          <div className="relative h-10">
            <input
              ref={passwordRef}
              type={eyeOpen ? "text" : "password"}
              id="password"
              placeholder="8+ strong character"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span onClick={eyeHandler} className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer">
              {eyeOpen ? (
                <OpenEye color="gray" className="w-5 h-5 " />
              ) : (
                <CloseEye color="gray" className="w-5 h-5 " />
              )}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="confirmassowrd">
            Confirm Password
          </label>
          <div className="relative h-10">
            <input
              ref={confirmPasswordRef}
              type={eyeOpen ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span onClick={eyeHandler} className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer">
              {eyeOpen ? (
                <OpenEye color="gray" className="w-5 h-5 " />
              ) : (
                <CloseEye color="gray" className="w-5 h-5 " />
              )}
            </span>
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign Up
        </button>
        <p className="text-center text-xs">
          Do you have an account?{" "}
          <Link className="text-lightOrange" to="/sign-in">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
