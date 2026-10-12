import portrait from "../assets/hitori.jpg";

export default function Profile() {
  return (
    <section id="about" className="min-w-0">
      <div className="mb-5 flex items-center gap-3 text-xs tracking-[0.25em] text-pink-300">
        <span className="h-px w-8 bg-pink-300" />
        CREATIVE DEVELOPER IN PROGRESS
      </div>

      <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <img
          src={portrait}
          alt="Portrait for the personal portfolio"
          className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/5]"
        />
      </div>

      <p className="mb-2 text-xs tracking-[0.25em] text-pink-300">
        HELLO, I'M
      </p>

      <h1 className="text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl xl:text-7xl">
        HITORI
        <br />
        GOTOH<span className="text-pink-400">.</span>
      </h1>

      <p className="mt-5 max-w-sm text-sm leading-6 text-white/60 sm:text-base">
        Building beautiful things for the web, one project at a time.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-pink-300 px-4 py-3 text-sm font-bold text-black transition hover:bg-white"
        >
          VIEW MY WORK ↘
        </a>

        <a
          href="mailto:your.email@example.com"
          className="rounded-lg border border-white/20 px-4 py-3 text-sm transition hover:border-pink-300 hover:text-pink-300"
        >
          GET IN TOUCH
        </a>
      </div>
    </section>
  );
}