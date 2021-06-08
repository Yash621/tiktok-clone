import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        loop
        className="video_player"
        src="https://v39-eu.tiktokcdn.com/3f5f4e23696a1f130eda7dd9a78cb6f5/60bfbac4/video/tos/useast2a/tos-useast2a-ve-0068c002/a2d336414b744f45bed7a2d93e3cb495/?a=1233&amp;br=8014&amp;bt=4007&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;l=202106081244570101891941634905EDCD&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=M3hkcHBzbG1yNTMzNzczM0ApN2dpOWczZTtlN2VkMzszNmdhbDItYmptX21gLS1kMTZzczJhNmBgYy8uMDBeLzUyMTA6Yw%3D%3D&amp;vl=&amp;vr="
      ></video>
    </div>
  );
}

export default Video;
