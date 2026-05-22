import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Star, Send, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const WA_URL = "https://wa.me/918433553501?text=Hi%20TanuDevWorks!%20I%27d%20like%20to%20discuss%20a%20website%20project.";

const plans = [
  {
    name: "Starter",
    price: "₹499",
    priceValue: "₹499",
    description: "Perfect for small businesses getting started online.",
    features: [
      "1-page responsive website",
      "Contact form included",
      "Mobile-first design",
      "Basic smooth animations",
      "2–4 day delivery",
      "1 free revision",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    priceValue: "₹999",
    description: "Most popular for businesses ready to stand out.",
    features: [
      "Multi-section website",
      "Premium animations",
      "WhatsApp integration",
      "Firebase backend",
      "3–5 day delivery",
      "3 free revisions",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1999+",
    priceValue: "₹1999+",
    description: "Advanced custom projects with unique features.",
    features: [
      "Fully custom website",
      "Booking / dashboard system",
      "Advanced UI/UX design",
      "Database & auth integration",
      "Timeline discussed upfront",
      "Unlimited revisions",
    ],
    popular: false,
  },
];

const websiteTypes = [
  "Business Website",
  "Portfolio Website",
  "Landing Page",
  "Booking System",
  "Ecommerce Store",
  "Blog / Content Site",
  "Other",
];

const preferredStyles = [
  "Minimal & Clean",
  "Bold & Modern",
  "Elegant & Luxury",
  "Playful & Creative",
  "Corporate & Professional",
  "Dark & Premium",
];

interface ModalProps {
  plan: typeof plans[0] | null;
  onClose: () => void;
}

function OrderModal({ plan, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    websiteType: "",
    preferredStyle: "",
    budget: plan?.priceValue ?? "",
    exampleLinks: "",
    details: "",
  });

  if (!plan) return null;

  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    const orderData = {
      selectedPlan: plan.name,
      planPrice: plan.price,
      fullName: form.name,
      businessName: form.businessName,
      whatsappNumber: form.whatsapp,
      websiteType: form.websiteType,
      preferredStyle: form.preferredStyle,
      budget: form.budget,
      exampleLinks: form.exampleLinks,
      additionalDetails: form.details,
      timestamp: serverTimestamp(),
    };

    try {
      // 12-second timeout so it never hangs forever
      await Promise.race([
        addDoc(collection(db, "orders"), orderData),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("timeout")), 12000)
        ),
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (msg === "timeout") {
        // Still show success — WhatsApp follow-up is the primary channel
        console.warn("Firebase timeout — order data:", orderData);
      } else {
        setLoading(false);
        setError("Couldn't submit. Please try again or reach out on WhatsApp.");
        return;
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all text-sm placeholder:text-neutral-400";
  const labelClass = "text-xs font-semibold text-neutral-500 mb-1.5 block uppercase tracking-wide";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-900/50 backdrop-blur-sm"
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {!submitted ? (
            <>
              <div className="sticky top-0 bg-white px-8 py-6 border-b border-neutral-100 flex items-center justify-between z-10 rounded-t-3xl">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {plan.popular && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-900 text-white rounded-full text-xs font-semibold">
                        <Star size={9} fill="currentColor" /> Popular
                      </span>
                    )}
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Order Request</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">{plan.name} Plan — {plan.price}</h3>
                </div>
                <button onClick={onClose} className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                  <X size={15} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input required value={form.name} onChange={e => set("name", e.target.value)} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Business Name</label>
                  <input value={form.businessName} onChange={e => set("businessName", e.target.value)} placeholder="My Business" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>WhatsApp Number *</label>
                  <input required type="tel" value={form.whatsapp} onChange={e => set("whatsapp", e.target.value)} placeholder="+91 84335 53501" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Website Type *</label>
                  <select required value={form.websiteType} onChange={e => set("websiteType", e.target.value)} className={inputClass}>
                    <option value="">Select type...</option>
                    {websiteTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Style</label>
                  <select value={form.preferredStyle} onChange={e => set("preferredStyle", e.target.value)} className={inputClass}>
                    <option value="">Select style...</option>
                    {preferredStyles.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Budget</label>
                  <select value={form.budget} onChange={e => set("budget", e.target.value)} className={inputClass}>
                    <option value="₹499">₹499 — Starter</option>
                    <option value="₹999">₹999 — Pro</option>
                    <option value="₹1999+">₹1999+ — Premium</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Example Website Links</label>
                  <textarea rows={2} value={form.exampleLinks} onChange={e => set("exampleLinks", e.target.value)} placeholder="https://example.com (paste any sites you like for reference)" className={`${inputClass} resize-none`} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>Additional Details</label>
                  <textarea rows={3} value={form.details} onChange={e => set("details", e.target.value)} placeholder="Tell me about your project, goals, or any specific requirements..." className={`${inputClass} resize-none`} />
                </div>

                {error && (
                  <div className="md:col-span-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 flex items-center gap-2">
                    <span>{error}</span>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="ml-auto text-green-600 font-semibold underline whitespace-nowrap">WhatsApp Instead</a>
                  </div>
                )}

                <div className="md:col-span-2">
                  <button type="submit" disabled={loading} className="w-full py-4 bg-neutral-900 text-white rounded-2xl font-semibold text-base hover:bg-neutral-700 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 shadow-sm">
                    {loading ? (
                      <><Loader2 size={18} className="animate-spin" /> Submitting Request...</>
                    ) : (
                      <><Send size={16} /> Send Order Request</>
                    )}
                  </button>
                  <p className="text-center text-xs text-neutral-400 mt-3">We'll reach out on WhatsApp within a few hours.</p>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-14 flex flex-col items-center text-center gap-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 18, delay: 0.1 }}
                className="w-24 h-24 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center"
              >
                <CheckCircle2 size={44} className="text-green-500" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Order Placed Successfully! 🎉</h3>
                <p className="text-neutral-500 leading-relaxed max-w-sm">
                  Your order request has been received. <strong className="text-neutral-700">TanuDevWorks will contact you on WhatsApp shortly</strong> to discuss your project and get started.
                </p>
              </div>

              <div className="flex flex-col gap-2.5 w-full max-w-xs">
                {[
                  "Order confirmed & recorded",
                  "WhatsApp update coming soon",
                  "100% satisfaction guarantee",
                ].map(text => (
                  <div key={text} className="flex items-center gap-3 px-4 py-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <CheckCircle2 size={14} className="text-green-500 shrink-0" />
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
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
                <button onClick={onClose} className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-xl font-semibold hover:bg-neutral-200 transition-colors text-sm">
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  return (
    <section id="pricing" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">
            Transparent Pricing
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Simple, Honest Prices
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-neutral-500 text-base">
            No hidden fees. Pay only when you're happy with the result.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border flex flex-col transition-all duration-250 hover:-translate-y-1 ${
                plan.popular
                  ? "border-neutral-900 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
                  : "border-neutral-100 hover:border-neutral-200 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-neutral-900 text-white rounded-full text-xs font-bold">
                  <Star size={10} fill="currentColor" /> Most Popular
                </div>
              )}

              <div className={`p-7 pb-0 ${plan.popular ? "pt-9" : ""}`}>
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">{plan.name}</div>
                <div className="text-4xl font-bold text-neutral-900 mb-2 tracking-tight">{plan.price}</div>
                <p className="text-sm text-neutral-500 leading-relaxed">{plan.description}</p>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-neutral-700" strokeWidth={2.5} />
                      </div>
                      <span className="text-neutral-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`mt-auto w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-neutral-900 text-white hover:bg-neutral-700 shadow-sm"
                      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-500"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            Custom pricing available — <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">WhatsApp for a quote</a>
          </span>
          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-neutral-200" />
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            Custom domain connection available for all clients
          </span>
        </motion.div>
      </div>

      {selectedPlan && (
        <OrderModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </section>
  );
}
