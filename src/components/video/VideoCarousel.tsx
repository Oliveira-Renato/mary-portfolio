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
    <div className="w-full flex justify-center pt-[95px] pb-0 px-0 sm:pb-0 md:pb-10 lg:pb-10 sm:px-0 md:px-8 lg:px-8 relative z-10 overflow-visible">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        loop={true}
        grabCursor={true}
      >
        {Object.values(videos).map((videoData: any, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "260px", aspectRatio: "9 / 16" }}
          >
            <VideoWithSkeleton
              videoData={videoData}
              isPlaying={playingIndex === i}
              onPlay={() => setPlayingIndex(i)}
              onPause={() => {
                // Opcional: Se quiser que pause o vídeo ao clicar pause,
                // você pode zerar o playingIndex só se for o mesmo.
                if (playingIndex === i) setPlayingIndex(null);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
