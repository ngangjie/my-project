import React from "react";
import Profile from "./Profile";
import SocialHandle from "./SocialHandle";
import "../App.css";
import User from "./User";

const Home = () => {
  return (
    <div className=" bg-secondary rounded-xl shadow-md p-4 dark:bg-white">
      
        <User />
        <Profile />
        <SocialHandle />
     
    </div>
  );
};

export default Home;
