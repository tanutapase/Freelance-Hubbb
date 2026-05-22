import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const socials = [
  {
    platform: "Instagram",
    handle: "@tanudevworks",
    description: "Follow for design inspiration, project showcases and updates",
    icon: Instagram,
    href: "https://instagram.com/tanudevworks",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    border: "hover:border-pink-200",
  },
  {
    platform: "GitHub",
    handle: "@tanudevworks",
    description: "Browse open-source projects and code samples",
    icon: Github,
    href: "https://github.com/tanudevworks",
    iconColor: "text-neutral-800",
    iconBg: "bg-neutral-100",
    border: "hover:border-neutral-300",
  },
  {
    platform: "LinkedIn",
    handle: "TanuDevWorks",
    description: "Connect professionally and see work experience",
    icon: Linkedin,
    href: "https://linkedin.com/in/tanudevworks",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "hover:border-blue-200",
  },
  {
    platform: "WhatsApp",
    handle: "+91 84335 53501",
    description: "Chat directly to discuss your project — fastest response",
    icon: SiWhatsapp,
    href: "https://wa.me/918433553501?text=Hi%20TanuDevWorks!%20I%27d%20like%20to%20discuss%20a%20project.",
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    border: "hover:border-green-200",
  },
  {
    platform: "Email",
    handle: "tanudevworks@gmail.com",
    description: "Send a detailed inquiry for bigger projects",
    icon: Mail,
    href: "mailto:tanudevworks@gmail.com",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-50",
    border: "hover:border-slate-200",
  },
];

export default function SocialSection() {
  return (
    <section id="social" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
            Stay Connected
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Find TanuDevWorks Online
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-neutral-500 text-base">
            Whether you want to collaborate, follow the work, or just say hi — always easy to reach.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -3 }}
                className={`group flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-100 ${social.border} hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-250`}
              >
                <div className={`w-11 h-11 rounded-xl ${social.iconBg} ${social.iconColor} flex items-center justify-center shrink-0`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm text-neutral-900">{social.platform}</span>
                    <ArrowUpRight size={12} className="text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                  </div>
                  <p className="text-xs text-neutral-500 truncate mt-0.5">{social.handle}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
