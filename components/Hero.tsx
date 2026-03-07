"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, Sparkles, Sphere } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import { motion, Variants } from "framer-motion";
import {
  FileUser,
  Github,
  Linkedin,
  Mail,
  MessageSquareText,
  Send,
} from "lucide-react";
import { float } from "three/tsl";
import { BsWhatsapp } from "react-icons/bs";

export default function Hero() {
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
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
      id="hero"
      className="relative h-screen w-full max-w-7xl mx-auto flex  items-center justify-center overflow-hidden "
    >
      <div className="flex justify-between items-center flex-col lg:flex-row w-full  lg:gap-0 gap-10  px-6">
        {/* Text Container */}
        <div className="w-full flex h-full flex-col gap-3 ">
          <div className="flex flex-col gap-3 ">
            <h2>
              Hi, I'm
              <motion.span
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="text-cyan-500 font-bold backdrop-blur bg-white/10 px-2 py-1 ml-1 rounded-lg"
              >
                {"Web Developer".split("").map((char, index) => (
                  <motion.span variants={textVariants} key={index}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </h2>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className=" xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-white w-[95%] leading-relaxed"
            >
              {"Maximize Your".split("").map((char, index) => (
                <motion.span variants={textVariants} key={index}>
                  {char}
                </motion.span>
              ))}
              {" Business ".split("").map((char, index) => (
                <motion.span
                  className="text-cyan-500 font-bold"
                  variants={textVariants}
                  key={index}
                >
                  {char}
                </motion.span>
              ))}
              {"Potential with Custom Web Development"
                .split("")
                .map((char, index) => (
                  <motion.span variants={textVariants} key={index}>
                    {char}
                  </motion.span>
                ))}
              {" Solutions! ".split("").map((char, index) => (
                <motion.span
                  className="text-cyan-500 font-bold"
                  variants={textVariants}
                  key={index}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <motion.p
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="text-md text-white/50 w-[90%] leading-relaxed"
            >
              {"Take your business to the next level with custom web development solutions."
                .split(" ")
                .map((char, index) => (
                  <motion.span variants={textVariants} key={index}>
                    {char}{" "}
                  </motion.span>
                ))}
            </motion.p>
          </div>
          <motion.div
            className="flex gap-3 md:mt-10 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.button
              initial={{ x: -60 }}
              whileInView={{ x: 0 }}
              whileHover={{ scale: 1.05, cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-2 rounded-lg from-cyan-500 to-blue-500 bg-linear-to-r text-white flex items-center gap-2 group hover:bg-linear-to-l transition-colors duration-300"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
              <Send className="group-hover:animate-ping group-hover:translate-x-2 duration-300" />
            </motion.button>
            <motion.button
              initial={{ x: 60 }}
              whileInView={{ x: 0 }}
              whileHover={{ scale: 1.05, cursor: "pointer" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="px-6 py-2 rounded-lg border border-cyan-500 text-cyan-500  hover:bg-white hover:border-white transition-colors duration-300 flex items-center gap-2 group"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1FW1zkrwQcABYzEu7bs54SGMeySxMEaGm/view?usp=sharing",
                );
              }}
            >
              Download CV
              <FileUser className="group-hover:animate-ping group-hover:translate-x-2 duration-300" />
            </motion.button>
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 2,
            ease: "linear",
            type: "tween",
            repeat: Infinity,
          }}
          className="w-full flex items-center "
        >
          <div className="flex justify-between flex-col items-center relative">
            <img
              src="/me.svg"
              alt=""
              className="lg:w-[80%] lg:h-[80%] h-[50%] w-[50%] object-cover"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                ease: "linear",
                type: "tween",
                repeat: Infinity,
              }}
              className="absolute lg:top-20 lg:left-10 md:top-20 md:left-40 top-10 left-20 z-10 "
            >
              <img
                src="/shape1.svg"
                alt=""
                className="lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[120px] h-[120px]  fill-white/10 "
              ></img>
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:text-3xl md:text-2xl text-lg text-center text-black font-bold">
                <span className="text-cyan-500 lg:text-5xl md:text-4xl text-2xl">
                  +35
                </span>{" "}
                <br />
                Projects
              </p>
            </motion.div>
            <div className="flex gap-4 mt-1 ml-4">
              <a
                href="https://github.com/zOsamaKhaled/"
                target="_blank"
                className="w-10 h-10 mt-[-15px]  rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://wa.me/+966543039914"
                target="_blank"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                aria-label="Whatsapp"
              >
                <BsWhatsapp size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/zosamakhaled/"
                target="_blank"
                className="w-10 h-10 mt-[-15px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
