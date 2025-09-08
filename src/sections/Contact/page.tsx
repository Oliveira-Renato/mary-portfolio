// Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="min-h-screen text-white flex items-center justify-center px-4 sm:px-6 lg:px-24 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-4xl sm:text-5xl sm:text-5xl font-bold mb-6 font-serif">
          Vamos trabalhar juntos?
        </h2>

        <div className="space-y-4 text-lg text-gray-300 font-sans">
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-[#4D8841]" />
            <span>(11) 97748-6545</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Instagram className="w-5 h-5 text-[#4D8841]" />
            <a
              href="https://instagram.com/mary.mendesm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @mary.mendes
            </a>
          </div>

           <div className="flex items-center justify-center gap-3">
            <Linkedin className="w-5 h-5 text-[#4D8841]" />
            <a
              href="https://www.linkedin.com/in/mariana-mendes-6573161bb?"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Mariana Mendes 
            </a>
          </div>


          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-[#4D8841]" />
            <span>falecommarianamendes@gmail.com</span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
