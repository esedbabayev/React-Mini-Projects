import React from 'react'

const Password = () => {
  return (
    <div
      id="passwordHolder"
      className="w-[500px] h-[230px] border-2 rounded-xl py-5 px-5 hidden"
    >
      {/* First Layer */}
      <div className="flex justify-between">
        <p className="font-bold text-xl">Modal Example</p>
        <a id="x" href="#">
          &times;
        </a>
      </div>
      {/* Second Layer */}
      <div className="py-4 flex flex-col gap-2">
        <label>Password</label>
        <div className="py-1 relative flex justify-between border-2 rounded-xl">
          <input
            id="input"
            type="password"
            placeholder="Enter your password"
            className="w-full py-3 px-2 outline-none"
          />
          <i
            id="hiddenPassword"
            className="fa-solid fa-eye-slash cursor-pointer absolute right-2 top-[21px]"
          ></i>
          <i
            id="shownPassword"
            className="fa-solid fa-eye cursor-pointer absolute right-2 top-[21px] hidden"
          ></i>
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
  )
}

export default Password
