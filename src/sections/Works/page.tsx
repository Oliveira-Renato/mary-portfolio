import Video from "next-video";
import firstVideo from "@/videos/video-1.mp4";
import MediaThemeInstaplay from "player.style/instaplay/react";

export default function Works() {
  return (
    <section
      id="servicos"
      className="min-h-screen px-4 py-10 bg-gray-800 text-white"
    >
      <div className="space-y-12 max-w-4xl mx-auto">
        <div className="flex p-5">
          <div className="w-full max-w-[310px] h-[540px] rounded-lg overflow-hidden shadow-lg">
            <Video
              src={firstVideo}
              theme={MediaThemeInstaplay}
              className="w-full h-full object-cover"
            />
            <Video
              src={firstVideo}
              theme={MediaThemeInstaplay}
              className="w-full h-full object-cover"
            />
            <Video
              src={firstVideo}
              theme={MediaThemeInstaplay}
              className="w-full h-full object-cover"
            />
            <Video
              src={firstVideo}
              theme={MediaThemeInstaplay}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
