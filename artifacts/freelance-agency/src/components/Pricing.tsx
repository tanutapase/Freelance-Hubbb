import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Star, Send, CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹499",
    description: "Perfect for small businesses getting started online.",
    features: [
      "1 page website",
      "Mobile responsive",
      "Contact form",
      "Fast delivery",
      "2–4 day delivery",
    ],
    popular: false,
    accent: "border-border",
    btn: "bg-foreground text-background hover:bg-foreground/90",
  },
  {
    name: "Pro",
    price: "₹999",
    description: "Most popular for businesses ready to stand out.",
    features: [
      "Multi-section website",
      "Better animations",
      "WhatsApp integration",
      "Firebase integration",
      "3–5 day delivery",
    ],
    popular: true,
    accent: "border-primary",
    btn: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    name: "Custom",
    price: "₹1999+",
    description: "Advanced projects with custom features and systems.",
    features: [
      "Fully custom website",
      "Booking systems",
      "Advanced UI/UX",
      "Database integration",
      "Premium features",
    ],
    popular: false,
    accent: "border-border",
    btn: "bg-foreground text-background hover:bg-foreground/90",
  },
];

const websiteTypes = [
  "Business Website",
  "Portfolio Website",
  "Landing Page",
  "Booking System",
  "E-commerce",
  "Other",
];

interface ModalProps {
  plan: typeof plans[0] | null;
  onClose: () => void;
}

function OrderModal({ plan, onClose }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    websiteType: "",
    colors: "",
    budget: "",
    exampleLinks: "",
    details: "",
  });

  if (!plan) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          {!submitted ? (
            <>
              <div className="p-8 border-b border-border flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary font-semibold mb-1">Order Request</p>
                  <h3 className="text-2xl font-bold">{plan.name} Plan — {plan.price}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">Your Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="John Doe"
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">Business Name</label>
                  <input
                    value={form.businessName}
                    onChange={e => setForm(f => ({ ...f, businessName: e.target.value }))}
                    placeholder="My Business"
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">WhatsApp Number *</label>
                  <input
                    required
                    value={form.whatsapp}
                    onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                    placeholder="+91 98765 43210"
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">Website Type *</label>
                  <select
                    required
                    value={form.websiteType}
                    onChange={e => setForm(f => ({ ...f, websiteType: e.target.value }))}
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  >
                    <option value="">Select type...</option>
                    {websiteTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">Preferred Colors</label>
                  <input
                    value={form.colors}
                    onChange={e => setForm(f => ({ ...f, colors: e.target.value }))}
                    placeholder="e.g. Blue, White, Black"
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground">Budget</label>
                  <input
                    value={form.budget}
                    onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                    placeholder={plan.price}
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Example Website Links</label>
                  <textarea
                    rows={2}
                    value={form.exampleLinks}
                    onChange={e => setForm(f => ({ ...f, exampleLinks: e.target.value }))}
                    placeholder="https://example.com (paste any sites you like)"
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Extra Details</label>
                  <textarea
                    rows={3}
                    value={form.details}
                    onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                    placeholder="Tell me more about your project, goals, or any specific requirements..."
                    className="px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Order Request
                  </button>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 flex flex-col items-center text-center gap-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
              >
                <CheckCircle2 size={40} className="text-green-500" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Request Received!</h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  Your request has been received successfully. Our team will contact you soon on WhatsApp.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-xl border border-border">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">Estimated delivery: 2–4 days</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 rounded-xl border border-border">
                  <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">We'll reach you on WhatsApp shortly</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Done
              </button>
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
    <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Transparent Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Simple, Honest Prices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            No hidden fees. No surprises. Just premium websites at affordable prices.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl border-2 ${plan.accent} p-8 flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "shadow-lg shadow-primary/10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg shadow-primary/30">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">{plan.name}</h3>
                <div className="text-5xl font-bold text-foreground mb-3">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3.5 rounded-2xl font-semibold transition-all hover:shadow-lg ${plan.popular ? "hover:shadow-primary/30" : ""} ${plan.btn}`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <OrderModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </section>
  );
}
