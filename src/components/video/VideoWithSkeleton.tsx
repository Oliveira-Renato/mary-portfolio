"use client";
import { useState } from "react";
import Video from "next-video";
import MediaThemeInstaplay from "player.style/instaplay/react";

export default function VideoWithSkeleton({ videoSrc, videoRef, onPlay }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="w-full max-w-[260px] relative overflow-hidden"
      style={{
        aspectRatio: "9 / 16",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.15), inset 0 0 30px 15px rgba(0,0,0,0.12)",
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse z-10" />
      )}
      <Video
        src={videoSrc}
        theme={MediaThemeInstaplay}
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setLoaded(true)}
        ref={videoRef}
        onPlay={onPlay}
      />
    </div>
  );
}
