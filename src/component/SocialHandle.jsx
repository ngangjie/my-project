import React from "react";
import "../App.css";
import LinkIcon from "@mui/icons-material/Link";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useSearch } from "../context/SearchContext";

const SocialHandle = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  const {location, company, twitter_username, blog} = post
  return (
    <div className="md:grid grid-cols-2 py-8 gap-2 items-end dark:text-primary">
      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <PersonPinCircleIcon />
          <a href="#" className="px-2">
           {location ==null?'Not Available' : location}
          </a>
        </span>
      </div>
      <div className="flex  px-2 text-white  dark:text-primary">
        <span>
          <TwitterIcon />
          <a className="px-2" href="#">
            {twitter_username ==null? 'Not_available' :twitter_username}
          </a>
        </span>
      </div>

      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <LinkIcon />
          <a className="px-2" href="https://github.blog">
            {blog == ""?'No blog': blog}
          </a>
        </span>
      </div>
      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <ApartmentIcon />
          <a className="p-2" href="#">
          {company ==null? 'Not_available' : company}
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialHandle;
