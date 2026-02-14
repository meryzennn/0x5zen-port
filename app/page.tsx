"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  Variants,
} from "framer-motion";
import { useState, useEffect } from "react";
import Lenis from "lenis";
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
  SiFigma,
  SiGodotengine,
  SiLinux,
  SiInstagram,
  SiX,
  SiDiscord,
  SiLinkedin,
  SiDocker,
  SiAlibabacloud,
  SiGooglecloud,
  SiCisco,
} from "react-icons/si";
import {
  FaLaptopCode,
  FaPalette,
  FaExternalLinkAlt,
  FaArrowRight,
  FaLink,
  FaChevronDown,
  FaChevronUp,
  FaUserAstronaut,
  FaGraduationCap,
  FaBriefcase,
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCertificate,
  FaEye,
  FaPhone,
} from "react-icons/fa";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

// --- DATA ---
const certifications = [
  {
    name: "Alibaba Cloud Certification",
    issuer: "Alibaba Cloud",
    year: "2025",
    icon: <SiAlibabacloud className="text-orange-500" />,
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    year: "2024",
    icon: <SiCisco className="text-blue-500" />,
  },
  {
    name: "Google Cloud Compute Badge",
    issuer: "Google Cloud",
    year: "2024",
    icon: <SiGooglecloud className="text-blue-400" />,
  },
  {
    name: "Programming Essentials in Python",
    issuer: "Cisco",
    year: "2023",
    icon: <SiPython className="text-yellow-400" />,
  },
  {
    name: "Build Real World AI Apps",
    issuer: "Google",
    year: "2024",
    icon: <SiGooglecloud className="text-blue-400" />,
  },
];

const skills = [
  {
    name: "JavaScript",
    icon: <SiNextdotjs />,
    color: "group-hover:text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "group-hover:text-blue-500",
  },
  { name: "React", icon: <SiReact />, color: "group-hover:text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "group-hover:text-white" },
  { name: "PHP", icon: <SiPhp />, color: "group-hover:text-purple-400" },
  {
    name: "CodeIgniter",
    icon: <SiCodeigniter />,
    color: "group-hover:text-orange-600",
  },
  { name: "MySQL", icon: <SiMysql />, color: "group-hover:text-blue-400" },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "group-hover:text-teal-400",
  },
  {
    name: "Blender",
    icon: <SiBlender />,
    color: "group-hover:text-orange-500",
  },
  { name: "Docker", icon: <SiDocker />, color: "group-hover:text-blue-500" },
  { name: "Linux", icon: <SiLinux />, color: "group-hover:text-yellow-200" },
  { name: "Python", icon: <SiPython />, color: "group-hover:text-yellow-400" },
  {
    name: "Solidity",
    icon: <SiSolidity />,
    color: "group-hover:text-gray-300",
  },
  { name: "Figma", icon: <SiFigma />, color: "group-hover:text-pink-500" },
  { name: "Rust", icon: <SiRust />, color: "group-hover:text-white" },
  { name: "Unreal", icon: <SiUnrealengine />, color: "group-hover:text-white" },
];

