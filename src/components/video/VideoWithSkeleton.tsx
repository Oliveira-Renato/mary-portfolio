"use client";
import { useState } from "react";
import Video from "next-video";
import MediaThemeInstaplay from "player.style/instaplay/react";

export default function VideoWithSkeleton({ videoSrc, videoRef, onPlay }) {
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="w-full max-w-[260px] relative overflow-hidden rounded-2xl group transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        aspectRatio: "9 / 16",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.15), inset 0 0 30px 15px rgba(0,0,0,0.12)",
      }}
    >
      {/* Skeleton enquanto carrega */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse z-10 rounded-2xl" />
      )}

      {/* Vídeo com play/pause listeners */}
      <Video
        src={videoSrc}
        theme={MediaThemeInstaplay}
        className={`w-full h-full object-contain rounded-2xl transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setLoaded(true)}
        ref={(el) => {
          if (videoRef) videoRef(el);
        }}
        onPlay={() => {
          setIsPlaying(true);
          onPlay?.();
        }}
        onPause={() => setIsPlaying(false)}
      />

      {/* Overlay de texto no hover, só se não estiver tocando */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20 rounded-2xl pointer-events-none">
          <p className="text-white text-sm font-semibold">
            Aperte para assistir
          </p>
        </div>
      )}
    </div>
  );
}
