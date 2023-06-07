import React from "react";
import "../App.css";
import LinkIcon from "@mui/icons-material/Link";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApartmentIcon from "@mui/icons-material/Apartment";
const SocialHandle = () => {
  return (
    <div className="md:grid grid-cols-2 py-8 gap-2 items-end dark:text-primary">
      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <PersonPinCircleIcon />
          <a href="#" className="px-2">
            San_Francisco
          </a>
        </span>
      </div>
      <div className="flex  px-2 text-white  dark:text-primary">
        <span>
          <TwitterIcon />
          <a className="px-2" href="#">
            Not_available
          </a>
        </span>
      </div>

      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <LinkIcon />
          <a className="px-2" href="https://github.blog">
            https://github.blog
          </a>{" "}
        </span>
      </div>
      <div className="flex  px-2 text-white dark:text-primary">
        <span>
          <ApartmentIcon />
          <a className="p-2" href="#">
            agithub
          </a>
        </span>
      </div>
    </div>
  );
};

export default SocialHandle;
