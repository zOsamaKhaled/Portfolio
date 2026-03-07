"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function HomeClient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 200,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 200,
    damping: 20,
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
        <Contact />
      </main>
    </>
  );
}
