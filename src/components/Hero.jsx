import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block scene) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(15,23,42,0)_0%,rgba(15,23,42,0.6)_60%,rgba(15,23,42,0.9)_100%)]" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Available for freelance work
        </span>
        <h1 className="mt-3 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Hi, I’m Your Web Developer
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
          I craft fast, accessible, and delightful web experiences with React, TypeScript, and modern tooling.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-sm hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
