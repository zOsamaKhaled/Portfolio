"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 200,
    damping: 20,
    duration: 1,
  });

  const y = useSpring(mouseY, {
    stiffness: 200,
    damping: 20,
    duration: 1,
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <motion.div className="cursor" style={{ x, y }} />
      <main className="flex min-h-screen flex-col bg-[#050505]">
        <Hero />
        <About />
        <Works />
        {/* <Experience /> */}
        <Contact />
      </main>
    </>
  );
}
