import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  User,
  Zap,
  Calendar,
  Database,
  MessageCircle,
  ShoppingBag,
  Palette,
  RefreshCw,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional, conversion-optimised websites for businesses of every size — fast, modern, and built to impress clients.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "hover:border-blue-200",
    glow: "hover:shadow-blue-100/80",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Stores",
    description: "Beautiful online stores with product listings, cart, payments, and Firebase backend — ready to sell from day one.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    border: "hover:border-violet-200",
    glow: "hover:shadow-violet-100/80",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Stunning personal portfolios that showcase your work, personality, and skills in the most captivating way.",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-50",
    border: "hover:border-pink-200",
    glow: "hover:shadow-pink-100/80",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "High-converting landing pages with compelling copy, smooth animations, and irresistible calls-to-action.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    border: "hover:border-amber-200",
    glow: "hover:shadow-amber-100/80",
  },
  {
    icon: Database,
    title: "Firebase Backend",
    description: "Real-time databases, authentication, cloud functions, and hosting — all powered by Google Firebase.",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-200",
    glow: "hover:shadow-orange-100/80",
  },
  {
    icon: Palette,
    title: "Custom UI/UX Design",
    description: "Pixel-perfect custom interfaces designed to delight users, improve engagement, and reflect your brand identity.",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
    border: "hover:border-rose-200",
    glow: "hover:shadow-rose-100/80",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description: "Seamless online booking integrations so your clients can schedule appointments 24/7 without any friction.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-200",
    glow: "hover:shadow-emerald-100/80",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Connect your website directly to WhatsApp so clients can reach you instantly with one tap — zero friction.",
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    border: "hover:border-green-200",
    glow: "hover:shadow-green-100/80",
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    description: "Smart AI-powered chatbots integrated into your website to answer queries, qualify leads, and book appointments.",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    border: "hover:border-sky-200",
    glow: "hover:shadow-sky-100/80",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, premium experience that wins trust and drives conversions.",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-50",
    border: "hover:border-slate-200",
    glow: "hover:shadow-slate-100/80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900"
          >
            Services Built for Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-neutral-500 text-base leading-relaxed"
          >
            Every service is crafted to deliver measurable results — not just a pretty website.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group p-6 rounded-2xl bg-white border border-neutral-100 ${service.border} hover:shadow-lg ${service.glow} hover:-translate-y-0.5 transition-all duration-250`}
              >
                <div className={`inline-flex p-3 rounded-xl ${service.iconBg} ${service.iconColor} mb-4`}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-bold mb-2 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
