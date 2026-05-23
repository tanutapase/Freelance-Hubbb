import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const WA_LINK =
  "https://wa.me/918433553501?text=Hi%20TanuDevWorks!%20I%27d%20like%20to%20discuss%20a%20project.";

const quickReplies = [
  {
    label: "💰 Pricing",
    response:
      "Plans start at ₹499 (Starter – 1 page), ₹999 (Pro – multi-section + Firebase), and ₹1999+ (Premium – fully custom). All include mobile-responsive design and fast delivery!",
  },
  {
    label: "🛠 Services",
    response:
      "I build Business Websites, Ecommerce Stores, Portfolio Sites, Landing Pages, Firebase Backend, AI Chatbots, WhatsApp Integration, and Website Redesigns — all designed to convert visitors into clients.",
  },
  {
    label: "📞 Contact",
    response:
      "WhatsApp: +91 84335 53501 · Email: tanudevworks@gmail.com · Based in Mumbai, Maharashtra. I typically respond within a few hours!",
  },
  {
    label: "⏱ Delivery",
    response:
      "Starter: 2–4 days. Pro: 3–5 days. Premium/custom: timeline discussed upfront and always honoured. You'll receive preview updates along the way.",
  },
];

interface Message {
  from: "bot" | "user";
  text: string;
}

// Positions — chatbot sits 16px above the WhatsApp button (52px + 24px bottom = 76px top edge)
const CHAT_BTN_BOTTOM = "bottom-[92px]";
const WINDOW_BOTTOM = "bottom-[152px]";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showQuick, setShowQuick] = useState(true);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([{ from: "bot", text: "Hi! 👋 I'm the TanuDevWorks assistant. How can I help you today?" }]);
      }, 900);
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendQuick = (qr: (typeof quickReplies)[0]) => {
    setShowQuick(false);
    setMessages((prev) => [...prev, { from: "user", text: qr.label }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: qr.response }]);
    }, 1100);
  };

  const sendMsg = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setShowQuick(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for your message! For the fastest reply, WhatsApp me at +91 84335 53501 — or click the green button. I'll get back to you soon! 🚀",
        },
      ]);
    }, 1300);
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={`fixed ${WINDOW_BOTTOM} right-6 z-[59] w-[340px] md:w-[380px] bg-white rounded-3xl border border-neutral-200 shadow-[0_8px_48px_rgba(0,0,0,0.13)] overflow-hidden flex flex-col`}
            style={{ maxHeight: "440px" }}
          >
            {/* Header */}
            <div className="bg-neutral-900 px-5 py-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm">TanuDevWorks AI</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-white/60 text-xs">Online — replies instantly</span>
                </div>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-white transition-colors underline underline-offset-2 shrink-0"
              >
                WhatsApp
              </a>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1 ml-1 shrink-0"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5 bg-neutral-50/50 min-h-0">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-neutral-900 text-white rounded-br-md"
                          : "bg-white text-neutral-800 rounded-bl-md border border-neutral-100 shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="px-4 py-3 bg-white rounded-2xl rounded-bl-md border border-neutral-100 shadow-sm flex items-center gap-1">
                      {[0, 150, 300].map((delay) => (
                        <div
                          key={delay}
                          className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {showQuick && messages.length > 0 && !typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 mt-1"
                >
                  {quickReplies.map((qr) => (
                    <button
                      key={qr.label}
                      onClick={() => sendQuick(qr)}
                      className="px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-neutral-700 text-xs font-medium hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200"
                    >
                      {qr.label}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="border-t border-neutral-100 p-3 flex gap-2 bg-white shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMsg()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-all"
              />
              <button
                onClick={sendMsg}
                className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-700 transition-colors shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle button — pulse ring when closed, same feel as WhatsApp button */}
      <div className={`fixed ${CHAT_BTN_BOTTOM} right-6 z-[60]`}>
        {!open && (
          <span className="absolute inset-0 rounded-full bg-neutral-600 animate-ping opacity-[0.18] pointer-events-none" />
        )}
        <motion.button
          onClick={() => setOpen((o) => !o)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label={open ? "Close chat" : "Open chat"}
          className="relative w-[52px] h-[52px] rounded-full bg-neutral-900 text-white shadow-[0_4px_24px_rgba(0,0,0,0.32)] flex items-center justify-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
