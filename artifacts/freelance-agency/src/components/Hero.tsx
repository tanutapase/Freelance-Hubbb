import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Star, TrendingUp, Zap } from "lucide-react";

const floatAnim = (delay = 0, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 4 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay },
});

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-[130px] translate-x-1/4 -translate-y-1/4 opacity-70" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold mb-7 text-neutral-600 tracking-wide"
            >
              <Sparkles size={12} className="text-blue-500" />
              <span>Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-neutral-900 leading-[1.06] mb-5"
            >
              Premium Websites
              <br />
              for Modern{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base md:text-lg text-neutral-500 mb-5 leading-relaxed"
            >
              Custom responsive websites with smooth animations, Firebase backend, and professional design — built to convert visitors into paying customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-green-50 border border-green-200 rounded-full mb-7"
            >
              <ShieldCheck size={14} className="text-green-600 shrink-0" />
              <span className="text-sm font-semibold text-green-800">
                Pay only if you love the final result.
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 text-white rounded-full font-bold text-sm hover:bg-neutral-700 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
              >
                Order a Website
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-neutral-700 border border-neutral-200 rounded-full font-semibold text-sm hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 text-center"
              >
                View Work
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-5 mt-8"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-neutral-400">Trusted by 30+ clients in Mumbai & beyond</span>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            {/* Floating stat cards */}
            <motion.div
              {...floatAnim(0, 8)}
              style={{ willChange: "transform" }}
              className="absolute -left-6 top-8 z-20 bg-white rounded-2xl border border-neutral-100 shadow-xl px-4 py-3 flex items-center gap-3 hidden lg:flex"
            >
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <TrendingUp size={16} className="text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">50+ Projects</div>
                <div className="text-xs text-neutral-400">Successfully Delivered</div>
              </div>
            </motion.div>

            <motion.div
              {...floatAnim(0.8, 10)}
              style={{ willChange: "transform" }}
              className="absolute -right-4 top-1/3 z-20 bg-white rounded-2xl border border-neutral-100 shadow-xl px-4 py-3 hidden lg:flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                <Zap size={16} className="text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">2–5 Days</div>
                <div className="text-xs text-neutral-400">Average Delivery</div>
              </div>
            </motion.div>

            <motion.div
              {...floatAnim(1.4, 7)}
              style={{ willChange: "transform" }}
              className="absolute -left-4 bottom-12 z-20 bg-white rounded-2xl border border-neutral-100 shadow-xl px-4 py-3 hidden lg:flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
                <Star size={16} className="text-amber-500 fill-amber-500" />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900">5-Star Rated</div>
                <div className="text-xs text-neutral-400">30+ Happy Clients</div>
              </div>
            </motion.div>

            {/* Browser mockup */}
            <div className="relative w-full aspect-[4/3] bg-white rounded-3xl border border-neutral-150 shadow-[0_12px_60px_-10px_rgba(0,0,0,0.15)] overflow-hidden">
              {/* Browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-neutral-50 border-b border-neutral-100 flex items-center px-4 gap-2 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-2 flex-1 h-5 max-w-[180px] bg-neutral-100 rounded-md border border-neutral-200 flex items-center px-2 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <div className="h-1.5 flex-1 bg-neutral-200 rounded-full" />
                </div>
              </div>

              {/* Dashboard mockup content */}
              <div className="absolute inset-0 pt-10 flex">
                {/* Sidebar */}
                <div className="w-14 h-full bg-neutral-900 flex flex-col items-center py-4 gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/20" />
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-6 h-6 rounded-md ${i === 0 ? "bg-blue-500" : "bg-white/10"}`} />
                  ))}
                </div>
                {/* Main content */}
                <div className="flex-1 bg-neutral-50 p-4 flex flex-col gap-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-28 bg-neutral-200 rounded-full" />
                    <div className="h-7 w-16 bg-neutral-900 rounded-full" />
                  </div>
                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {["bg-blue-50 border-blue-100", "bg-green-50 border-green-100", "bg-amber-50 border-amber-100"].map((cls, i) => (
                      <div key={i} className={`${cls} border rounded-xl p-2.5`}>
                        <div className="h-2.5 w-12 bg-current opacity-20 rounded-full mb-1.5" />
                        <div className="h-4 w-8 bg-current opacity-30 rounded-full" />
                      </div>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div className="flex-1 bg-white rounded-xl border border-neutral-100 p-3 flex flex-col gap-2">
                    <div className="h-2.5 w-20 bg-neutral-200 rounded-full" />
                    <div className="flex-1 flex items-end gap-1.5 pt-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 10 ? "#3b82f6" : i % 3 === 0 ? "#e2e8f0" : "#f1f5f9",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Table rows */}
                  <div className="bg-white rounded-xl border border-neutral-100 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3 px-3 py-2 border-b border-neutral-50 last:border-0">
                        <div className="w-5 h-5 rounded-full bg-neutral-100" />
                        <div className="flex-1 h-2 bg-neutral-100 rounded-full" />
                        <div className="w-10 h-2 bg-blue-100 rounded-full" />
                        <div className="w-8 h-5 bg-green-100 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
