import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

function Video() {
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
        src="https://v16m.tiktokcdn.com/d92e23a4f354b79fd67a6353cf694fee/60c267f6/video/tos/useast2a/tos-useast2a-pve-0068/e8ca3b253fe94734aac76fe740af200c/?a=1233&br=1334&bt=667&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106101328410101890741643702DFC6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3BoN3I1cGQ1NTMzNzczM0ApNTc4aGk0Z2Q3Nzg0NzM7NmdsZmdeYzNeNG9gLS1kMTZzczZhMzI0NS5fMjAuMl4xYjU6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter />
      <VideoSideBar />
    </div>
  );
}
export default Video;
