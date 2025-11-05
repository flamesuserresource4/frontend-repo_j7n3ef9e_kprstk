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
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Projects</h2>
          <p className="mt-3 text-slate-300">Selected work that highlights my focus on craft and performance.</p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 md:inline-block"
        >
          Let’s work together
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition-colors hover:from-white/10"
          >
            <div className="absolute inset-0 -z-[0] bg-[radial-gradient(60%_60%_at_30%_10%,rgba(34,211,238,0.20),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
