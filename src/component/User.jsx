import React, { useContext } from "react";
import { useSearch } from "../context/SearchContext";

const User = () => {
  const { api, post, isLoading, setIsLoading } = useSearch();
  console.log(post);
  const { login, created_at, html_url, avatar_url } = post;
  return (
    <div className="flex gap-2 dark:text-primary">
      <div className="rounded-xl object-cover place-items-start w-32">
        <img
          className="rounded-full"
          src={avatar_url ? avatar_url : "src/assets/github.png"}
          width={117}
          height={117}
          alt="Picture of the author"
        />
      </div>
      <div className="w-full md:flex justify-around">
        <div>
          <h2 className="header text-white dark:text-primary">{login}</h2>
          <a
            href={`https://github.com/${login ? login : "octocat"}`}
            className="text-blue"
          >
            @{login ? login : "octocat"}
          </a>
        </div>
        <span className="text-white dark:text-primary">
          Joined{" "}
          {created_at
            ? new Date(created_at).toLocaleString("en-US", {
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
