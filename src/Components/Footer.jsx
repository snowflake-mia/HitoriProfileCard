export default function Footer() {
    const socials = [
      { name: "GitHub", url: "https://github.com/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
    ];
  
    return (
      <footer
        id="contact"
        className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-xs text-white/45">
          © 2026 HARU HITORI. MADE WITH CARE.
        </p>
  
        <nav aria-label="Social links" className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/60 transition hover:text-pink-300"
            >
              {social.name} ↗
            </a>
          ))}
        </nav>
      </footer>
    );
  }