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
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-13 h-13 w-[52px] h-[52px] rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_4px_24px_rgba(34,197,94,0.45)]"
        >
          <SiWhatsapp size={24} />
        </motion.div>
      </div>
    </a>
  );
}
