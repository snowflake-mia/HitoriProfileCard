export default function Header() {
    return (
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="text-sm font-black tracking-[0.2em] text-pink-300"
        >
          PINK<span className="text-white">//</span>PROFILE
        </a>
  
        <nav aria-label="Main navigation" className="flex gap-5 text-xs sm:gap-7 sm:text-sm">
          <a href="#about" className="text-white/65 transition hover:text-pink-300">
            About
          </a>
          <a href="#projects" className="text-white/65 transition hover:text-pink-300">
            Projects
          </a>
          <a href="#contact" className="text-white/65 transition hover:text-pink-300">
            Contact
          </a>
        </nav>
  
        <span className="hidden items-center gap-2 text-xs text-white/50 md:flex">
          <span className="h-2 w-2 rounded-full bg-pink-300" />
          OPEN TO PROJECTS
        </span>
      </header>
    );
  }