import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-flow-col w-screen h-[56px] fixed bg-white border-b">
      {/* Left - Menu & Logo */}
      <div className="col-span-1 flex justify-center items-center w-[169px] h-[56px]">
        <img
          onClick={() => dispatch(toggleMenu())} // Dispatch a single action
          className="w-6 h-6 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-462145.png"
          alt="menu icon"
        />
        <img
          className="h-10 w-24 object-contain p-1"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/1024px-YouTube_2024.svg.png"
          alt="YouTube Logo"
        />
      </div>

      {/* Center - Search Bar */}
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-1/2 h-10 border border-gray-400 rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <button className="h-10 border border-l-0 border-gray-400 rounded-r-full px-4">
          🔍
        </button>
      </div>

      {/* Right - Icons */}
      <div className="flex col-span-1 w-[213px] h-[40px] justify-between items-center m-2">
        <button className="font-bold">+ Create</button>
        <img
          className="h-8"
          src="https://static-00.iconduck.com/assets.00/notification-icon-1842x2048-xr57og4y.png"
          alt="notifications"
        />
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user profile"
        />
      </div>
    </div>
  );
};

export default Header;
