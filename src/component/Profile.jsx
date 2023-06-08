import React from "react";
import "../App.css";
import { useSearch } from "../context/SearchContext";

const Profile = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  const {public_repos, followers, following, bio} = post
  return (
    <div className=" w-full ">
      <p className="text-white text-center pb-6 dark:text-primary">
       {bio ==null? 'No bio': bio}
      </p>
      <div className="text-white  p-6 text-sm md:text-base bg-primary rounded-xl shadow-md flex  justify-around w-auto gap-2 dark:bg-slate ">
        <div className="repos dark:text-primary">
          <h3>Repos</h3>
          <p>{public_repos? public_repos:"No repo"}</p>
        </div>
        <div className="followers dark:text-primary">
          <h3>Followers</h3>
          <span>{followers? "No Followers":followers}</span>
        </div>
        <div className="following dark:text-primary">
          <h3>Following</h3>
          <span>{following? "No Following": following}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
