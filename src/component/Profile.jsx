import React from "react";
import "../App.css";

const Profile = () => {
  return (
    <div className=" w-full ">
      <p className="text-white text-center pb-6 dark:text-primary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere odit sit, maiores cumque eum molestiae mollitia iusto, sunt nam animi expedita! Ipsa sit nemo tempore nostrum aliquam possimus fugit repellendus.
      </p>
      <div className="text-white  p-6 text-sm md:text-base bg-primary rounded-xl shadow-md flex  justify-around w-auto gap-2 dark:bg-slate ">
        <div className="repos dark:text-primary">
          <h3>Repos</h3>
          <p>8</p>
        </div>
        <div className="followers dark:text-primary">
          <h3>Followers</h3>
          <span>3938</span>
        </div>
        <div className="following dark:text-primary">
          <h3>Following</h3>
          <span>9</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
