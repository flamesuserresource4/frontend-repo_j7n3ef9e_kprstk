import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Aura gradients for depth (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(59,130,246,0.14)_0%,rgba(168,85,247,0.12)_35%,rgba(34,211,238,0.10)_60%,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Tech • Playful • Modern
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-2 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl"
        >
          Creative Front‑End Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="mt-5 max-w-2xl text-balance text-base text-slate-300 sm:text-lg"
        >
          I craft interactive, performant web experiences with React, TypeScript, Tailwind, and tasteful motion. Inspired by playful, modern portfolios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-sm transition-colors hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          >
            <span className="relative z-10">View Projects</span>
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(120px_40px_at_var(--x,50%)_120%,rgba(255,255,255,0.5),transparent)] group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="group relative rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition-colors hover:bg-white/10"
          >
            <span className="relative z-10">Contact</span>
            <span className="pointer-events-none absolute inset-px rounded-[5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:linear-gradient(120deg,rgba(34,211,238,0.25),rgba(168,85,247,0.2),rgba(59,130,246,0.2))]" />
          </a>
        </motion.div>
      </div>

      {/* Subtle animated ring to echo the aura theme */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-72 w-72 -translate-x-1/2 rounded-full border border-cyan-400/20"
        style={{ boxShadow: '0 0 120px 60px rgba(34,211,238,0.08)' }}
      />
    </section>
  );
}
