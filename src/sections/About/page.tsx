"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import mary1 from "@/assets/about/mary-1.jpg";
import mary2 from "@/assets/about/mary-2.jpg";
import mary3 from "@/assets/about/mary-3.jpg";
import mary4 from "@/assets/about/mary-4.jpg";
import mary5 from "@/assets/about/mary-5.jpg";

export default function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagens */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-start items-end relative gap-4"
        >
          {/* Imagem colada no canto */}
          <div className="relative w-70 min-h-screen">
            <Image
              src={mary5}
              fill
              alt="Mary"
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Coluna de duas imagens verticais */}
          <div className="flex flex-col gap-4">
            <div className="relative w-50 min-h-74">
              <Image
                src={mary3}
                fill
                alt="Mary"
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="relative w-50 min-h-73">
              <Image
                src={mary2}
                fill
                alt="Mary"
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-h-screen font-sans"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 relative inline-block after:absolute after:left-0 after:bottom-[-10px] after:w-16 after:h-1 after:bg-pink-400">
            Sobre Mim
          </h2>

          <p className="text-lg leading-relaxed text-balance mb-6 text-gray-200">
            Olá! Sou a Mary Mendes. Com formação em Comunicação Visual e
            Marketing, transformo ideias em narrativas visuais que vão além da
            estética: busco criar conteúdos com propósito, alinhados às
            tendências. Em cada projeto, meu objetivo é conectar marcas e
            pessoas com estratégia e autenticidade.
          </p>
          <div className="text-base text-gray-300 space-y-1">
            <p>
              <strong>Altura:</strong> 1,67 m
            </p>
            <p>
              <strong>Peso:</strong> 56 kg
            </p>
            <p>
              <strong>Busto:</strong> 86 cm
            </p>
            <p>
              <strong>Cintura:</strong> 68 cm
            </p>
            <p>
              <strong>Quadril:</strong> 96 cm
            </p>
            <p>
              <strong>Vestuário:</strong> P, M e 38
            </p>
            <p>
              <strong>Calçado:</strong> 35
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
