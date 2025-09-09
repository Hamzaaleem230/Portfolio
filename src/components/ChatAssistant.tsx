"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Trash2 } from "lucide-react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    {
      sender: "bot",
      text: "🤖 Hello! I'm Hamza's Assistant. Ask me about his skills, projects, or professional journey 🙂",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message
  const sendMessage = async () => {
    if (!input.trim() || isTyping) return; // prevent duplicates while typing

    // ✅ Type-safe user message
    const userMsg = { sender: "user" as const, text: input };
    setMessages((prev) => [...prev, userMsg]);

    const userInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();

      // ✅ Single bot bubble only
      const botMsg = { sender: "bot" as const, text: data.reply };

      // Delay to simulate typing
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 800);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot" as const, text: "⚠️ Backend not responding" },
      ]);
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "🤖 Hello! I'm Hamza's Assistant. Ask me about his skills, projects, or professional journey 🙂",
      },
    ]);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition"
      >
        <MessageSquare size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { y: "100%" } : { x: "100%" }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: "100%" } : { x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed bg-gray-900 text-white shadow-2xl z-50 flex flex-col
              ${isMobile ? "bottom-0 left-0 w-full h-[90%] rounded-t-2xl" : "top-0 right-0 h-full w-full sm:w-[400px]"}`}
          >
            <div className="relative flex flex-col h-full">
              {/* Popup */}
              <AnimatePresence>
                {showPopup && (
                  <motion.div
                    key="popup"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-3 left-4 right-4 bg-green-500 text-gray-900 font-medium px-4 py-2 rounded-lg shadow-lg text-center mx-auto w-fit z-[60]">
                    ☑️ Chat deleted successfully!
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700 rounded-t-2xl sm:rounded-none">
                <h2 className="text-lg font-semibold text-primary">
                  🤖 Hamza&apos;s AI Assistant
                </h2>

                <div className="flex items-center gap-3">
                  <button onClick={clearChat}>
                    <Trash2 size={20} className="text-gray-400 hover:text-red-400" />
                  </button>
                  <button onClick={() => setIsOpen(false)}>
                    <X size={24} className="text-gray-400 hover:text-red-400" />
                  </button>
                </div>
              </div>

              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-3 rounded-2xl max-w-[80%] ${
                      msg.sender === "user" ? "ml-auto bg-green-600" : "bg-gray-700"
                    }`}
                  >
                    {msg.sender === "user" ? `👨🏻‍🦱 You: ${msg.text}` : `🤖 Bot: ${msg.text}`}
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-3 rounded-2xl max-w-[20%] bg-gray-700 flex items-center justify-center animate-pulse pointer-events-none"
                  >
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-gray-700 bg-gray-800 flex gap-2 rounded-b-2xl sm:rounded-none">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg px-3 py-2 bg-gray-700 text-white outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-green-500 text-gray-900 font-semibold hover:bg-green-600 px-4 rounded-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




