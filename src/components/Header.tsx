"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "@/components/MobileMenu"; // ou o caminho correto

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastClicked = useRef<number>(0);
  const lastScroll = useRef<number>(0);

  // Detecta scroll para mostrar a navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const now = Date.now();

      if (
        now - lastClicked.current > 1000 &&
        Math.abs(currentScroll - lastScroll.current) > 10
      ) {
        setVisible(true);
      }

      lastScroll.current = currentScroll;
      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Esconde navbar após clique
  const handleNavClick = () => {
    lastClicked.current = Date.now();

    if (window.innerWidth >= 640) {
      setVisible(false);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, 8000); // exibe de novo se o usuário não mexer nada por 8s
    }
  };

  // Faz a barra reaparecer ao mover o mouse no topo da tela, em qualquer lugar
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 30) {
        setVisible(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 w-full backdrop-blur bg-black/50 z-50 pt-4 pb-2 px-6 sm:px-14 flex justify-between items-center"
        >
          <div className="text-sm sm:text-base font-bold tracking-wide text-white font-serif">
            Mary Mendes
          </div>
          {/* Menu desktop */}
          <nav className="hidden sm:flex space-x-5 sm:space-x-10 text-xs sm:text-sm text-gray-200 font-sans">
            {[
              { label: "INÍCIO", href: "#inicio" },
              { label: "SOBRE", href: "#sobre" },
              { label: "FASHION FILMES", href: "#fashion_films" },
              { label: "INTERATIVOS", href: "#interactives" },
              { label: "MAIS SERVIÇOS", href: "#more_services" },
              { label: "CONTATO", href: "#contato" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={handleNavClick}
                className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#4D8841] after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Menu mobile */}
          <div className="sm:hidden">
            <MobileMenu onNavClick={handleNavClick} />
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
