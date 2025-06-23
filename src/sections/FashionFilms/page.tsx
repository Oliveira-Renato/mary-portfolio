import VideoCarousel from "@/components/VideoCarousel";

const fashionVideos = [
  "https://drive.google.com/file/d/1JRYJq7V4AD1rS8Dsa8Ru3WpjULEwi3TT/view",
  "https://www.youtube.com/embed/YyBALLyASSY",
  "https://www.youtube.com/embed/YyBALLyASSY",
  "https://www.youtube.com/embed/YyBALLyASSY",
  "https://www.youtube.com/embed/YyBALLyASSY",
  "https://www.youtube.com/embed/YyBALLyASSY",
];

export default function FashionFilms() {
  return (
    <section id="servicos" className="h-screen w-full p-10 bg-gray-800 flex items-center overflow-hidden">
      <div className="w-full">
        <div>
          <VideoCarousel videos={fashionVideos} />
        </div>
      </div>
    </section>
  );
}