const projects = [
  {
    title: "ZenPnL Calculator",
    desc: "A high-precision financial tracking dashboard for stock traders. Real-time P&L visualization.",
    tags: ["Next.js", "TypeScript", "Finance"],
    color: "from-green-500 to-emerald-700",
    link: "https://zenpnl.vercel.app",
  },
  {
    title: "PureZen Slides",
    desc: "A minimalist, code-first presentation framework. Focusing on developer-centric UI.",
    tags: ["React", "Tailwind", "Productivity"],
    color: "from-blue-500 to-indigo-700",
    link: "https://purezen.vercel.app",
  },
  {
    title: "JKN Sentinel AI",
    desc: "Sentiment analysis engine for mobile app reviews using SVM and Naive Bayes.",
    tags: ["Python", "ML", "AI"],
    color: "from-purple-500 to-pink-700",
    link: "https://github.com/meryzennn/jkn-sentinel",
  },
  {
    title: "Solana Drip Ledger",
    desc: "Decentralized asset dashboard for the DRiP ecosystem. Integrated with Phantom Wallet.",
    tags: ["Web3", "Solidity", "Blockchain"],
    color: "from-orange-500 to-red-700",
    link: "https://drip-ledger.sol",
  },
  {
    title: "Voxel Verse NFT",
    desc: "Generative 3D Voxel art collection on Solana. Generated using Python scripts in Blender.",
    tags: ["Blender", "Python", "NFT"],
    color: "from-yellow-500 to-orange-700",
    link: "#",
  },
  {
    title: "EtherGuard Audit",
    desc: "Smart contract security scanner tool. Detects common vulnerabilities in Solidity code.",
    tags: ["Rust", "Solidity", "Security"],
    color: "from-slate-500 to-slate-800",
    link: "#",
  },
  {
    title: "Ryzen OS Theme",
    desc: "Custom Linux Rice (Hyprland) configuration with neon aesthetics and productivity scripts.",
    tags: ["Linux", "Bash", "Ricing"],
    color: "from-pink-500 to-rose-700",
    link: "#",
  },
  {
    title: "DevOps Dashboard",
    desc: "Server monitoring tool for home labs using Docker and Grafana visualization.",
    tags: ["Docker", "Grafana", "System"],
    color: "from-cyan-500 to-blue-800",
    link: "#",
  },
];

