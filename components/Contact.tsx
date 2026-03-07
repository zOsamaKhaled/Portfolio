"use client";

import { Send, Mail, User, MessageSquare } from "lucide-react";
import { motion, type Variants } from "framer-motion";

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
  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className=" flex flex-col items-center mb-12">
          <motion.div
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
          </motion.div>
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
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-zinc-500 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Your Name"
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
            className="px-6 py-3 w-full justify-center rounded-lg from-cyan-500 to-blue-500 bg-linear-to-r text-white flex items-center gap-2 group hover:bg-linear-to-l transition-colors duration-300"
          >
            Contact Me
            <Send className="group-hover:animate-ping group-hover:translate-x-2 duration-300" />
          </motion.button>
        </form>
      </div>
    </section>
  );
}
