"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiSolidity,
  SiBlender,
  SiUnrealengine,
  SiPython,
  SiGithub,
  SiPhp,
  SiCodeigniter,
  SiMysql,
  SiRust,
  SiFlutter,
  SiFigma,
  SiGodotengine,
  SiLinux,
  SiInstagram,
  SiX,
  SiDiscord,
} from "react-icons/si";
import {
  FaLaptopCode,
  FaPalette,
  FaExternalLinkAlt,
  FaArrowRight,
  FaLink,
} from "react-icons/fa";

// --- DATA: SKILLS ---
const skills = [
  { name: "JavaScript", icon: <SiNextdotjs />, color: "hover:text-yellow-400" }, // Icon placeholder adjustment
  { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-blue-500" },
  { name: "React", icon: <SiReact />, color: "hover:text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-white" },
  { name: "PHP", icon: <SiPhp />, color: "hover:text-purple-400" },
  {
    name: "CodeIgniter",
    icon: <SiCodeigniter />,
    color: "hover:text-orange-600",
  },
  { name: "MySQL", icon: <SiMysql />, color: "hover:text-blue-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-teal-400" },
  { name: "Blender", icon: <SiBlender />, color: "hover:text-orange-500" },
  { name: "Unreal", icon: <SiUnrealengine />, color: "hover:text-white" },
  { name: "Godot", icon: <SiGodotengine />, color: "hover:text-blue-400" },
  { name: "Figma", icon: <SiFigma />, color: "hover:text-pink-500" },
  { name: "Rust", icon: <SiRust />, color: "hover:text-white" },
  { name: "Python", icon: <SiPython />, color: "hover:text-yellow-400" },
  { name: "Solidity", icon: <SiSolidity />, color: "hover:text-gray-300" },
  { name: "Linux", icon: <SiLinux />, color: "hover:text-yellow-200" },
];

// --- DATA: PROJECTS (Ada Linknya) ---
const projects = [
  {
    title: "ZenPnL Calculator",
    desc: "A high-precision financial tracking dashboard for stock traders. Real-time P&L visualization.",
    tags: ["Next.js", "TypeScript", "Finance"],
    color: "from-green-500 to-emerald-700",
    link: "https://zenpnl.vercel.app", // Ganti link asli
  },
  {
    title: "PureZen Slides",
    desc: "A minimalist, code-first presentation framework. Focusing on developer-centric UI.",
    tags: ["React", "Tailwind", "Productivity"],
    color: "from-blue-500 to-indigo-700",
    link: "https://purezen.vercel.app", // Ganti link asli
  },
  {
    title: "JKN Sentinel AI",
    desc: "Sentiment analysis engine for mobile app reviews using SVM and Naive Bayes.",
    tags: ["Python", "ML", "AI"],
    color: "from-purple-500 to-pink-700",
    link: "https://github.com/meryzennn/jkn-sentinel", // Ganti link asli
  },
  {
    title: "Solana Drip Ledger",
    desc: "Decentralized asset dashboard for the DRiP ecosystem. Integrated with Phantom Wallet.",
    tags: ["Web3", "Solidity", "Blockchain"],
    color: "from-orange-500 to-red-700",
    link: "https://drip-ledger.sol", // Ganti link asli
  },
];

// --- DATA: 3D ARTWORKS (Ada Linknya) ---
const artworks = [
  {
    title: "Cyberpunk Ruins",
    style: "bg-linear-to-br from-pink-500 to-purple-900",
    link: "https://artstation.com/ryzen",
  },
  {
    title: "Neon Samurai",
    style: "bg-linear-to-br from-cyan-500 to-blue-900",
    link: "https://instagram.com/ryzen_art",
  },
  {
    title: "Abstract Flow",
    style: "bg-linear-to-br from-yellow-500 to-red-900",
    link: "#",
  },
  {
    title: "Glass Planet",
    style: "bg-linear-to-br from-emerald-500 to-teal-900",
    link: "#",
  },
];

const aliases = ["Tegar Hardiansyah", "Ryzen", "0x5zen", "Zen"];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Smooth scrolling untuk html tag
    document.documentElement.style.scrollBehavior = "smooth";

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % aliases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden font-[family-name:var(--font-outfit)] selection:bg-cyan-500 selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-md border-b border-white/5 bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            className="text-xl font-bold font-[family-name:var(--font-space)] tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            0x5zen
          </h1>
          <div className="flex gap-6 text-sm font-medium items-center">
            <a
              href="#projects"
              className="hidden md:block text-slate-400 hover:text-white transition-colors"
            >
              Work
            </a>
            <a
              href="#art"
              className="hidden md:block text-slate-400 hover:text-white transition-colors"
            >
              Art
            </a>
            <a
              href="https://0x5zen.vercel.app/"
              target="_blank"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white flex items-center gap-2"
            >
              Connect <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-start max-w-6xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-mono mb-4 tracking-widest text-sm bg-cyan-900/20 px-3 py-1 rounded w-fit border border-cyan-500/20">
            // DEVELOPER & 3D ARTIST
          </p>

          <h1 className="text-6xl md:text-8xl font-bold font-[family-name:var(--font-space)] leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500">
              {aliases[textIndex]}
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Computer Science Student at{" "}
            <span className="text-white font-semibold">BSI</span>. Blending
            high-performance code with immersive 3D visuals. Specializing in{" "}
            <span className="text-cyan-400">Web3</span>,{" "}
            <span className="text-purple-400">Game Dev</span>, and{" "}
            <span className="text-pink-400">Fullstack Systems</span>.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 hover:scale-105 transition-all font-[family-name:var(--font-space)]"
            >
              Explore Work
            </a>
            <a
              href="https://0x5zen.vercel.app/"
              target="_blank"
              className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all font-[family-name:var(--font-space)] backdrop-blur-sm flex items-center gap-2"
            >
              My Links <FaLink />
            </a>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold font-[family-name:var(--font-space)] mb-2 flex items-center gap-3">
            <FaLaptopCode className="text-purple-500" /> Tech Stack
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center p-4 aspect-square bg-slate-900/50 border border-white/5 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/80 transition-all cursor-pointer backdrop-blur-sm"
            >
              <div
                className={`text-4xl text-slate-500 transition-all duration-300 ${skill.color} group-hover:scale-110`}
              >
                {skill.icon}
              </div>
              <span className="mt-3 text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 absolute bottom-2 transition-opacity">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WEB PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-slate-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-between items-end"
          >
            <div>
              <h2 className="text-3xl font-bold font-[family-name:var(--font-space)] mb-2 flex items-center gap-3">
                <FaExternalLinkAlt className="text-cyan-400" /> Featured
                Projects
              </h2>
              <div className="h-1 w-20 bg-linear-to-r from-cyan-400 to-transparent rounded-full" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <a
                href={project.link}
                target="_blank"
                key={index}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group h-full p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all relative overflow-hidden cursor-pointer"
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`}
                  />

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space)] group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <FaExternalLinkAlt className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <a
              href="https://github.com/meryzennn?tab=repositories"
              target="_blank"
              className="group flex items-center gap-3 px-8 py-3 rounded-full bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
            >
              <span className="font-[family-name:var(--font-space)] font-bold">
                View All Archive
              </span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-cyan-400" />
            </a>
          </div>
        </div>
      </section>

      {/* 3D ART GALLERY SECTION */}
      <section id="art" className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold font-[family-name:var(--font-space)] mb-2 flex items-center gap-3">
            <FaPalette className="text-pink-500" /> 3D Gallery
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-pink-500 to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((art, index) => (
            <motion.a
              href={art.link}
              target="_blank"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer block border border-white/5 hover:border-pink-500/50 transition-colors"
            >
              {/* Placeholder untuk Gambar */}
              <div
                className={`w-full h-full ${art.style} group-hover:scale-110 transition-transform duration-700 ease-out`}
              />

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-space)]">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-mono mt-1 mb-3">
                    Blender • Cycles Render
                  </p>
                  <span className="text-xs flex items-center gap-1 text-pink-400 font-bold">
                    View Detail <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SUPER FOOTER */}
      <footer className="relative mt-20 border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-space)] text-white mb-4">
              0x5zen
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              Crafting digital reality through code and polygons. Open for
              collaboration on Web3, Frontend, and 3D projects.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/meryzennn"
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors text-slate-400"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="https://twitter.com/ryzen"
                target="_blank"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors text-slate-400"
              >
                <SiX size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-purple-400 transition-colors text-slate-400"
              >
                <SiDiscord size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-pink-400 transition-colors text-slate-400"
              >
                <SiInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-[family-name:var(--font-space)] text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#art"
                  className="hover:text-cyan-400 transition-colors"
                >
                  3D Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/meryzennn"
                  className="hover:text-cyan-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Social Hub Link */}
          <div>
            <h3 className="font-bold font-[family-name:var(--font-space)] text-white mb-4">
              Connect
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Find all my social profiles and contact info here.
            </p>
            <a
              href="https://0x5zen.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Visit Social Hub <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 text-center text-slate-600 text-sm font-mono">
          <p>
            &copy; {new Date().getFullYear()} Tegar Hardiansyah (Ryzen). All
            rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
