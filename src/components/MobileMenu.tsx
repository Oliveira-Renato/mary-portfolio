"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

type MobileMenuProps = {
  onNavClick?: () => void; // ✅ aqui está o tipo
};

export default function MobileMenu({ onNavClick }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
    onNavClick?.(); // chama função pra esconder nav principal
  };

  return (
    <div className="sm:hidden">
      <button onClick={() => setOpen((prev) => !prev)} aria-label="Menu">
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-4 bg-black/90 text-white rounded-xl p-6 z-50 shadow-lg w-2/3 py-24 pl-8"
          >
            <nav className="flex flex-col space-y-12 text-sm font-sans">
              <a href="#inicio" onClick={handleLinkClick}>
                INÍCIO
              </a>
              <a href="#sobre" onClick={handleLinkClick}>
                SOBRE
              </a>
              <a href="#fashion_films" onClick={handleLinkClick}>
                FASHION FILMES
              </a>
              <a href="#interactives" onClick={handleLinkClick}>
                INTERATIVOS
              </a>
              <a href="#contato" onClick={handleLinkClick}>
                CONTATO
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
