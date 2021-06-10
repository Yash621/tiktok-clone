import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import React, { useState } from "react";
import "./VideoSideBar.css";

function VideoSideBar({ likes, shares, comments }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSideBar">
      <div className="videoSideBar_button">
        {liked ? (
          <div>
            <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
          </div>
        ) : (
          <div>
            <FavoriteBorderIcon
              fontSize="large"
              onClick={() => setLiked(true)}
            />
          </div>
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar_button">
        <MessageIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="videoSideBar_button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
