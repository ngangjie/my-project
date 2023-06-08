import React from "react";
import "../App.css";
import { useSearch } from "../context/SearchContext";

const Profile = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  const { repos, followers, following, bio } = post
  return (
    <div className=" w-full items-start ">
      <p className="text-white text-start pb-6 dark:text-primary my-4">
        {bio ? bio : "This user has no Bio"}
      </p>
      <div className="text-white  p-6 text-sm md:text-base bg-primary rounded-xl shadow-md flex  justify-around w-auto gap-2 dark:bg-slate ">
        <div className="repos dark:text-primary">
          <h3>Repos</h3>
          <p> {repos ? repos : 8}</p>
        </div>
        <div className="followers dark:text-primary">
          <h3>Followers</h3>
          <span>   {followers ? followers : 4152}</span>
        </div>
        <div className="following dark:text-primary">
          <h3>Following</h3>
          <span>   {following ? following : 9}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
