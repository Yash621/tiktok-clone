import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

function Video({ url, description, username, song, likes, comments, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        loop
        onClick={handleVideoPress}
        ref={videoRef}
        className="video_player"
        src={url}
      ></video>
      <VideoFooter description={description} username={username} song={song} />
      <VideoSideBar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}
export default Video;
