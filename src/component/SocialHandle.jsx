import React from "react";
import "../App.css";
import LinkIcon from "@mui/icons-material/Link";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useSearch } from "../context/SearchContext";

const SocialHandle = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  const { blog, location, twitter, company } = post
  return (
    <div className="md:grid grid-cols-2 py-8 gap-2 items-start dark:text-primary">
      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <PersonPinCircleIcon />
          <a href="#" className="px-2">
            {location ? location : "Not Available"}
          </a>
        </span>
      </div>
      <div className="flex  px-2 text-white  dark:text-primary">
        <span>
          <TwitterIcon />
          <a className="px-2" href={twitter ? twitter : "/"}>
            {twitter ? twitter : "Not Available"}
          </a>
        </span>
      </div>

      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <LinkIcon />
          <a className="px-2" href={blog ? blog : "/"}>
            {blog ? blog : "Not Available"}
          </a>{" "}
        </span>
      </div>
      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <ApartmentIcon />
          <a className="p-2" href="#">
            {company ? company : "Not Available"}
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialHandle;
