"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedTitle from "@/components/video/AnimatedTitle";
import VideoCarousel from "@/components/video/VideoCarousel";
import videos from "@/assets/videos/videos";

export default function FashionFilms() {
  const sectionRef = useRef(null);
  const { FASHIONFILMES } = videos;
  const [sectionInView, setSectionInView] = useState(false);
  const [titleMoved, setTitleMoved] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setSectionInView(isVisible);
        if (!isVisible) setTitleMoved(false);
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
      <AnimatedTitle
        sectionInView={sectionInView}
        titleMoved={titleMoved}
        setTitleMoved={setTitleMoved}
        setTitle={"Lifestyle"}
      />
      <VideoCarousel videos={FASHIONFILMES} />
    </section>
  );
}
