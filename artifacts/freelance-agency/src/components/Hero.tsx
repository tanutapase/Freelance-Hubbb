import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-border text-sm font-medium mb-6 text-primary"
            >
              <Sparkles size={16} />
              <span>Available for new projects</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Affordable Modern Websites for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Businesses & Creators</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Custom responsive websites with modern UI, Firebase integration, smooth animations, and professional design crafted to convert visitors into clients.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] flex items-center justify-center gap-2 group"
              >
                Order Website
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-white text-foreground border border-border rounded-full font-semibold text-lg hover:bg-gray-50 transition-all text-center"
              >
                View Projects
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative perspective-1000"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-gradient-to-tr from-gray-100 to-white rounded-3xl border border-border shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              {/* Browser Header */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-white/80 backdrop-blur-sm border-b border-border flex items-center px-4 gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 h-6 flex-1 max-w-sm bg-gray-100 rounded-md border border-gray-200" />
              </div>
              
              {/* Mockup Content */}
              <div className="absolute inset-0 pt-12 p-6 flex flex-col gap-4">
                <div className="w-1/3 h-8 bg-gray-200 rounded-lg animate-pulse" />
                <div className="flex-1 flex gap-4">
                  <div className="flex-1 bg-primary/10 rounded-2xl border border-primary/20 p-4 flex flex-col gap-3">
                    <div className="w-full h-1/2 bg-white rounded-xl shadow-sm" />
                    <div className="w-3/4 h-4 bg-primary/30 rounded-full" />
                    <div className="w-1/2 h-4 bg-primary/30 rounded-full" />
                  </div>
                  <div className="w-1/3 bg-gray-100 rounded-2xl border border-gray-200 flex flex-col gap-3 p-4">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-auto" />
                    <div className="w-full h-2 bg-gray-200 rounded-full" />
                    <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
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
