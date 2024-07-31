import React from 'react';
import OpenModal from './Components/OpenModal';
import Password from "./Components/Password";
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";

import { IconContext } from "react-icons";


import useToggle from './Hooks/useToggle'

function App() {
  const [isOpen, setToggle] = useToggle();
  const [isPassword, setIsPassword] = useToggle();

  return (
    <div className="h-[100vh] flex justify-center items-center">
      {/* Container */}
      <div className="flex max-w-7xl my-0 mx-auto">
        <div id="modalDiv">
          <button onClick={setToggle}
            id="openModal"
            className={`${isOpen ? "hidden" : "block"} px-6 py-4 bg-[#2463EB] text-white hover:border-solid hover:border-2 rounded-xl hover:bg-white hover:text-[#2463EB] duration-200`}
          >
            Open Modal
          </button>
        </div>
        {/* Password Holder */}
        <div
          id="passwordHolder"
          className={`${isOpen ? "block" : "hidden"} w-[500px] h-[230px] border-2 rounded-xl py-5 px-5`}
        >
          {/* First Layer */}
          <div className="flex justify-between">
            <p className="font-bold text-xl">Modal Example</p>
            <button onClick={setToggle}>
              x
            </button>
          </div>
          {/* Second Layer */}
          <div className="py-4 flex flex-col gap-2">
            <label>Password</label>
            <div className="py-1 relative flex justify-between items-center border-2 rounded-xl">
              <input
                id="input"
                type={!isPassword ? "password": "text"}
                placeholder="Enter your password"
                className="w-full py-3 px-2 outline-none"
              />
              <IconContext.Provider value={{ color: "black", className:"color-black", size:"20px" }}>
              <button className="px-2" onClick={setIsPassword}>
                {isPassword ? <FaEye  /> :
                  <FaEyeSlash />}
              </button>
              </IconContext.Provider>
            </div>
          </div>
          {/* Third Layer */}
          <div className="flex justify-end gap-2">
            <button
              id="closeBtn"
              className="border-2 rounded-xl p-2 hover:bg-slate-100"
            >
              Close
            </button>
            <button
              id="saveChangesBtn"
              className="border-2 rounded-xl p-2 bg-[#2463EB] text-white hover:bg-[#1d4fbb]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
