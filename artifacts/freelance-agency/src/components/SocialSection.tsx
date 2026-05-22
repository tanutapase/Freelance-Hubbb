import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const socials = [
  {
    platform: "Instagram",
    handle: "@yourusername",
    description: "Follow for design inspiration and project updates",
    icon: Instagram,
    href: "https://instagram.com",
    color: "from-pink-500 to-purple-500",
    bg: "bg-gradient-to-br from-pink-50 to-purple-50",
    border: "border-pink-100 hover:border-pink-300",
    iconBg: "bg-gradient-to-br from-pink-500 to-purple-500 text-white",
    shadow: "hover:shadow-pink-200/60",
  },
  {
    platform: "GitHub",
    handle: "@yourusername",
    description: "Check out my open-source projects and code",
    icon: Github,
    href: "https://github.com",
    color: "from-gray-700 to-gray-900",
    bg: "bg-gradient-to-br from-gray-50 to-slate-50",
    border: "border-gray-200 hover:border-gray-400",
    iconBg: "bg-gray-900 text-white",
    shadow: "hover:shadow-gray-300/60",
  },
  {
    platform: "LinkedIn",
    handle: "Your Name",
    description: "Connect professionally and see my experience",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "from-blue-600 to-blue-700",
    bg: "bg-gradient-to-br from-blue-50 to-sky-50",
    border: "border-blue-100 hover:border-blue-300",
    iconBg: "bg-blue-600 text-white",
    shadow: "hover:shadow-blue-200/60",
  },
  {
    platform: "WhatsApp",
    handle: "+91 XXXXX XXXXX",
    description: "Chat directly and discuss your project needs",
    icon: SiWhatsapp,
    href: "https://wa.me/91XXXXXXXXXX",
    color: "from-green-500 to-emerald-600",
    bg: "bg-gradient-to-br from-green-50 to-emerald-50",
    border: "border-green-100 hover:border-green-300",
    iconBg: "bg-green-500 text-white",
    shadow: "hover:shadow-green-200/60",
  },
  {
    platform: "Email",
    handle: "hello@example.com",
    description: "Send me a detailed message for bigger projects",
    icon: Mail,
    href: "mailto:hello@example.com",
    color: "from-violet-500 to-indigo-500",
    bg: "bg-gradient-to-br from-violet-50 to-indigo-50",
    border: "border-violet-100 hover:border-violet-300",
    iconBg: "bg-gradient-to-br from-violet-500 to-indigo-500 text-white",
    shadow: "hover:shadow-violet-200/60",
  },
];

export default function SocialSection() {
  return (
    <section id="social" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Stay Connected
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Find Me Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Whether you want to collaborate, follow my work, or just say hi — I'm easy to reach.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group flex items-start gap-5 p-6 rounded-3xl ${social.bg} border ${social.border} hover:shadow-xl ${social.shadow} transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl ${social.iconBg} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-foreground mb-0.5">{social.platform}</div>
                  <div className="text-sm font-medium text-primary truncate mb-2">{social.handle}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{social.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
