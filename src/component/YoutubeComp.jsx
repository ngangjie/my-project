import React, { useState } from "react";
import { useSearch } from "../context/SearchContext";
import ReactPlayer from "react-player";

const YoutubeComp = () => {
  const { api, post, isLoading, setIsLoading } = useSearch()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // const [videItem, setvideItem] = useState("false")

  console.log(post)
  const playVideo = (x) => {
    setIsVideoPlaying(true)
    const videoId = x;
    // Ajoutez ici la logique pour lire la vidéo, par exemple, en utilisant une bibliothèque de lecteur vidéo comme react-player
  };
  if (isLoading) return (<p className="text-white">Loading...</p>)
  return (
    <div className="w-full">
      <div className="rounded-xl object-cover place-items-start w-32 flex flex-col-reverse items-center md:flex-row">
        <img src="src/assets/youtube.jpg" alt="" />
        <h1 className="uppercase text-slate text-lg mx-2 dark:text-primary">Youtube</h1>
      </div>
      <h3 className="mb-4 text-slate text-2xl dark:text-primary p-3">Search Result</h3>
      <div className="container mx-auto">
        {/* <h1 className="text-2xl font-bold mb-4">YouTube Videos</h1> */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {post?.items?.map((video) => (
            // <div key={video.id} className="video-item">
            //   <img
            //     className="thumbnail"
            //     src={video.snippet.thumbnails.default.url}
            //     alt={video.snippet.title}
            //   />
            //   <div className="video-info">
            //     <h2 className="title">{video.snippet.title}</h2>
            //     <p className="description">{video.snippet.description}</p>
            //     <p className="channel-title">Channel: {video.snippet.channelTitle}</p>
            //     <p className="published-at">Published At: {video.snippet.publishedAt}</p>
            //   </div>
            // </div>
            <div key={video.id} className="video-item bg-white rounded-lg shadow-md p-4">

              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                controls
                width="100%"
                height="auto"
              />
              {/* <img
                  className="thumbnail w-full h-auto object-cover rounded"
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                /> */}
              {/* {isVideoPlaying ? (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  controls
                  width="100%"
                  height="auto"
                />) : (
                <img
                  className="thumbnail w-full h-auto object-cover rounded"
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                />)} */}
              <div className="video-info mt-4">
                <h2 className="title text-lg font-bold">{video.snippet.title}</h2>
                {/* <p className="description text-gray-600 text-sm">{video.snippet.description}</p> */}
                {/* <p className="channel-title text-gray-500 text-sm text-start">Channel: {video.snippet.channelTitle}</p> */}
                <p className="published-at mt-2 text-gray-500 text-sm"><span className="font-bold text-gray-500">Published At</span>: {video.snippet.publishedAt}</p>
                {/* <button
                  className="play-button mt-4 bg-rose-800 hover:bg-blue-600 text-red font-semibold py-2 px-4 rounded"
                  onClick={() => { playVideo(video.id.videoId) }}
                >
                  Play Video
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeComp;
