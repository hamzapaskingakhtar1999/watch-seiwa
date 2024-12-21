import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  console.log(query.length);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <IoIosSearch className="text-zinc-400 text-3xl" for="search" />
      <input
        onChange={(e) => setQuery(e.target.value)}
        id="search"
        value={query}
        type="text"
        placeholder="Search"
        className="mx-10 w-[50%] p-5 text-xl outline-none border-none bg-transparent text-zinc-200"
      />

      <div className="mt-1 ml-2 w-9 h-9 flex justify-center items-center">
        {query.length > 0 ? (
          <IoIosCloseCircleOutline
            className="text-zinc-400 00 text-3xl hover:cursor-pointer"
            onClick={() => setQuery("")}
          />
        ) : null}
      </div>

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[90%] overflow-auto">
      {/*   <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 bg-zinc-200 text-zinc-600 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello</span>
        </Link> */}

      </div>
    </div>
  );
};

export default TopNav;
