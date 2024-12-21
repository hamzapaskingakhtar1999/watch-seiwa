import React from "react";
import { IoTvOutline } from "react-icons/io5";

import { FaFireAlt } from "react-icons/fa";
import { RiMagicFill } from "react-icons/ri";
import { MdMovieFilter } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { MdGroup } from "react-icons/md";

import { IoMdContact } from "react-icons/io";
import { IoCall } from "react-icons/io5";

import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold flex items-center">
        <IoTvOutline className="text-[#6556CD] mr-3" />
        <span className="">SEIWA</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex items-center gap-2">
          <FaFireAlt />
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex items-center gap-2">
          <RiMagicFill />
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex items-center gap-2">
          <MdMovieFilter />
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex items-center gap-2">
          <MdLiveTv />
          TV Shows
        </Link>
        <Link className="mr-2 hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex items-center gap-2">
          <MdGroup />
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-200" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex items-center gap-2">
          <IoMdContact />
          About Us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5 flex items-center gap-2">
          <IoCall />
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
