import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Mail, MessageSquare, User, FileText } from "lucide-react";

interface Field {
  name: string;
  label: string;
  type: string;
  icon: React.ElementType;
  placeholder: string;
  multiline?: boolean;
}

const fields: Field[] = [
  { name: "name", label: "Your Name", type: "text", icon: User, placeholder: "John Doe" },
  { name: "email", label: "Email Address", type: "email", icon: Mail, placeholder: "john@example.com" },
  { name: "subject", label: "Subject", type: "text", icon: FileText, placeholder: "I need a website for..." },
  { name: "message", label: "Message", type: "text", icon: MessageSquare, placeholder: "Tell me about your project...", multiline: true },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const isFloating = (fieldName: string) =>
    focused === fieldName || form[fieldName as keyof typeof form].length > 0;

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/8 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-3"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Let's Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Amazing Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Have a project in mind? Send me a message and I'll get back to you within 24 hours. Let's turn your ideas into a stunning reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {[
                { icon: Mail, label: "Email", value: "hello@example.com" },
                { icon: MessageSquare, label: "WhatsApp", value: "+91 XXXXX XXXXX" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-semibold text-sm">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {fields.map((field) => {
                      const Icon = field.icon;
                      const floating = isFloating(field.name);
                      return (
                        <div key={field.name} className="relative">
                          <div className={`absolute left-4 transition-all duration-200 pointer-events-none flex items-center gap-1.5 ${floating ? "top-3 text-xs text-primary font-semibold" : "top-1/2 -translate-y-1/2 text-muted-foreground text-sm"} ${field.multiline && floating ? "top-3 translate-y-0" : ""} ${field.multiline && !floating ? "top-5 translate-y-0" : ""}`}>
                            <Icon size={floating ? 12 : 16} />
                            <span>{field.label}</span>
                          </div>
                          {field.multiline ? (
                            <textarea
                              required
                              rows={4}
                              value={form[field.name as keyof typeof form]}
                              onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                              onFocus={() => setFocused(field.name)}
                              onBlur={() => setFocused(null)}
                              className="w-full px-4 pt-8 pb-4 rounded-2xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                            />
                          ) : (
                            <input
                              required
                              type={field.type}
                              value={form[field.name as keyof typeof form]}
                              onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                              onFocus={() => setFocused(field.name)}
                              onBlur={() => setFocused(null)}
                              className="w-full px-4 pt-6 pb-3 rounded-2xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                            />
                          )}
                        </div>
                      );
                    })}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-2 w-full py-4 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center gap-5 py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center"
                    >
                      <CheckCircle2 size={32} className="text-green-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours. Looking forward to working together!</p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="px-6 py-2.5 border border-border rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
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
