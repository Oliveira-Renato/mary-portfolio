"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoWithSkeleton from "./VideoWithSkeleton";
import type StaticVideoData from "next-video";

type Props = {
  videos: any; // ou StaticVideoData[] se for array direto
};

export default function VideoCarousel({ videos }: Props) {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (indexToKeep: number) => {
    videoRefs.current.forEach((videoEl, i) => {
      if (videoEl && i !== indexToKeep) {
        videoEl.pause?.();
      }
    });
  };

  return (
    <div className="w-full flex justify-center pt-[95px] pb-10 px-8 relative z-10 overflow-visible">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        loop={true}
        grabCursor={true}
      >
        {Object.values(videos).map((video, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "260px", aspectRatio: "9 / 16" }}
          >
            <VideoWithSkeleton
              videoSrc={video}
              videoRef={(el: HTMLVideoElement | null) =>
                (videoRefs.current[i] = el!)
              }
              onPlay={() => handlePlay(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
