import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  Clock,
  Shield,
  Zap,
  X,
} from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const WA_URL =
  "https://wa.me/918433553501?text=Hi%20TanuDevWorks!%20I%20just%20submitted%20a%20consultation%20request.%20Looking%20forward%20to%20connecting!";

const WEBSITE_TYPES = [
  "Portfolio Website",
  "Ecommerce Website",
  "Business Website",
  "Landing Page",
  "Website Redesign",
  "Custom Project",
];

const BUDGETS = ["₹499 – Starter", "₹999 – Pro", "₹1999+ – Premium", "Let's discuss"];

const PERKS = [
  { icon: Clock, label: "Response within 2 hours" },
  { icon: Shield, label: "100% free, no obligation" },
  { icon: Zap, label: "Project kickoff same day" },
  { icon: MessageCircle, label: "WhatsApp follow-up included" },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all";
const labelClass = "text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1.5 block";

export default function Consultation() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    websiteType: "",
    budget: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    const data = {
      fullName: form.name,
      businessName: form.business,
      phoneNumber: form.phone,
      emailAddress: form.email,
      websiteType: form.websiteType,
      budgetRange: form.budget,
      projectDetails: form.details,
      timestamp: serverTimestamp(),
    };

    try {
      await Promise.race([
        addDoc(collection(db, "consultations"), data),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("timeout")), 12000)
        ),
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (msg !== "timeout") {
        setLoading(false);
        setError("Could not submit. Please try WhatsApp directly.");
        return;
      }
      // timeout — still show success
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-b-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4"
          >
            <Calendar size={12} />
            Free Consultation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
          >
            Book a Free Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-neutral-500 text-base leading-relaxed"
          >
            Let's discuss your website, brand, startup, or digital idea professionally.
            <br className="hidden md:block" /> No pressure — just clarity on what's possible.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Perks */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-5">
                What you get
              </p>
              <div className="flex flex-col gap-3">
                {PERKS.map((perk, i) => {
                  const Icon = perk.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                        <Icon size={16} strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium text-neutral-700">{perk.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* WhatsApp CTA card */}
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-5 bg-green-50 border border-green-100 rounded-2xl hover:border-green-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="font-bold text-sm text-green-800">Prefer WhatsApp?</div>
                <div className="text-xs text-green-600 mt-0.5">Message directly: +91 84335 53501</div>
              </div>
            </motion.a>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-neutral-100 shadow-[0_4px_40px_rgba(0,0,0,0.07)] overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="p-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Tanushri Shah"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Business / Brand Name</label>
                      <input
                        value={form.business}
                        onChange={(e) => set("business", e.target.value)}
                        placeholder="My Brand"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="hello@mybrand.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Website Type Needed</label>
                      <select
                        value={form.websiteType}
                        onChange={(e) => set("websiteType", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select type...</option>
                        {WEBSITE_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => set("budget", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select budget...</option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Project Details</label>
                      <textarea
                        rows={3}
                        value={form.details}
                        onChange={(e) => set("details", e.target.value)}
                        placeholder="Tell me about your project, goals, timeline, or anything useful..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && (
                      <div className="sm:col-span-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-center justify-between gap-3">
                        <span>{error}</span>
                        <a
                          href={WA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 font-semibold underline whitespace-nowrap"
                        >
                          WhatsApp Instead
                        </a>
                      </div>
                    )}

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-neutral-900 text-white rounded-2xl font-semibold text-[15px] hover:bg-neutral-700 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 shadow-sm"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Sparkles size={16} />
                            Book Free Consultation
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-neutral-400 mt-3">
                        You'll hear back on WhatsApp or email within 2 hours.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 flex flex-col items-center text-center gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center"
                    >
                      <CheckCircle2 size={36} className="text-green-500" />
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        Consultation Request Submitted! 🎉
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                        Thank you for reaching out! TanuDevWorks will contact you on{" "}
                        <strong className="text-neutral-700">WhatsApp or email within 2 hours</strong> to schedule your free consultation.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 w-full max-w-xs">
                      {[
                        "Consultation request received",
                        "WhatsApp follow-up coming soon",
                        "No obligation, 100% free",
                      ].map((text) => (
                        <div
                          key={text}
                          className="flex items-center gap-3 px-4 py-2.5 bg-neutral-50 rounded-xl border border-neutral-100"
                        >
                          <CheckCircle2 size={13} className="text-green-500 shrink-0" />
                          <span className="text-sm text-neutral-600">{text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors text-sm"
                      >
                        <MessageCircle size={14} />
                        Chat on WhatsApp
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", business: "", phone: "", email: "", websiteType: "", budget: "", details: "" });
                        }}
                        className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-200 transition-colors text-sm"
                      >
                        Book Another
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
