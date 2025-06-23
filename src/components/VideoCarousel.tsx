'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function VideoCarousel({ videos }: { videos: string[] }) {
  return (
    <div className="overflow-visible px-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation
        className="w-full h-[600px]"
      >
        {videos.map((videoUrl, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[180px] sm:!w-[220px] lg:!w-[360px] flex justify-center items-center"
          >
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
