import React from "react";
import ReactPlayer from "react-player";

const Player = ({ video }) => {
  return <ReactPlayer controls={true} url={video} width="100vw" height="100vh" />;
};

export default Player;
