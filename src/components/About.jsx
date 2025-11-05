import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid items-center gap-10 md:grid-cols-[220px_1fr]"
      >
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-purple-400/10 to-transparent p-1">
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-900/60 text-5xl">👋</div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">About Me</h2>
          <p className="mt-4 text-slate-300">
            I’m a front‑end focused web developer who loves building polished interfaces and smooth interactions. I work
            with React, TypeScript, Tailwind, and modern tooling to ship maintainable products that feel great to use.
          </p>
          <p className="mt-4 text-slate-300">
            Beyond the UI, I care about performance, accessibility, and clear systems that scale. I enjoy collaborating
            with designers and product teams to turn ideas into delightful experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
