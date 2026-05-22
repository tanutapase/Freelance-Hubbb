import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const quickReplies = [
  { label: "Pricing", response: "Our plans start at just ₹499 for a basic 1-page website, ₹999 for a multi-section Pro site, and ₹1999+ for fully custom projects. All include mobile-responsive design and fast delivery!" },
  { label: "Services", response: "I build Business Websites, Portfolio Sites, Landing Pages, Booking Systems, Firebase integrations, and WhatsApp integrations — all crafted to convert visitors into customers." },
  { label: "Contact", response: "You can reach me via WhatsApp at +91 XXXXX XXXXX, or email at hello@example.com. I typically respond within a few hours!" },
  { label: "Delivery Time", response: "Basic websites are delivered in 2–4 days. Pro sites take 3–5 days. Custom projects depend on complexity — I'll give you a clear timeline before we begin." },
];

interface Message {
  from: "bot" | "user";
  text: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages([{ from: "bot", text: "Need help choosing a website plan?" }]);
      }, 1000);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendQuickReply = (qr: typeof quickReplies[0]) => {
    setShowQuickReplies(false);
    const userMsg: Message = { from: "user", text: qr.label };
    setMessages(prev => [...prev, userMsg]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: "bot", text: qr.response }]);
    }, 1200);
  };

  const sendMessage = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { from: "user", text: trimmed }]);
    setInputValue("");
    setShowQuickReplies(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: "bot", text: "Thanks for your message! For a quicker response, reach me on WhatsApp at +91 XXXXX XXXXX or email hello@example.com. I'll get back to you soon!" }]);
    }, 1400);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-32 right-6 z-50 w-80 md:w-96 bg-white/90 backdrop-blur-xl rounded-3xl border border-border shadow-2xl shadow-black/10 overflow-hidden flex flex-col"
            style={{ maxHeight: "520px" }}
          >
            <div className="bg-gradient-to-r from-primary to-indigo-500 p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <div className="flex-1">
                <div className="text-white font-bold text-sm">Studio Assistant</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                  <span className="text-white/80 text-xs">Online — typically replies instantly</span>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-gray-100 text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="px-4 py-3 bg-gray-100 rounded-2xl rounded-bl-sm flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {showQuickReplies && messages.length > 0 && !typing && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 mt-1"
                >
                  {quickReplies.map((qr) => (
                    <button
                      key={qr.label}
                      onClick={() => sendQuickReply(qr)}
                      className="px-3 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium hover:bg-primary hover:text-white transition-all"
                    >
                      {qr.label}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border p-3 flex gap-2">
              <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-indigo-500 text-white shadow-xl shadow-primary/30 flex items-center justify-center"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
