import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Code, Layout, Palette, Server, Smartphone, Terminal, Database } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code, color: "text-blue-500" },
  { name: "UI/UX Design", icon: Palette, color: "text-purple-500" },
  { name: "Tailwind CSS", icon: Layout, color: "text-sky-400" },
  { name: "Firebase", icon: Database, color: "text-orange-500" },
  { name: "Responsive", icon: Smartphone, color: "text-green-500" },
  { name: "Full Stack", icon: Server, color: "text-indigo-500" },
];

function Counter({ end, label, suffix = "+" }: { end: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * end));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="text-center p-6 bg-white rounded-3xl border border-border shadow-sm">
      <div className="text-4xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Crafting Digital Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            I'm a passionate web developer focused on creating beautiful, high-performance websites that help businesses grow. With an eye for design and clean code, I build solutions that stand out.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Counter end={50} label="Projects Completed" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Counter end={30} label="Happy Clients" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Counter end={5} label="Avg. Delivery Days" suffix=" Days" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className={`p-4 rounded-xl bg-white shadow-sm ${skill.color}`}>
                  <Icon size={24} />
                </div>
                <span className="font-semibold text-sm text-center">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
