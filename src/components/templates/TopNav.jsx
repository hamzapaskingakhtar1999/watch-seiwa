import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

import axios from "../../utils/axios";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <IoIosSearch className="text-zinc-400 text-3xl" htmlFor="search" />
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
        {searches.map((item, index) => (
          <Link
            key={index}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-10 bg-zinc-200 text-zinc-600 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded-lg mr-5 shadow-lg"
              src={
                item.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.profile_path
                    }`
                  : "https://media.istockphoto.com/id/1452662817/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=bGI_FngX0iexE3EBANPw9nbXkrJJA4-dcEJhCrP8qMw="
              }
              alt=""
            />
            <span>
              {item?.name ||
                item?.title ||
                item?.original_name ||
                item?.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
