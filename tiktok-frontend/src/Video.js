import React, { useRef, useState } from "react";
import "./Video.css";

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
        src="https://v77.tiktokcdn.com/4f5ccb30b965b96189e853d25a75fff8/60c10854/video/tos/useast2a/tos-useast2a-ve-0068c003/2060c02773eb4d5791c6fbd7fc64c03d/?a=1233&br=1982&bt=991&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210609122827010189072215230D18E9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anc2eTxobXU7NTMzNzczM0ApO2hkPGU6PGU6N2czNTo0NmdfcXJocXNmLjVgLS1kMTZzc2NeYF8vMi4zMDEuNi8wYTU6Yw%3D%3D&vl=&vr="
      ></video>
    </div>
  );
}

export default Video;
