import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const quickLinks = ["Home", "About", "Projects", "Services", "Pricing", "Contact"];
const services = ["Business Websites", "Ecommerce Stores", "Portfolio Sites", "Landing Pages", "Firebase Backend", "AI Chatbot Integration"];

const socials = [
  { icon: Instagram, href: "https://instagram.com/tanudevworks", label: "Instagram" },
  { icon: Github, href: "https://github.com/tanudevworks", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/tanudevworks", label: "LinkedIn" },
  { icon: SiWhatsapp, href: "https://wa.me/918433553501", label: "WhatsApp" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white text-xs font-black">TD</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-base tracking-tight">TanuDevWorks</span>
                <span className="text-[10px] text-white/40 font-medium tracking-wider uppercase">Web Agency</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Premium websites for modern businesses and creators. Built fast, designed beautifully, in Mumbai.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/20 flex items-center justify-center text-neutral-400 hover:text-white transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)} className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    {link}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map(s => (
                <li key={s}><span className="text-sm text-neutral-400">{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">Contact</h4>
            <div className="flex flex-col gap-3.5">
              <a href="mailto:tanudevworks@gmail.com" className="group flex items-start gap-3">
                <Mail size={14} className="text-neutral-500 mt-0.5 shrink-0" />
                <span className="text-sm text-neutral-400 group-hover:text-white transition-colors break-all">tanudevworks@gmail.com</span>
              </a>
              <a href="https://wa.me/918433553501" className="group flex items-start gap-3">
                <SiWhatsapp size={14} className="text-neutral-500 mt-0.5 shrink-0" />
                <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">+91 84335 53501</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-neutral-500 mt-0.5 shrink-0" />
                <span className="text-sm text-neutral-400">Mumbai, Maharashtra</span>
              </div>
              <div className="mt-1 p-4 rounded-xl bg-white/5 border border-white/8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-semibold text-green-400">Available for new projects</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">Responds within a few hours on WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} TanuDevWorks. All rights reserved. · Mumbai, India</p>
          <motion.a href="#home" whileHover={{ y: -1 }} className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5">
            Back to top <ArrowUpRight size={11} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
