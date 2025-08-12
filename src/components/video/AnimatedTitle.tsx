"use client";

import { useEffect, useState } from "react";

type AnimatedTitleProps = {
  sectionInView: boolean;
  titleMoved: boolean;
  setTitleMoved: (moved: boolean) => void;
  setTitle: string;
};

export default function AnimatedTitle({
  sectionInView,
  titleMoved,
  setTitleMoved,
  setTitle,
}: AnimatedTitleProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se é mobile pelo breakpoint Tailwind (640px)
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      {sectionInView && !titleMoved && !isMobile && (
        <div
          className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 z-30 cursor-pointer"
          onMouseEnter={() => setTitleMoved(true)}
        />
      )}

      {sectionInView && (
        <div
          className={`absolute left-0 right-0 z-20 flex ${isMobile ? 'justify-left px-4' : 'justify-center'} pointer-events-none transition-all duration-700
            ${
              titleMoved
                ? isMobile
                  ? "top-32 opacity-80 scale-90"
                  : "top-32 opacity-80 scale-90"
                : isMobile
                ? "left-0 top-32 opacity-100 scale-100"
                : "top-1/2 -translate-y-1/2 opacity-100 scale-100"
            }
          `}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:bottom-[-10px] after:w-16 after:h-1 after:bg-[#4D8841] font-serif">
            {setTitle}
          </h2>
        </div>
      )}
    </>
  );
}
