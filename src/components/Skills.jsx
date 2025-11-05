import { motion } from 'framer-motion';

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-2xl font-semibold text-white sm:text-3xl"
      >
        Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        className="mt-3 text-slate-300"
      >
        A quick snapshot of tools I use to craft modern web apps.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {skills.map((s) => (
          <motion.span
            variants={item}
            key={s}
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90"
            whileHover={{ y: -2, boxShadow: '0 6px 24px rgba(34,211,238,0.15)' }}
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
