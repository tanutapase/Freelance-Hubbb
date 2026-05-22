import React from "react";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

const WA_URL =
  "https://wa.me/918433553501?text=Hi%20TanuDevWorks!%20I%27m%20interested%20in%20getting%20a%20website%20built.%20Can%20we%20discuss%20my%20project%3F";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-35" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-[52px] h-[52px] rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_4px_28px_rgba(34,197,94,0.5)]"
        >
          <SiWhatsapp size={24} />
        </motion.div>
      </div>
    </a>
  );
}
