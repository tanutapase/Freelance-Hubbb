import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Artisan Cafe Website",
    desc: "Warm, inviting site with online menu and booking system.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    color: "from-amber-100 to-orange-50",
    accent: "bg-amber-500",
    mockup: (
      <div className="w-full h-full p-4 flex flex-col gap-3">
        <div className="w-1/2 h-6 bg-amber-900/20 rounded-lg" />
        <div className="w-full flex-1 bg-white/60 rounded-xl mt-2" />
        <div className="flex gap-2">
          <div className="w-1/3 h-14 bg-amber-700/15 rounded-lg" />
          <div className="w-1/3 h-14 bg-amber-700/15 rounded-lg" />
          <div className="w-1/3 h-14 bg-amber-700/15 rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    title: "Fitness Gym Platform",
    desc: "Dark premium gym site with class booking and Firebase auth.",
    tags: ["React", "Firebase", "Booking"],
    color: "from-zinc-900 to-gray-800",
    accent: "bg-red-500",
    mockup: (
      <div className="w-full h-full p-4 flex flex-col gap-3">
        <div className="w-1/3 h-5 bg-white/20 rounded-lg ml-auto" />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-red-500/60 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-red-500/40" />
          </div>
        </div>
        <div className="w-full h-9 bg-white/10 rounded-lg" />
      </div>
    ),
  },
  {
    title: "Creative Portfolio",
    desc: "Minimal personal portfolio showcasing design and dev work.",
    tags: ["React", "CSS Animations", "UI/UX"],
    color: "from-violet-100 to-pink-50",
    accent: "bg-violet-500",
    mockup: (
      <div className="w-full h-full p-6 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white shadow-md" />
        <div className="w-1/2 h-5 bg-white/70 rounded-full" />
        <div className="w-3/4 h-3 bg-white/50 rounded-full" />
        <div className="w-1/2 h-3 bg-white/30 rounded-full" />
      </div>
    ),
  },
  {
    title: "Tech Startup Landing",
    desc: "High-converting landing page built for product launch.",
    tags: ["Tailwind", "Responsive", "SEO"],
    color: "from-blue-100 to-cyan-50",
    accent: "bg-blue-500",
    mockup: (
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[55%] bg-blue-500/20 rounded-b-2xl p-4 flex flex-col gap-2">
          <div className="w-1/2 h-5 bg-white/60 rounded" />
          <div className="w-full h-3 bg-white/40 rounded mt-auto" />
          <div className="w-24 h-7 bg-blue-500/70 rounded-full" />
        </div>
        <div className="flex-1 p-3 grid grid-cols-2 gap-2">
          <div className="bg-white/50 rounded-xl" />
          <div className="bg-white/50 rounded-xl" />
        </div>
      </div>
    ),
  },
  {
    title: "Medical Booking System",
    desc: "HIPAA-friendly doctor appointment system with dashboard.",
    tags: ["React", "Dashboard", "Database"],
    color: "from-emerald-50 to-teal-50",
    accent: "bg-emerald-500",
    mockup: (
      <div className="w-full h-full p-3 flex gap-3">
        <div className="w-1/4 h-full bg-white/60 rounded-xl" />
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full h-9 bg-white/70 rounded-lg" />
          <div className="flex-1 bg-white/40 rounded-lg p-2 flex flex-col gap-1.5">
            <div className="w-full h-7 bg-white/60 rounded-md" />
            <div className="w-full h-7 bg-white/60 rounded-md" />
            <div className="w-full h-7 bg-white/60 rounded-md" />
          </div>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-neutral-900"
            >
              Selected Work
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-neutral-500 max-w-sm text-sm leading-relaxed"
          >
            A showcase of recent websites built for ambitious brands and creators.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:border-neutral-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
            >
              <div className={`relative h-52 w-full bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-3.5 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-inner overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
                  <div className="h-7 bg-black/8 flex items-center px-3 gap-1.5 border-b border-white/20">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                  </div>
                  <div className="w-full h-[calc(100%-28px)]">
                    {project.mockup}
                  </div>
                </div>

                <div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-lg"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-neutral-900">{project.title}</h3>
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${project.accent}`} />
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-neutral-50 text-neutral-500 border border-neutral-100 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
