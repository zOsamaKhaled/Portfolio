"use client";

import {
  LuSend as Send,
  LuMail as Mail,
  LuUser as User,
  LuMessageSquare as MessageSquare,
} from "react-icons/lu";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.02,
      },
    },
  };
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);

      formRef.current?.reset();
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center" id="form-container">
        <div className=" flex flex-col items-center mb-12">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex relative text-4xl md:text-5xl font-bold mb-4 "
          >
            {"Get In Touch".split("").map((letter, index) => (
              <motion.span
                className="inline-block"
                key={index}
                variants={textVariants}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-cyan-500 rounded-full "
          />
        </div>
        <motion.p
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          {"Have a project in mind or want to collaborate? I am always open to discussing new projects, creative ideas or opportunities."
            .split("")
            .map((char, index) => (
              <motion.span
                className="inline-block"
                key={index}
                variants={textVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
        </motion.p>

        <form
          className="max-w-xl mx-auto space-y-6 text-left"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          ref={formRef}
        >
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full pl-12 pr-4 py-4 bg-black border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder:text-zinc-500"
              required
            />
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full pl-12 pr-4 py-4 bg-black border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder:text-zinc-500"
              required
            />
          </div>
          <div className="relative group">
            <div className="absolute top-4 left-4 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <textarea
              rows={5}
              placeholder="Your Message"
              name="message"
              className="w-full pl-12 pr-4 py-4 bg-black border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white placeholder:text-zinc-500 resize-none"
              required
            ></textarea>
          </div>
          <motion.button
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.01, cursor: "pointer" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="px-6 py-3 w-full justify-center rounded-lg from-cyan-500 to-blue-500 bg-linear-to-r text-white flex items-center gap-2 group hover:bg-linear-to-l transition-colors duration-300 text-sm"
          >
            Contact Me
            <Send className="group-hover:animate-ping group-hover:translate-x-2 duration-300 w-4 h-4" />
          </motion.button>
        </form>
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7 }}
              className="text-green-500 mt-4"
            >
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
