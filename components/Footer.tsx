import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 md:py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 website-logo">
            <Link href="#hero" className="inline-block mb-6">
              <span className="text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500 ">
                OK
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed max-w-sm">
              Building premium, dynamic, and forward-thinking digital
              experiences with modern web technologies. Focuses on performance,
              scalability, and beautiful user interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="#hero"
                className="hover:text-cyan-400 transition-colors w-fit"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-cyan-400 transition-colors w-fit"
              >
                About
              </Link>
              <Link
                href="#works"
                className="hover:text-cyan-400 transition-colors w-fit"
              >
                Works
              </Link>
              {/* <Link
                href="#experience"
                className="hover:text-cyan-400 transition-colors w-fit"
              >
                Experience
              </Link> */}
              <Link
                href="#contact"
                className="hover:text-cyan-400 transition-colors w-fit"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/zOsamaKhaled/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/zosamakhaled/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:usernameosama@gmail.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/+966543039914"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
                aria-label="Whatsapp"
              >
                <BsWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <p>&copy; {currentYear} Osama Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