const aliases = ["Tegar Hardiansyah", "Ryzen", "0x5zen", "Zen"];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Setup Lenis Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const target = document.querySelector(href);
          if (target) lenis.scrollTo(target as HTMLElement);
        }
      });
    });

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % aliases.length);
    }, 2500);

    return () => {
      clearInterval(interval);
      lenis.destroy();
    };
  }, []);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);
  const visibleCerts = showAllCerts
    ? certifications
    : certifications.slice(0, 3);

  // --- NO LOADING SCREEN (LANGSUNG RETURN UTAMA) ---

  return (
    <main className="min-h-screen relative overflow-hidden font-outfit selection:bg-cyan-500 selection:text-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-purple-500 via-cyan-500 to-blue-500 origin-left z-100"
        style={{ scaleX }}
      />

      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-xl border-b border-white/5 bg-slate-950/60 supports-backdrop-filter:bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold font-space tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            0x5zen
          </motion.h1>
          <div className="flex gap-6 text-sm font-medium items-center">
            {["Work", "About"].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${
                  item.toLowerCase() === "work"
                    ? "projects"
                    : item.toLowerCase()
                }`}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              href="https://0x5zen-gallery.vercel.app/"
              target="_blank"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white flex items-center gap-2 cursor-pointer"
            >
              Gallery <FaArrowRight className="text-xs" />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-start max-w-6xl mx-auto px-6 pt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.p
            className="text-cyan-400 font-mono mb-4 tracking-widest text-sm bg-cyan-900/20 px-3 py-1 rounded w-fit border border-cyan-500/20"
            whileHover={{ scale: 1.05 }}
          >
            // DEVELOPER & 3D ARTIST
          </motion.p>

          <h1 className="text-6xl md:text-8xl font-bold font-space leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500">
              {aliases[textIndex]}
            </span>
            <span className="animate-pulse text-white">|</span>
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
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all font-space cursor-pointer"
            >
              Explore Work
            </motion.a>
            <motion.a
              href="https://0x5zen.vercel.app/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/40 transition-all font-space backdrop-blur-sm flex items-center gap-2 cursor-pointer"
            >
              My Links <FaLink />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold font-space mb-2 flex items-center gap-3">
            <FaLaptopCode className="text-purple-500" /> Tech Stack
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-transparent rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -5, scale: 1.1 }}
              className="group relative flex flex-col items-center justify-center p-3 md:p-4 aspect-square bg-slate-900/50 border border-white/5 rounded-2xl hover:border-purple-500/50 hover:bg-slate-800/80 transition-colors cursor-pointer backdrop-blur-sm"
            >
              <div
                className={`text-3xl md:text-4xl text-slate-500 transition-colors duration-300 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <span className="hidden md:block mt-3 text-xs font-mono text-slate-400 opacity-0 group-hover:opacity-100 absolute bottom-2 transition-opacity">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT ME & CV POPUP BUTTON */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaUserAstronaut className="text-3xl text-purple-500" />
              <h2 className="text-3xl font-bold font-space">
                About The Creator
              </h2>
            </div>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                <strong className="text-white">
                  "Code is Logic, Art is Emotion."
                </strong>{" "}
                <br />I am a Web Developer and 3D Artist with over 3 years of
                experience. Currently pursuing my Computer Science degree at{" "}
                <strong className="text-white">BSI</strong>.
              </p>
              <p>
                I master{" "}
                <span className="text-cyan-400">
                  PHP (CodeIgniter 4), Python, and JavaScript
                </span>{" "}
                to build robust systems. Simultaneously, I manage self-hosted
                Linux servers using Docker and craft expressive 3D art on
                Blender.
              </p>
              <p>
                My goal? To push the boundaries of how digital art lives in
                decentralized ecosystems like{" "}
                <span className="text-purple-400">Solana</span>.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCV(true)}
              className="mt-8 flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all font-mono text-sm cursor-pointer shadow-lg shadow-purple-500/20"
            >
              <FaEye /> View Full Resume
            </motion.button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm border-l-4 border-l-purple-500"
            >
              <h3 className="text-4xl font-bold text-white mb-2 font-space">
                3+
              </h3>
              <p className="text-slate-500 text-sm font-mono">Years Exp</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm border-l-4 border-l-cyan-500"
            >
              <h3 className="text-4xl font-bold text-white mb-2 font-space">
                20+
              </h3>
              <p className="text-slate-500 text-sm font-mono">
                Projects Shipped
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 col-span-2 flex items-center gap-4 border-l-4 border-l-pink-500"
            >
              <div className="bg-white/10 p-3 rounded-full">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-white">UBSI & SMK PGRI 2</h4>
                <p className="text-slate-500 text-sm font-mono">
                  CS & Network Engineering
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-slate-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold font-space mb-2 flex items-center gap-3">
              <FaExternalLinkAlt className="text-cyan-400" /> Featured Projects
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-cyan-400 to-transparent rounded-full" />
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatePresence>
              {visibleProjects.map((project) => (
                <motion.a
                  href={project.link}
                  target="_blank"
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="block h-full"
                >
                  <div className="group h-full p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all relative overflow-hidden flex flex-col shadow-xl">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${project.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`}
                    />
                    <h3 className="text-2xl font-bold font-space mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 grow leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-white/5 rounded border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group flex items-center gap-3 px-8 py-3 rounded-full bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-pointer shadow-lg"
            >
              <span className="font-space font-bold">
                {showAllProjects ? "Show Less" : "View All Projects"}
              </span>
              {showAllProjects ? (
                <FaChevronUp className="text-cyan-400" />
              ) : (
                <FaChevronDown className="text-cyan-400" />
              )}
            </motion.button>
          </div>
        </div>
      </section>

      {/* GALLERY EXTERNAL LINK (BIG CTA) */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-16 border border-white/10 bg-linear-to-r from-slate-900 to-slate-950 relative overflow-hidden text-center shadow-2xl group cursor-pointer"
          onClick={() =>
            window.open("https://0x5zen-gallery.vercel.app/", "_blank")
          }
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-pink-500/30 transition-all" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-purple-500/30 transition-all" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <FaPalette className="text-5xl text-pink-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Enter The{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400">
                Gallery
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Explore my complete collection of 3D renders, NFT drops, and
              digital experiments.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg group-hover:bg-pink-50 transition-colors">
              Visit 3D Gallery <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative mt-20 border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold font-space text-white mb-4">
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

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold font-space text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://0x5zen-gallery.vercel.app/"
                  target="_blank"
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold font-space text-white mb-4">Connect</h3>
            <p className="text-slate-400 text-sm mb-4">
              Check my social profiles.
            </p>
            <a
              href="https://0x5zen.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Social Hub <FaArrowRight />
            </a>
          </div>
        </div>
        <div className="border-t border-white/5 py-8 text-center text-slate-600 text-sm font-mono">
          <p>&copy; 2026 Tegar Hardiansyah (Ryzen). All rights reserved.</p>
        </div>
      </footer>

      {/* --- LIVE CV MODAL (VIEW ONLY & FIX SCROLL) --- */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            id="cv-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowCV(false);
            }}
          >
            {/* data-lenis-prevent PENTING biar scroll di dalem modal jalan & gak nge-scroll body */}
            <motion.div
              data-lenis-prevent
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-slate-950 w-full max-w-4xl max-h-[85vh] rounded-3xl border border-white/10 shadow-2xl overflow-y-auto relative custom-scrollbar"
            >
              <div className="bg-slate-900/90 p-8 border-b border-white/5 flex flex-col md:flex-row gap-6 items-center md:items-start sticky top-0 z-10 backdrop-blur-xl">
                <button
                  onClick={() => setShowCV(false)}
                  className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaTimes />
                </button>

                {/* PROFILE PICTURE - Ganti src-nya sesuai file lu */}
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-2 border-white/10 shadow-lg shadow-purple-500/30 shrink-0"
                />

                <div className="text-center md:text-left w-full">
                  <h2 className="text-3xl font-bold font-space">
                    Tegar Hardiansyah
                  </h2>
                  <p className="text-cyan-400 font-mono mb-2">
                    Full-Stack Web Developer | 3D Artist
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 justify-center md:justify-start">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt /> Bogor, Indonesia
                    </span>
                    <span className="flex items-center gap-2">
                      <FaEnvelope /> me.ryzennn@gmail.com
                    </span>
                    <span className="flex items-center gap-2">
                      <FaPhone /> +62 882-9937-4314
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3 border-b border-white/10 pb-2 flex items-center gap-2">
                    <FaUserAstronaut className="text-purple-400" /> Professional
                    Summary
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm text-justify">
                    Web Developer and 3D Artist with over 3 years of experience.
                    Expert in PHP (CodeIgniter 4), JavaScript (Next.js), and
                    Python for Fullstack systems. Skilled in server management
                    (Linux/Docker) and creating digital art on the Solana
                    blockchain.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                    <FaBriefcase className="text-cyan-400" /> Experience
                  </h3>

                  <div className="mb-6 relative pl-6 border-l border-white/10">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-white text-lg">
                        Kementerian Kelautan dan Perikanan RI
                      </h4>
                      <span className="text-xs font-mono text-slate-500">
                        Sep 2025 - Dec 2025
                      </span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-2 font-medium">
                      Web Developer Intern
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                      <li>
                        Developed web applications for internal ministry use.
                      </li>
                      <li>
                        Collaborated with senior developers on system
                        maintenance.
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l border-white/10">
                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-white text-lg">
                        Freelance (Fiverr & Self-Employed)
                      </h4>
                      <span className="text-xs font-mono text-slate-500">
                        2023 - Present
                      </span>
                    </div>
                    <p className="text-cyan-400 text-sm mb-2 font-medium">
                      Fullstack Developer & 3D Artist
                    </p>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                      <li>Built "ZenPnL" finance dashboard using Next.js.</li>
                      <li>
                        Created NFT collections on Solana ecosystem (DRiP).
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                    <FaCertificate className="text-yellow-400" /> Certifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {visibleCerts.map((cert, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="mt-1 shrink-0 text-xl">{cert.icon}</div>
                        <div>
                          <h5 className="font-bold text-sm text-white">
                            {cert.name}
                          </h5>
                          <p className="text-xs text-slate-500">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="mt-4 text-xs text-cyan-400 hover:text-white flex items-center gap-1 cursor-pointer font-bold"
                  >
                    {showAllCerts ? "Show Less" : "Show All Certifications"}{" "}
                    <FaChevronDown
                      className={`transition-transform ${
                        showAllCerts ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                    <FaGraduationCap className="text-pink-400" /> Education
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5">
                      <h4 className="font-bold text-white">UBSI</h4>
                      <p className="text-sm text-slate-400">
                        Bachelor's in Computer Science (2022 - 2026)
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5">
                      <h4 className="font-bold text-white">
                        SMK PGRI 2 CIBINONG
                      </h4>
                      <p className="text-sm text-slate-400">
                        Network Engineering (2019 - 2022)
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
