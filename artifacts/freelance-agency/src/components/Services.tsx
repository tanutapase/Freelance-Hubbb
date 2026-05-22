import React from "react";
import { motion } from "framer-motion";
import { Globe, User, Zap, Calendar, Database, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional, conversion-optimized websites for businesses of every size — fast, modern, and built to impress.",
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-500",
    border: "border-blue-100 hover:border-blue-300",
    glow: "hover:shadow-blue-200/60",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Stunning personal portfolios that showcase your work, personality, and skills in the most captivating way.",
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
    border: "border-purple-100 hover:border-purple-300",
    glow: "hover:shadow-purple-200/60",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "High-converting landing pages with compelling copy, smooth animations, and irresistible calls-to-action.",
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
    border: "border-amber-100 hover:border-amber-300",
    glow: "hover:shadow-amber-200/60",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description: "Seamless online booking integrations so your clients can schedule appointments 24/7 without friction.",
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-500",
    border: "border-emerald-100 hover:border-emerald-300",
    glow: "hover:shadow-emerald-200/60",
  },
  {
    icon: Database,
    title: "Firebase Integration",
    description: "Real-time databases, authentication, cloud functions, and hosting — all powered by Google Firebase.",
    color: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-500",
    border: "border-orange-100 hover:border-orange-300",
    glow: "hover:shadow-orange-200/60",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Connect your website directly to WhatsApp so clients can reach you instantly with one tap.",
    color: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500",
    border: "border-green-100 hover:border-green-300",
    glow: "hover:shadow-green-200/60",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Services Built for Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Every service is crafted to deliver measurable results — not just a pretty website.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.color} border ${service.border} transition-all duration-300 hover:shadow-xl ${service.glow} hover:-translate-y-1 overflow-hidden cursor-default`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/30 -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div className={`inline-flex p-3 rounded-2xl bg-white shadow-sm mb-5 ${service.iconColor}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
