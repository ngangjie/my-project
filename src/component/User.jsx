import React, { useContext } from "react";
import { useSearch } from "../context/SearchContext";

const User = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  const { name, login, joined, avatarUrl } = post
  return (
    <div className="flex gap-2 dark:text-primary ">

      <div className="w-full md:flex justify-between items-start">
        <div>
          <h2 className="header text-white dark:text-primary">  {name ? name : "The Octocat"}</h2>
          <a
            href={`https://github.com/${login ? login : "octocat"}`}
            className="text-lm-light-blue dark:text-dm-light-blue py-1 atText"
          >
            @{login ? login : "octocat"}
          </a>
        </div>
        <span className="text-white dark:text-primary">
          Joined{" "}
          {joined
            ? new Date(joined).toLocaleString("en-US", {
              weekday: "short",
              day: "numeric",
              year: "numeric",
            })
            : "14 Tue 2023"}
        </span>
      </div>
    </div>
  );
};

export default User;
