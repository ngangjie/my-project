import React from "react";
import Profile from "./Profile";
import SocialHandle from "./SocialHandle";
import "../App.css";
import User from "./User";
import { useSearch } from "../context/SearchContext";
import ContentBlock from "./ContentBlock";
import { Img } from "react-image";

const Home = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  const { avatar_url } = post
  console.log(post, "github", avatar_url);
  return (
    <div className="w-md-[800px] flex justify-around  bg-secondary rounded-xl shadow-md p-4 dark:bg-white">
      <div className="rounded-xl object-cover place-items-start ">
        <Img
          className="rounded-full"
          src={avatar_url ? avatar_url : "src/assets/github.png"}
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
      <div className="w-full items-start mx-4">
        <User />
        <Profile />
        <SocialHandle />
      </div>


    </div>
    // <div className="mt-10 2xl:w-4/12 xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-8/12 w-11/12 h-4/6 overflow-hidden">
    //   {post ? <ContentBlock userData={post} /> : "No User available"}
    // </div>
  );
};

export default Home;
