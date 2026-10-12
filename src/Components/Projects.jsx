export default function Projects({ projects }) {
    return (
      <div id="projects" className="flex flex-col">
        {projects.map((project) => (
          <article
            key={project.number}
            className="border-t border-white/15 py-5 first:border-t-0 sm:py-6"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-xs text-pink-300">
                / {project.number}
              </span>
  
              <span className="text-right text-[10px] tracking-[0.15em] text-white/40 sm:text-xs">
                {project.type}
              </span>
            </div>
  
            <h3 className="mb-2 text-xl font-bold sm:text-2xl">
              {project.name}
            </h3>
  
            <p className="mb-4 max-w-lg text-sm leading-6 text-white/55">
              {project.description}
            </p>
  
            <div className="flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs text-white/70"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    );
  }