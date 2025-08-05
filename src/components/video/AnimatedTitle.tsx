"use client";

export default function AnimatedTitle({
  sectionInView,
  titleMoved,
  setTitleMoved,
  setTitle,
}) {
  return (
    <>
      {sectionInView && !titleMoved && (
        <div
          className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 z-30 cursor-pointer"
          onMouseEnter={() => setTitleMoved(true)}
        />
      )}
      {sectionInView && (
        <div
          className={`absolute left-0 right-0 z-20 flex justify-center transition-all duration-700 pointer-events-none ${
            titleMoved
              ? "top-14 opacity-80 scale-90"
              : "top-1/2 -translate-y-1/2 opacity-100 scale-100"
          }`}
        >
          <h2 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-md pointer-events-none relative inline-block after:absolute after:left-0 after:bottom-[-10px] after:w-16 after:h-1 after:bg-pink-400 font-serif">
            {setTitle}
          </h2>
        </div>
      )}
    </>
  );
}
