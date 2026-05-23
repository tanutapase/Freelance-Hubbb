import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Restaurant Owner, Mumbai",
    avatar: "RM",
    avatarColor: "bg-amber-100 text-amber-700",
    review:
      "Tanu built our restaurant website in under 4 days — exactly how we imagined it. The online booking system works flawlessly and our clients absolutely love it. Best investment for my business.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Fashion Brand Founder",
    avatar: "PS",
    avatarColor: "bg-rose-100 text-rose-700",
    review:
      "Got a stunning ecommerce store that actually converts visitors into buyers. The design is clean, animations are smooth, and it works perfectly on mobile. Will 100% work with TanuDevWorks again.",
    rating: 5,
  },
  {
    name: "Arjun Kulkarni",
    role: "SaaS Startup Founder",
    avatar: "AK",
    avatarColor: "bg-blue-100 text-blue-700",
    review:
      "The dashboard UI she built for our platform is clean, fast, and exactly what our users needed. Firebase integration worked perfectly from day one. Highly professional and responsive throughout.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3"
          >
            Client Love
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-neutral-500 text-base"
          >
            Real words from real clients who trusted TanuDevWorks with their vision.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-100 p-7 flex flex-col gap-5 hover:border-neutral-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-250"
            >
              {/* Quote icon */}
              <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
                <Quote size={14} className="text-neutral-400" />
              </div>

              {/* Review text */}
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">"{t.review}"</p>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-neutral-50">
                <div className={`w-9 h-9 rounded-full ${t.avatarColor} flex items-center justify-center text-xs font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">{t.name}</div>
                  <div className="text-xs text-neutral-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
