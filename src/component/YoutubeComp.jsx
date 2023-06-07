import React from "react";

const YoutubeComp = () => {
  return (
    <div className="w-full">
      <div className="rounded-xl object-cover place-items-start w-32 flex flex-col-reverse items-center md:flex-row">
        <img src="src/assets/youtube.jpg" alt="" />
        <h1 className="uppercase text-slate text-lg mx-2 dark:text-primary">Youtube</h1>
      </div>
      <h3 className="text-slate text-base dark:text-primary p-3">Search Result</h3>
      <div className="text-slate grid md:grid-cols-2 gap-4 dark:text-primary">
        <div>
          <img src="src/assets/youtube.jpg" alt="" />
          <h3>Full Moon</h3>
        </div>
        <div>
          <img src="src/assets/youtube.jpg" alt="" />
          <h3>Forbiden Kingdom</h3>
        </div>
        <div>
          <img src="src/assets/youtube.jpg" alt="" />
          <h3>The Acidental King</h3>
        </div>
        <div>
          <img src="src/assets/youtube.jpg" alt="" />
          <h3>React Complete Tutorial</h3>
        </div>
      </div>
    </div>
  );
};

export default YoutubeComp;