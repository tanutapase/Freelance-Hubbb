import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-neutral-100 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center shadow-sm group-hover:bg-neutral-700 transition-colors">
            <span className="text-white text-xs font-black tracking-tight leading-none">TD</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-base tracking-tight text-neutral-900">TanuDevWorks</span>
            <span className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase">Web Agency</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-semibold hover:bg-neutral-700 transition-all duration-200 shadow-sm"
          >
            Start Project
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-100 px-6 py-6 shadow-xl flex flex-col gap-1 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-neutral-700 py-3 border-b border-neutral-50 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="mt-4 px-6 py-3.5 bg-neutral-900 text-white rounded-2xl text-center font-semibold hover:bg-neutral-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
