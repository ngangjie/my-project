import React, { useContext } from "react";
import { useSearch } from "../context/SearchContext";

const User = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  return (
    <div className="flex gap-2 dark:text-primary">
      <div className="rounded-xl object-cover place-items-start w-32">
        {api === "Youtube" ? (
          <img src="src/assets/youtube.jpg" alt="" />
        ) : (
          <img src="src/assets/github.png" alt="" />
        )}
      </div>
      <div className="w-full md:flex justify-around">
        <div>
          <h2 className="header text-white dark:text-primary"> The Octocat</h2>
          <a href="#" className="text-blue">
            @Octocat
          </a>
        </div>
        <span className="text-white dark:text-primary">
          joined <span>14 Mar 2023</span>
        </span>
      </div>
    </div>
  );
};

export default User;
