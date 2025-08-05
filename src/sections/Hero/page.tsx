"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useMedia from "use-media";

export default function Hero() {
  const isMobile = useMedia({ maxWidth: 639 }); // até sm

  const heroImage = isMobile
    ? "/hero/home-mobile.jpg"
    : "/hero/home-desktop.jpg";

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo com base no dispositivo */}
      <Image
        src={heroImage}
        alt="Hero"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover z-0"
      />

      {/* Overlay escuro com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 flex items-center h-full px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-4xl ml-0 sm:ml-6 md:ml-10"
        >
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-9xl font-serif font-bold leading-tight">
            <span>Mary</span> <span>Mendes</span>
          </h1>
          <div className="pr-8 sm:pr-8  md:pr-0 lg:pr-0 ">
            <p className="text-gray-100 text-sm sm:text-xl md:text-2xl lg:text-[28px] mt-2 tracking-wide font-sans">
              <span className="text-white">Criadora de Conteúdo</span>{" "}
              <span className="text-pink-400 font-bold px-2 animate-pulse">|</span>
              <span className="text-white">Comunicação Visual & Marketing</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
