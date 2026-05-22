import React from "react";
import { motion } from "framer-motion";
import { Globe, User, Zap, Calendar, Database, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional, conversion-optimized websites for businesses of every size — fast, modern, and built to impress.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "hover:border-blue-200",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Stunning personal portfolios that showcase your work, personality, and skills in the most captivating way.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    border: "hover:border-violet-200",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "High-converting landing pages with compelling copy, smooth animations, and irresistible calls-to-action.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    border: "hover:border-amber-200",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description: "Seamless online booking integrations so your clients can schedule appointments 24/7 without friction.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-200",
  },
  {
    icon: Database,
    title: "Firebase Integration",
    description: "Real-time databases, authentication, cloud functions, and hosting — all powered by Google Firebase.",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-200",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Connect your website directly to WhatsApp so clients can reach you instantly with one tap.",
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    border: "hover:border-green-200",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className={`group p-7 rounded-2xl bg-white border border-neutral-100 ${service.border} hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-250`}
              >
                <div className={`inline-flex p-3 rounded-xl ${service.iconBg} ${service.iconColor} mb-5`}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold mb-2.5 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
