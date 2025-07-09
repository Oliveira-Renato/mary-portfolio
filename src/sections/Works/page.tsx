"use client";
import { useState, useEffect, useRef } from "react";
import Video from "next-video";
import firstVideo from "@/videos/video-1.mp4";
import MediaThemeInstaplay from "player.style/instaplay/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Works() {
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [titleMoved, setTitleMoved] = useState(false);

  const handlePlay = (indexToKeep) => {
    videoRefs.current.forEach((videoEl, i) => {
      if (videoEl && i !== indexToKeep) {
        videoEl.pause?.();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setSectionInView(isVisible);

        if (!isVisible) {
          setTitleMoved(false);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #000000 0%, #0a0a0a 80%, #000000 100%)",
      }}
    >
      {/* DIV INVISÍVEL CENTRAL */}
      {sectionInView && !titleMoved && (
        <div
          className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 z-30 cursor-pointer"
          onMouseEnter={() => setTitleMoved(true)}
        />
      )}

      {/* TÍTULO ANIMADO */}
      {sectionInView && (
        <div
          className={`absolute left-0 right-0 z-20 flex justify-center transition-all duration-700 pointer-events-none ${
            titleMoved
              ? "top-5 opacity-80 scale-90"
              : "top-1/2 -translate-y-1/2 opacity-100 scale-100"
          }`}
        >
          <h2 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-md pointer-events-none">
            Fashion Films
          </h2>
        </div>
      )}

      {/* CARROSSEL COM SOMBRAS LATERAIS */}
      <div
        className="pt-[95px] pb-10 px-8 relative z-10 overflow-visible"
        style={{
          boxShadow:
            "inset 20px 0 40px -10px rgba(0,0,0,0.9), inset -20px 0 40px -10px rgba(0,0,0,0.9)",
        }}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          loop={true}
          grabCursor={true}
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i} style={{ width: "310px" }}>
              <VideoWithSkeleton
                videoSrc={firstVideo}
                videoRef={(el) => (videoRefs.current[i] = el)}
                onPlay={() => handlePlay(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function VideoWithSkeleton({ videoSrc, videoRef, onPlay }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="w-full max-w-[310px] h-[540px] relative rounded-lg overflow-hidden"
      style={{
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.15), inset 0 0 30px 15px rgba(0,0,0,0.12)",
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg z-10" />
      )}
      <Video
        src={videoSrc}
        theme={MediaThemeInstaplay}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setLoaded(true)}
        ref={videoRef}
        onPlay={onPlay}
      />
    </div>
  );
}
