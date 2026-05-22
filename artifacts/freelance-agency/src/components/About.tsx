import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Layout, Palette, Database, Smartphone, Server } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "UI/UX Design", icon: Palette, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Tailwind CSS", icon: Layout, color: "text-sky-500", bg: "bg-sky-50" },
  { name: "Firebase", icon: Database, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Responsive", icon: Smartphone, color: "text-green-500", bg: "bg-green-50" },
  { name: "Full Stack", icon: Server, color: "text-neutral-600", bg: "bg-neutral-100" },
];

function Counter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1800;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
      <div className="text-4xl font-bold text-neutral-900 mb-1.5 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-5 text-neutral-900"
          >
            Crafting Digital Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-neutral-500 text-lg leading-relaxed"
          >
            I'm a passionate web developer focused on creating beautiful, high-performance websites that help businesses grow. Clean code, sharp design, and measurable results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {[
            { end: 50, label: "Projects Completed" },
            { end: 30, label: "Happy Clients" },
            { end: 5, label: "Avg. Delivery Days", suffix: " Days" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Counter end={item.end} label={item.label} suffix={item.suffix ?? "+"} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`p-3 rounded-xl ${skill.bg} ${skill.color}`}>
                  <Icon size={20} />
                </div>
                <span className="font-semibold text-xs text-center text-neutral-700 leading-tight">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
