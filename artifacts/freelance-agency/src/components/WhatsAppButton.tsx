import React from "react";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl shadow-green-500/40"
        >
          <SiWhatsapp size={26} />
        </motion.div>
      </div>
    </a>
  );
}
