import "./App.css";
import instance from "./axios.js";
import Video from "./Video";
import React, { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await instance.get("/v2/posts");
      setVideos(response.data);
      return response;
    }

    fetchPost();
  }, []);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map((video) => (
          <Video
            url={video.url}
            description={video.description}
            username={video.username}
            song={video.song}
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
