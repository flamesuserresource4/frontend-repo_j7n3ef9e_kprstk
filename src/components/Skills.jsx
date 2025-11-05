const skills = [
  'React',
  'TypeScript',
  'Node.js',
  'FastAPI',
  'Tailwind CSS',
  'Framer Motion',
  'Vite',
  'MongoDB',
  'REST APIs',
  'Testing',
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Skills</h2>
      <p className="mt-3 text-slate-300">A quick snapshot of tools I use to craft modern web apps.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
