import React, { useState } from "react";
import { useSearch } from "../context/SearchContext";
import ReactPlayer from "react-player";

const YoutubeComp = () => {
  const { api,  Data} = useSearch()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const {items} = Data;

  const playVideo = (x) => {
    setIsVideoPlaying(true)
    const videoId = x;
    // Ajoutez ici la logique pour lire la vidéo, par exemple, en utilisant une bibliothèque de lecteur vidéo comme react-player
  };


  return (
    <div className="w-full">
      <div className="rounded-xl object-cover place-items-start w-32 flex flex-col-reverse items-center md:flex-row">
        <img src="src/assets/youtube.jpg" alt="" />
        <h1 className="uppercase text-slate text-lg mx-2 dark:text-primary">Youtube</h1>
      </div>
     { Data?.items? (<h3 className="text-slate text-base dark:text-primary p-3">Happy Viewing!!</h3>): (<h3 className="text-slate text-base dark:text-primary p-3">No Result Available!</h3>) }
      <div className="text-slate grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:text-primary">
      {Data?.items?.map((video) => (
            
            <div key={video.id} className="video-item bg-white rounded-lg shadow-md p-4">

              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                controls
                width="100%"
                height="auto"
              />
            
              <div className="video-info mt-4">
                <h2 className="title text-primary text-lg font-bold">{video.snippet.title}</h2>
                
                <p className="published-at mt-2 text-gray text-sm"><span className="font-bold text-gray">Published At</span>{" "}
                { new Date(video.snippet.publishedAt).toLocaleString("en-US", {
                weekday: "short",
                day: "numeric",
                year: "numeric",
              })
            }
                </p>
               
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default YoutubeComp;
