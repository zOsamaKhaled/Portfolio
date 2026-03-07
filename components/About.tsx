"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion, Variants } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiThreedotjs,
  SiTailwindcss,
  SiRedux,
  SiCanva,
  SiSalla,
} from "react-icons/si";

import { MdTranslate, MdAnimation } from "react-icons/md";
import { SiMui } from "react-icons/si";
import { User } from "lucide-react";
import { BsCake2 } from "react-icons/bs";
import {
  PiCertificate,
  PiCertificateLight,
  PiSealCheckFill,
} from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import { HiCodeBracket } from "react-icons/hi2";
import { AiOutlineApi } from "react-icons/ai";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "GSAP", icon: MdAnimation },
  { name: "Framer Motion", icon: MdAnimation },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "WordPress", icon: FaWordpress },
  { name: "Canva", icon: SiCanva },
  { name: "Salla", icon: SiSalla },
  { name: "Figma", icon: FaFigma },
  { name: "Git & GitHub", icon: FaGitAlt },
  { name: "i18n", icon: MdTranslate },
  { name: "Material UI", icon: SiMui },
  { name: "Redux", icon: SiRedux },
  { name: "Axios", icon: AiOutlineApi },
  { name: "Zod", icon: PiCertificate },
];

const skillsFather: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
export default function About() {
  const container = useRef<HTMLDivElement>(null);
  return (
    <section
      id="about"
      className="py-24 bg-zinc-950 text-white"
      ref={container}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className=" flex flex-col items-center mb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex  text-4xl md:text-5xl font-bold mb-4 "
          >
            {"About Me & Skills".split("").map((letter, index) => (
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
        <div className=" flex flex-col lg:flex-row xl:gap-12 lg:gap-4 gap-6 items-start justify-between">
          <motion.div
            variants={skillsFather}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-[50%] w-full flex flex-col gap-4 justify-center md:justify-start"
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 border border-white/10 hover:border-cyan-500/50 transition-colors hover:bg-cyan-500/5 duration-500 rounded-2xl md:p-6 p-3 w-full group relative"
            >
              <div className="flex items-center">
                <User className="w-12 h-12 mr-2 bg-cyan-500/5 border border-cyan-500/50 rounded-xl p-2 group-hover:bg-cyan-500/50 group-hover:border-cyan-500/50 transition-colors duration-500" />
                <h2 className="md:text-2xl text-xl ">Personal Info</h2>
              </div>
              <div className="flex items-center">
                <CiGlobe className="w-4 h-4 mr-2" />
                <h2 className="md:text-md text-sm ">Egypt, live in KSA</h2>
              </div>
              <div className="flex items-center">
                <BsCake2 className="w-4 h-4 mr-2" />
                <h2 className="md:text-md text-sm ">25 Years Old</h2>
              </div>
              <div className="flex items-center">
                <PiSealCheckFill className="w-4 h-4 mr-2" />
                <h2 className="md:text-md text-sm ">Available for Work</h2>
              </div>
              <User className="w-35 h-35 opacity-5 group-hover:opacity-30  transition-opacity duration-500 absolute bottom-0 right-0" />
            </motion.div>
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 border border-white/10 hover:border-cyan-500/50 transition-colors hover:bg-cyan-500/5 duration-500 rounded-2xl md:p-6 p-3 w-full group relative"
            >
              <div className="flex items-center">
                <PiCertificateLight className="w-12 h-12 mr-2 bg-cyan-500/5 border border-cyan-500/50 rounded-xl p-2 group-hover:bg-cyan-500/50 group-hover:border-cyan-500/50 transition-colors duration-500" />
                <h2 className="md:text-2xl text-xl ">Experience</h2>
              </div>
              <div className="flex items-center">
                <FaWordpress className="w-4 h-4 mr-2" />
                <h2 className="md:text-md text-sm ">
                  20+ Figma To Wordpress Projects Completed
                </h2>
              </div>
              <div className="flex items-center">
                <FaWordpress className="w-4 h-4 mr-2" />
                <h2 className="md:text-md text-sm ">
                  30+ Wordpress Projects Edited & Maintained
                </h2>
              </div>
              <div className="flex items-center">
                <HiCodeBracket className="w-4 h-4 mr-2" />
                <h2 className="md:text-md text-sm ">
                  +6 Projects (Developed Frontend with Laravel Blade)
                </h2>
              </div>

              <PiCertificateLight className="w-35 h-35 opacity-5 group-hover:opacity-30  transition-opacity duration-500 absolute bottom-0 right-0" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={skillsFather}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="lg:w-[50%] w-full grid md:grid-cols-3 grid-cols-2 gap-4 justify-center md:justify-start"
          >
            {skills.map((skill) => (
              <motion.span
                variants={item}
                key={skill.name}
                className="skill-badge flex items-center xl:px-6 lg:px-3 px-2 py-3 rounded-2xl  bg-white/5 border border-white/10 text-white xl:font-medium lg:font-normal lg:text-sm hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300 shadow-sm cursor-default"
              >
                {skill.icon && <skill.icon className="w-4 h-4 mr-2" />}
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
