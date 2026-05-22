import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Artisan Cafe Website",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    color: "from-amber-200 to-orange-100",
    mockupUI: (
      <div className="w-full h-full p-4 flex flex-col gap-3">
        <div className="w-1/2 h-8 bg-amber-800/20 rounded-lg" />
        <div className="w-full h-32 bg-white/50 rounded-xl mt-4" />
        <div className="flex gap-2">
          <div className="w-1/3 h-20 bg-amber-700/10 rounded-lg" />
          <div className="w-1/3 h-20 bg-amber-700/10 rounded-lg" />
          <div className="w-1/3 h-20 bg-amber-700/10 rounded-lg" />
        </div>
      </div>
    )
  },
  {
    title: "Fitness Gym Platform",
    tags: ["React", "Firebase", "Booking"],
    color: "from-slate-800 to-gray-600",
    mockupUI: (
      <div className="w-full h-full p-4 flex flex-col gap-3">
        <div className="w-1/3 h-6 bg-white/20 rounded-lg ml-auto" />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-500/50" />
          </div>
        </div>
        <div className="w-full h-12 bg-white/10 rounded-lg" />
      </div>
    )
  },
  {
    title: "Creative Portfolio",
    tags: ["React", "CSS Animations", "UI/UX"],
    color: "from-pink-300 to-purple-200",
    mockupUI: (
      <div className="w-full h-full p-6 flex flex-col items-center justify-center gap-4">
        <div className="w-20 h-20 rounded-full bg-white shadow-lg" />
        <div className="w-1/2 h-6 bg-white/60 rounded-full" />
        <div className="w-3/4 h-4 bg-white/40 rounded-full" />
      </div>
    )
  },
  {
    title: "Tech Startup Landing",
    tags: ["Tailwind", "Responsive", "SEO"],
    color: "from-blue-400 to-indigo-300",
    mockupUI: (
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-1/2 bg-white/20 rounded-b-3xl p-4 flex flex-col gap-2">
          <div className="w-1/2 h-6 bg-white/40 rounded-lg" />
          <div className="w-full h-4 bg-white/30 rounded-lg mt-auto" />
        </div>
        <div className="flex-1 p-4 grid grid-cols-2 gap-3">
          <div className="bg-white/40 rounded-xl" />
          <div className="bg-white/40 rounded-xl" />
        </div>
      </div>
    )
  },
  {
    title: "Medical Booking System",
    tags: ["React", "Dashboard", "Database"],
    color: "from-emerald-200 to-teal-100",
    mockupUI: (
      <div className="w-full h-full p-4 flex gap-4">
        <div className="w-1/4 h-full bg-white/40 rounded-lg" />
        <div className="flex-1 flex flex-col gap-3">
          <div className="w-full h-12 bg-white/50 rounded-lg" />
          <div className="flex-1 bg-white/30 rounded-lg p-2 flex flex-col gap-2">
             <div className="w-full h-8 bg-white/40 rounded-md" />
             <div className="w-full h-8 bg-white/40 rounded-md" />
             <div className="w-full h-8 bg-white/40 rounded-md" />
          </div>
        </div>
      </div>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              A showcase of recent premium websites built for ambitious brands and individuals.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
            >
              <div className={`relative h-60 w-full bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Browser Header */}
                  <div className="h-8 bg-black/10 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                  </div>
                  {project.mockupUI}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">View Details</a>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
