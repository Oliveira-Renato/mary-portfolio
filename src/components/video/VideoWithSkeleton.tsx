"use client";
import { useEffect, useState, useRef } from "react";
import Video from "next-video";
import Hls from "hls.js";
import { Play } from "lucide-react";

type VideoWithSkeletonProps = {
  videoData: {
    poster: string;
    sources: { src: string; type: string }[];
  };
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
};

export default function VideoWithSkeleton({
  videoData,
  isPlaying,
  onPlay,
  onPause,
}: VideoWithSkeletonProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const videoUrl = videoData.sources[0]?.src;
  const thumbnailUrl = videoData.poster;

  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play().catch((e) => {
        if (e.name !== "AbortError") {
          console.error("Erro ao tentar dar play:", e);
        }
      });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    const img = new Image();
    img.src = thumbnailUrl;
    img.onload = () => setThumbLoaded(true);
    img.onerror = () => {
      console.error("Erro ao carregar thumb!");
      setThumbLoaded(true);
    };
    const timeout = setTimeout(() => setThumbLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, [thumbnailUrl]);

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (isPlaying) videoRef.current?.play();
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = videoUrl;
      if (isPlaying) videoRef.current.play();
    }
  }, [videoUrl, isPlaying]);

  return (
    <div
      className="w-full max-w-[260px] relative overflow-hidden rounded-2xl group transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        aspectRatio: "9 / 16",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.15), inset 0 0 30px 15px rgba(0,0,0,0.12)",
      }}
    >
      {/* Skeleton */}
      <div
        className={`absolute inset-0 bg-gray-700 rounded-2xl transition-opacity duration-500 z-10 ${
          thumbLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt="Video thumbnail"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl z-0"
        onLoad={() => setThumbLoaded(true)}
        onError={() => setThumbLoaded(true)}
      />
      {/* Overlay para play */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20 rounded-2xl bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={onPlay}
            className="
      flex items-center cursor-pointer gap-2 px-4 py-2 rounded-lg font-semibold shadow-lg
      bg-black text-pink-400 border-2 border-pink-400
      border-pulse
      hover:bg-pink-900 hover:text-pink-300
      transition-colors duration-300
    "
          >
            <Play className="w-5 h-5" />
            Assistir
          </button>
        </div>
      )}
      {/* Player */}
      {isPlaying && (
        <Video
          ref={videoRef}
          controls
          autoPlay
          muted
          playsInline
          onPause={onPause}
          className="absolute inset-0 w-full h-full object-contain rounded-2xl z-30"
        />
      )}
    </div>
  );
}
