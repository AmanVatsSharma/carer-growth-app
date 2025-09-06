"use client";

import React from "react";

type VideoProps = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

const Video: React.FC<VideoProps> = ({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  return (
    <video
      className={`w-full h-full object-cover ${className}`}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      preload="auto"
    />
  );
};

export default Video;
