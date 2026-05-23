import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description:
      "We start with a free consultation — WhatsApp or call — to understand your vision, goals, audience, and requirements. No pressure, just clarity.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design Proposal",
    description:
      "Before writing a single line of code, I share a clean mockup or design direction for your approval so we're aligned from day one.",
    color: "bg-violet-50 text-violet-600",
    border: "border-violet-100",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Review",
    description:
      "Full development with live previews shared throughout. You give feedback at every stage — nothing ships without your sign-off.",
    color: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Your site goes live on fast, production-grade hosting. Free revisions included, and I'm always reachable on WhatsApp after launch.",
    color: "bg-green-50 text-green-600",
    border: "border-green-100",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            From Idea to Live Website
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-neutral-500 text-base leading-relaxed"
          >
            A simple, transparent process built around your comfort and confidence — not technical jargon.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-250"
              >
                <div className={`w-14 h-14 rounded-2xl ${step.color} border ${step.border} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="text-[10px] font-black text-neutral-300 tracking-widest mb-2">{step.number}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
