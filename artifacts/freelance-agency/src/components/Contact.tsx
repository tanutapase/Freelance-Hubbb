import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail, Phone, Loader2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        ...form,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
    } catch {
      setError("Failed to send. Please try again or reach out via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all text-sm placeholder:text-neutral-400 text-neutral-800";

  return (
    <section id="contact" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50/60 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-5 text-neutral-900"
            >
              Let's Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Amazing Together
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-neutral-500 text-base leading-relaxed mb-8"
            >
              Have a project in mind? Send me a message and I'll get back to you within 24 hours. Let's turn your ideas into a stunning reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
                { icon: Phone, label: "WhatsApp", value: "+91 XXXXX XXXXX", href: "https://wa.me/91XXXXXXXXXX" },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600">
                      <Icon size={16} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 font-medium">{item.label}</div>
                      <div className="font-semibold text-sm text-neutral-800">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Your Name *</label>
                        <input required value={form.name} onChange={e => set("name", e.target.value)} placeholder="John Doe" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Email *</label>
                        <input required type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="john@email.com" className={inputClass} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Subject *</label>
                      <input required value={form.subject} onChange={e => set("subject", e.target.value)} placeholder="I need a website for..." className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={e => set("message", e.target.value)}
                        placeholder="Tell me about your project..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && (
                      <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 w-full py-3.5 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-700 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 shadow-sm"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-5 py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center"
                    >
                      <CheckCircle2 size={28} className="text-green-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">I'll get back to you within 24 hours.<br />Looking forward to working together!</p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="px-6 py-2.5 border border-neutral-200 rounded-xl text-sm font-semibold hover:bg-neutral-50 transition-colors text-neutral-700"
                    >
                      Send Another
                    </button>
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
