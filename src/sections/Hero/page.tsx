import Image from "next/image";
import heroImage from "@/assets/hero/hero.jpg"
export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-start px-10"
      style={{ backgroundImage: "url('/hero/home-4.jpg')" }}
    >
      <div className="bg-transparent bg-opacity-50 p-6 ml-24 rounded-xl">
        <h1 className="text-9xl font-bold flex flex-col"><span>Mary</span>{' '}<span>Mendes</span></h1>
        <p className="text-4xl mt-2">Modelo e criadora de conteúdo</p>
      </div>
    </section>

  );
}