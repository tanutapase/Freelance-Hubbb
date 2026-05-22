import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    desc: "Full-featured analytics dashboard with real-time charts, user metrics, and Firebase backend.",
    tags: ["React", "Firebase", "Recharts"],
    color: "from-slate-900 to-blue-950",
    accent: "bg-blue-500",
    mockup: (
      <div className="w-full h-full flex">
        <div className="w-12 h-full bg-slate-800 flex flex-col items-center py-3 gap-2.5">
          <div className="w-6 h-6 rounded-md bg-blue-500" />
          {[...Array(5)].map((_, i) => <div key={i} className={`w-5 h-5 rounded-md ${i === 1 ? "bg-white/20" : "bg-white/8"}`} />)}
        </div>
        <div className="flex-1 bg-slate-900 p-3 flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-1.5">
            {["bg-blue-500/20 border-blue-500/30", "bg-green-500/20 border-green-500/30", "bg-violet-500/20 border-violet-500/30"].map((c, i) => (
              <div key={i} className={`${c} border rounded-lg p-2`}>
                <div className="h-1.5 w-8 bg-white/20 rounded-full mb-1" />
                <div className="h-3 w-6 bg-white/30 rounded-full" />
              </div>
            ))}
          </div>
          <div className="flex-1 bg-slate-800 rounded-lg p-2 flex flex-col gap-1">
            <div className="h-2 w-16 bg-white/20 rounded-full" />
            <div className="flex-1 flex items-end gap-0.5 pt-1">
              {[35, 60, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 9 ? "#3b82f6" : "rgba(255,255,255,0.12)" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Dental Clinic Website",
    desc: "Clean medical website with online appointment booking, services, and doctor profiles.",
    tags: ["Next.js", "Tailwind", "Booking"],
    color: "from-sky-50 to-blue-100",
    accent: "bg-sky-500",
    mockup: (
      <div className="w-full h-full flex flex-col">
        <div className="w-full bg-sky-600 p-3 flex items-center justify-between">
          <div className="h-3 w-16 bg-white/70 rounded-full" />
          <div className="h-6 w-14 bg-white rounded-full" />
        </div>
        <div className="flex-1 bg-white p-3 flex flex-col gap-2">
          <div className="h-3 w-3/4 bg-sky-900/20 rounded-full" />
          <div className="h-2 w-1/2 bg-sky-900/10 rounded-full" />
          <div className="flex gap-2 mt-1">
            {["bg-sky-50 border-sky-100", "bg-sky-50 border-sky-100", "bg-sky-50 border-sky-100"].map((c, i) => (
              <div key={i} className={`flex-1 ${c} border rounded-lg p-1.5 flex flex-col gap-1`}>
                <div className="w-5 h-5 rounded-full bg-sky-200 mx-auto" />
                <div className="h-1.5 bg-sky-200/60 rounded-full" />
              </div>
            ))}
          </div>
          <div className="mt-auto flex gap-2">
            <div className="flex-1 h-7 bg-sky-600 rounded-lg" />
            <div className="flex-1 h-7 border border-sky-200 rounded-lg" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Fashion Ecommerce Store",
    desc: "Modern online fashion store with product listings, filters, cart, and checkout flow.",
    tags: ["React", "Firebase", "Ecommerce"],
    color: "from-rose-50 to-pink-100",
    accent: "bg-rose-500",
    mockup: (
      <div className="w-full h-full flex flex-col">
        <div className="h-8 bg-neutral-900 flex items-center justify-between px-3">
          <div className="h-2.5 w-12 bg-white/60 rounded-full" />
          <div className="flex gap-2">
            <div className="h-2 w-8 bg-white/30 rounded-full" />
            <div className="h-2 w-6 bg-white/30 rounded-full" />
          </div>
        </div>
        <div className="flex-1 bg-white p-2 grid grid-cols-2 gap-2">
          {[
            "bg-rose-50", "bg-pink-50", "bg-fuchsia-50", "bg-purple-50"
          ].map((c, i) => (
            <div key={i} className={`${c} rounded-lg overflow-hidden flex flex-col`}>
              <div className="flex-1 min-h-[40px]" />
              <div className="p-1.5">
                <div className="h-1.5 w-3/4 bg-neutral-300 rounded-full mb-1" />
                <div className="h-2 w-1/2 bg-neutral-400 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Creative Portfolio",
    desc: "Minimal personal portfolio with animated sections, project gallery, and contact form.",
    tags: ["React", "Framer Motion", "UI/UX"],
    color: "from-violet-100 to-purple-50",
    accent: "bg-violet-500",
    mockup: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 shadow-lg" />
        <div className="text-center">
          <div className="h-3 w-24 bg-violet-900/30 rounded-full mx-auto mb-1.5" />
          <div className="h-2 w-16 bg-violet-900/15 rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 w-full mt-1">
          {["bg-violet-100", "bg-pink-100", "bg-blue-100"].map((c, i) => (
            <div key={i} className={`${c} rounded-lg aspect-square`} />
          ))}
        </div>
        <div className="h-7 w-24 bg-violet-600 rounded-full" />
      </div>
    ),
  },
  {
    title: "Restaurant Booking System",
    desc: "Elegant restaurant website with online table booking, menu showcase, and gallery.",
    tags: ["React", "Firebase", "Booking"],
    color: "from-amber-50 to-orange-100",
    accent: "bg-amber-500",
    mockup: (
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 bg-gradient-to-b from-amber-900 to-amber-800 p-3 flex flex-col justify-end gap-2">
          <div className="h-3 w-3/4 bg-white/70 rounded-full" />
          <div className="h-2 w-1/2 bg-white/40 rounded-full" />
          <div className="h-7 w-24 bg-amber-400 rounded-full" />
        </div>
        <div className="bg-white p-2 flex gap-2">
          {["bg-amber-50", "bg-orange-50", "bg-yellow-50"].map((c, i) => (
            <div key={i} className={`flex-1 ${c} rounded-lg p-1.5`}>
              <div className="h-8 bg-amber-200/60 rounded-md mb-1" />
              <div className="h-1.5 bg-amber-300/40 rounded-full" />
            </div>
          ))}
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
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
              Portfolio
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold text-neutral-900">
              Selected Work
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-neutral-500 max-w-sm text-sm leading-relaxed">
            Premium websites built for ambitious brands, clinics, restaurants, and creators.
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
              className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:border-neutral-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col"
            >
              <div className={`relative h-52 w-full bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-3 rounded-xl border border-white/20 shadow-inner overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
                  <div className="h-6 bg-black/10 flex items-center px-2.5 gap-1.5 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="flex-1 ml-1 h-1.5 bg-white/20 rounded-full max-w-[100px]" />
                  </div>
                  <div className="w-full h-[calc(100%-24px)]">{project.mockup}</div>
                </div>

                <div className="absolute inset-0 bg-neutral-900/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px]">
                  <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} className="w-11 h-11 rounded-full bg-white text-neutral-900 flex items-center justify-center shadow-lg">
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-neutral-900">{project.title}</h3>
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${project.accent}`} />
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
