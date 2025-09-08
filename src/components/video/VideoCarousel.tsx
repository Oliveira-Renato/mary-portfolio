"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoWithSkeleton from "./VideoWithSkeleton";

type Props = {
  videos: Record<string, any>;
};

export default function VideoCarousel({ videos }: Props) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-center pt-[95px] pb-0 px-0 sm:pb-0 md:pb-10 lg:pb-10 sm:px-0 md:px-8 lg:px-8 relative z-10 overflow-show">

    <Swiper
        spaceBetween={12}
        loop={true}
        grabCursor={true}
        slidesPerView={"auto"}
        centeredSlides={false} 
        breakpoints={{
          0: {
            centeredSlides: true, 
          },
          768: {
            centeredSlides: false,
          }
        }}
        style={{overflow: 'visible'}}
      >
        {Object.values(videos).map((videoData: any, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: "260px",
              aspectRatio: "9 / 16",
            }}
          >
            <VideoWithSkeleton
              videoData={videoData}
              isPlaying={playingIndex === i}
              onPlay={() => setPlayingIndex(i)}
              onPause={() => {
                if (playingIndex === i) setPlayingIndex(null);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
