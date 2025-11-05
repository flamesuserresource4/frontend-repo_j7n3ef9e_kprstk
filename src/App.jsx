import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-semibold tracking-tight text-white">
            dev<span className="text-cyan-400">.folio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm hover:bg-cyan-400"
          >
            Hire me
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Contact */}
        <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold sm:text-3xl">Let’s build something great</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              I’m open to freelance projects, collaborations, and full‑time roles. Drop a note and I’ll get back to you.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:dev@example.com"
                className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 hover:bg-white/10"
              >
                dev@example.com
              </a>
              <a
                href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. Built with love, React, and a touch of 3D.
      </footer>
    </div>
  );
}

export default App;
