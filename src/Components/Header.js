import React from "react";
import { HiMiniHome } from "react-icons/hi2";

const Header = () => {
  return (
    <div>
      <div className="grid grid-flow-col items-center m-2 shadow-lg p-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
        <h1 className="col-span-2 font-serif text-3xl">MovieClone</h1>
        <div className="col-span-10">
          <input
            type="text"
            className="border border-gray-400 rounded-xl text-black text-md w-[50%] py-1 px-4"
            placeholder="🔍 Search a movie"
          />
        </div>
        <HiMiniHome className="mx-2 col-span-2 cursor-pointer" size={30} />
      </div>
    </div>
  );
};

export default Header;
