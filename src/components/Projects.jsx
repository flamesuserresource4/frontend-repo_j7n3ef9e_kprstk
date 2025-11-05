import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Holograph Portfolio',
    description:
      'A sleek developer portfolio with a 3D hero and fluid interactions. Built with React, Vite, Tailwind, and Spline.',
    tags: ['React', 'Tailwind', 'Spline'],
  },
  {
    title: 'Realtime Dashboard',
    description:
      'A high‑performance analytics dashboard with live updates, theming, and keyboard‑first UX.',
    tags: ['TypeScript', 'WebSockets', 'Vite'],
  },
  {
    title: 'API Starter Kit',
    description: 'A pragmatic FastAPI + MongoDB starter with auth, schemas, and testing ready to go.',
    tags: ['FastAPI', 'MongoDB', 'Python'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Projects</h2>
          <p className="mt-3 text-slate-300">Selected work that highlights my focus on craft and performance.</p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          href="#contact"
          className="hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition-colors hover:bg-white/10 md:inline-block"
        >
          Let’s work together
        </motion.a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition-colors hover:from-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_10%,rgba(34,211,238,0.20),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
