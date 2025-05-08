import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[10%] py-5 border-b-2 border-[#3c3c3c] bg-[#1A1A40]">
      <Link to="/">
        <img
          src="../../../public/logo.png"
          className="w-[150px] md:w-[200px]"
          alt=""
        />
      </Link>
      {/* navigation */}
      <nav className="hidden md:flex gap-10">
        <NavLink
          to="/"
          className="text-lg hover:text-[#ffde4d] transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className="text-lg hover:text-[#ffde4d] transition duration-300"
        >
          Features
        </NavLink>
        <NavLink
          to="/"
          className="text-lg hover:text-[#ffde4d] transition duration-300"
        >
          Pricing
        </NavLink>
        <NavLink
          to="/"
          className="text-lg hover:text-[#ffde4d] transition duration-300"
        >
          Blog
        </NavLink>
      </nav>
      {/* select && button */}
      <div className="flex items-center gap-3 px-5 md:px-8">
        <select className="p-[5px_8px] rounded-md border-2 border-white bg-transparent">
          <option value="usd" className="bg-black">USD</option>
          <option value="eur" className="bg-black">EUR</option>
        </select>
        <button className="max-md:hidden flex items-center gap-2 md:gap-[8px] px-2 py-2 whitespace-nowrap rounded-[20px] bg-white text-black cursor-pointer hover:bg-[#ffde4d] transition duration-300">
          <span className="font-bold">Sign Up</span>
          <MdArrowOutward className="size-6"/>{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
