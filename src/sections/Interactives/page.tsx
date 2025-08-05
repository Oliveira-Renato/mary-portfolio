"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "@/components/video/AnimatedTitle";
import VideoCarousel from "@/components/video/VideoCarousel";
import videos from "@/assets/videos/videos";

export default function FashionFilms() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { INTERATIVOS } = videos;
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
    <motion.section
      id="interactives"
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative text-white py-16 px-4 sm:px-6 lg:px-24 min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #000000 0%, #0a0a0a 80%, #000000 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto py-6">
        <AnimatedTitle
          sectionInView={sectionInView}
          titleMoved={titleMoved}
          setTitleMoved={setTitleMoved}
          setTitle={"Interativos"}
        />

        <div className="mt-8">
          <VideoCarousel videos={INTERATIVOS} />
        </div>
      </div>
    </motion.section>
  );
}
