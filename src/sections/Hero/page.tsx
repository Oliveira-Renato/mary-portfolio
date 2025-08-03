// Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/home-4.jpg')" }}
    >
      {/* Overlay escuro com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-4xl ml-0 sm:ml-6 md:ml-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight">
            <span>Mary</span> <span>Mendes</span>
          </h1>
          <p className="text-gray-100 text-lg sm:text-xl md:text-2xl lg:text-xl mt-2 tracking-wide font-sans">
            <span className="text-white">Criadora de Conteúdo</span>{" "}
            <span className="text-pink-400 font-bold px-2 animate-pulse">
              |
            </span>
            <span className="text-white">Comunicação Visual & Marketing</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
