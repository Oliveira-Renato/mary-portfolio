"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoWithSkeleton from "./VideoWithSkeleton";

type Props = {
  videos: Record<string, any>;
};

export default function VideoCarousel({ videos }: Props) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [initialSlide, setInitialSlide] = useState(0);

  // Detecta se é mobile e seta o slide inicial
  useEffect(() => {
    if (window.innerWidth < 768 && Object.values(videos).length > 2) {
      setInitialSlide(1); 
    }
  }, []);

  return (
    <div className="w-full flex justify-center pt-[95px] pb-0 px-0 sm:pb-0 md:pb-10 lg:pb-10 sm:px-0 md:px-8 lg:px-8 relative z-10 overflow-hidden">
      <Swiper
        key={initialSlide} // 👈 força recriar quando muda
        spaceBetween={12}
        slidesPerView={"auto"}
        centeredSlides={false}
        initialSlide={initialSlide} 
        breakpoints={{
          0: {
            centeredSlides: true,
          },
          768: {
            centeredSlides: false,
          },
        }}
        style={{ overflow: "visible" }}
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
