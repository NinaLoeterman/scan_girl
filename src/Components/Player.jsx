import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Player = () => {
  const [video, setVideo] = useState(null);
  
  useEffect(() => {
    let { slug } = useParams();
    if (slug === "suicide") {
      setVideo('"https://youtu.be/A-yMz35wIxU"')
    } else {
      setVideo('https://youtu.be/EdKkofuIOR0')
    }
  }, []);

  return (
    <ReactPlayer controls={true} url={video} width="100vw" height="100vh" />
  );
};

export default Player;
