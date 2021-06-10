import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import React, { useState } from "react";
import "./VideoSideBar.css";

function VideoSideBar() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSideBar">
      <div className="videoSideBar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={() => setLiked(true)} />
        )}

        <p>100</p>
      </div>
      <div className="videoSideBar_button">
        <MessageIcon fontSize="large" />
        <p>250</p>
      </div>
      <div className="videoSideBar_button">
        <ShareIcon fontSize="large" />
        <p>12</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
