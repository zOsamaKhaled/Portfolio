"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import * as RawGSAP from "gsap";
import { projects, type Project } from "@/data/projects";

RawGSAP.default.registerPlugin(ScrollTrigger);

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export default function Works() {
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.04,
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
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // تحويل نسبة السكروول لحركة أفقية
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]" id="works">
      <div className=" flex flex-col items-center mb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex relative text-4xl md:text-5xl font-bold mb-4 "
        >
          {"My Works".split("").map((letter, index) => (
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
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div className="absolute rotate-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-[300px] font-bold text-white whitespace-nowrap flex flex-col justify-center items-center gap-10  ">
          <div className="overflow-hidden w-full whitespace-nowrap">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 10,
                repeat: Infinity,
              }}
            >
              <p className="text-[220px] opacity-10 shrink-0">
                WORKS WORKS WORKS WORKS WORKS WORKS WORKS
              </p>

              <p className="text-[220px] opacity-10 shrink-0">
                WORKS WORKS WORKS WORKS WORKS WORKS WORKS
              </p>
            </motion.div>
          </div>
          <div className="overflow-hidden w-full whitespace-nowrap">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "50%"] }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 10,
                repeat: Infinity,
              }}
            >
              <p className="text-[220px] opacity-10 shrink-0">
                WORKS WORKS WORKS WORKS WORKS WORKS WORKS
              </p>

              <p className="text-[220px] opacity-10 shrink-0">
                WORKS WORKS WORKS WORKS WORKS WORKS WORKS
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div style={{ x }} className="flex gap-8 relative">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className=" relative card w-[450px] h-[650px] group rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col"
            >
              <div className="relative w-full h-[250px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all w-full h-[250px] duration-3000 group-hover:scale-102 object-top group-hover:object-bottom "
                  draggable="false"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                    draggable="false"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-cyan-400 w-full justify-center hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors flex items-center gap-2 text-sm font-medium ml-auto px-3 py-2 border border-cyan-500/30 rounded-lg"
                    draggable="false"
                  >
                    <ExternalLink size={16} /> Live Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
