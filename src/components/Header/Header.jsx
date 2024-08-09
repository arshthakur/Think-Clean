import React from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between shadow-md w-full font-normal h-16">
      <Link to="/">
        <img src={assets.logo} alt="img" className="w-28 ml-5 " />
      </Link>
      <ul className="flex flex-row items-center space-x-8 justify-center font-medium text-gray-500">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block hover:text-green-600 ${
              isActive ? "text-green-500 " : "text-gray-500"
            }cursor-pointer hover:underline`
          }>
          home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-green-600 cursor-pointer block ${
              isActive ? "text-green-500 " : "text-gray-500"
            } hover:underline`
          }>
          about
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `hover:text-green-600 cursor-pointer block ${
              isActive ? "text-green-500 " : "text-gray-500"
            } hover:underline`
          }>
          our work
        </NavLink>
        <NavLink
          to="/ways"
          className={({ isActive }) =>
            `hover:text-green-600 cursor-pointer block ${
              isActive ? "text-green-500 " : "text-gray-500"
            } hover:underline`
          }>
          ways to help
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `hover:text-green-600 cursor-pointer block ${
              isActive ? "text-green-500 " : "text-gray-500"
            } hover:underline`
          }>
          contact us
        </NavLink>
      </ul>
      <div>
        <button className="mr-10 hover:bg-gray-100  rounded-3xl px-3 py-1 text-center font-normal text-green-500 border-solid border-2 hover:text-gray-400 border-green-300 ">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
