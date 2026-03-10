"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMenu as Menu, LuX as X } from "react-icons/lu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className=" fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
      {/* content */}

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500 relative z-50 website-logo">
          <Link href="#hero" onClick={closeMobileMenu}>
            OK
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="#hero" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#works" className="hover:text-white transition-colors">
            Works
          </Link>
          {/* <Link
            href="#experience"
            className="hover:text-white transition-colors"
          >
            Experience
          </Link> */}
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white relative z-50 transition-transform duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-30 transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Off-Canvas Menu */}
      <div
        className={`fixed inset-0 top-0 right-0 bottom-0 w-full h-screen backdrop-blur-sm bg-black/90 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col pt-32 items-center ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-10 text-3xl font-medium text-white items-center">
          <Link
            href="#hero"
            className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            href="#works"
            className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            onClick={closeMobileMenu}
          >
            Works
          </Link>
          {/* <Link
            href="#experience"
            className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            onClick={closeMobileMenu}
          >
            Experience
          </Link> */}
          <Link
            href="#contact"
            className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
