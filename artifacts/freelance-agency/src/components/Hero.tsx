import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neutral-50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold mb-8 text-neutral-600 tracking-wide"
            >
              <Sparkles size={12} className="text-blue-500" />
              <span>Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-neutral-900 leading-[1.08] mb-6"
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-neutral-500 mb-6 leading-relaxed"
            >
              Custom responsive websites with smooth animations, Firebase integration, and professional design — crafted to convert visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-green-50 border border-green-200 rounded-full mb-8"
            >
              <ShieldCheck size={15} className="text-green-600 shrink-0" />
              <span className="text-sm font-semibold text-green-800">
                Pay only if you like the final website.
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
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white rounded-full font-semibold text-base hover:bg-neutral-700 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
              >
                Order a Website
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-700 border border-neutral-200 rounded-full font-semibold text-base hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 text-center"
              >
                View Work
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative w-full aspect-[4/3] bg-white rounded-3xl border border-neutral-100 shadow-[0_8px_60px_-10px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-11 bg-neutral-50 border-b border-neutral-100 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-3 h-5 w-40 bg-neutral-100 rounded-md border border-neutral-200" />
              </div>

              <div className="absolute inset-0 pt-11 p-5 flex flex-col gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="h-6 w-2/3 bg-neutral-100 rounded-lg" />
                    <div className="h-4 w-full bg-neutral-50 rounded-md" />
                    <div className="h-4 w-4/5 bg-neutral-50 rounded-md" />
                    <div className="mt-2 flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100/60 p-4 flex flex-col gap-3">
                      <div className="w-full h-24 bg-white rounded-xl shadow-sm" />
                      <div className="w-3/4 h-3 bg-blue-200/60 rounded-full" />
                      <div className="w-1/2 h-3 bg-blue-200/40 rounded-full" />
                      <div className="w-24 h-7 bg-neutral-900 rounded-full mt-auto" />
                    </div>
                  </div>
                  <div className="w-1/3 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col gap-3 p-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-200" />
                    <div className="w-full h-2.5 bg-neutral-200 rounded-full" />
                    <div className="w-full h-2.5 bg-neutral-150 rounded-full" />
                    <div className="w-2/3 h-2.5 bg-neutral-100 rounded-full" />
                    <div className="mt-auto w-full h-7 bg-neutral-900/10 rounded-xl" />
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
