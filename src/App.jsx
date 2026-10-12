import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

const projects = [
  {
    number: "01",
    name: "Pink Profile",
    type: "PERSONAL WEBSITE",
    description:
      "A responsive personal profile with bold typography and a dark aesthetic.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    number: "02",
    name: "Creative Space",
    type: "DESIGN CONCEPT",
    description:
      "A visual concept for presenting creative work in a clean, modern layout.",
    tech: ["UI Design", "Responsive UI"],
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#f3eaf0] px-3 py-4 text-white sm:px-6 sm:py-8">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#080808] shadow-2xl sm:rounded-3xl">
        <Header />

        <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col justify-center gap-8 sm:gap-10">
            <Profile />

            <section>
              <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-pink-300">
                ABOUT ME
              </p>

              <p className="max-w-md text-sm leading-7 text-white/65 sm:text-base">
                I'm a creative beginner exploring frontend development,
                visual design, and the art of building memorable digital
                experiences.
              </p>
            </section>

            <section>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-pink-300">
                CURRENTLY LEARNING
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "JavaScript", "UI Design"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/75"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </section>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-8 sm:gap-10">
            <section>
              <div className="mb-5 flex items-end justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs tracking-[0.3em] text-pink-300">
                    SELECTED WORK
                  </p>
                  <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                    PROJECTS<span className="text-pink-400">.</span>
                  </h2>
                </div>

                <span className="pb-1 text-xs text-white/45">
                  2026 / PORTFOLIO
                </span>
              </div>

              <Projects projects={projects} />
            </section>

            <section className="rounded-xl border border-pink-300/20 bg-pink-300/[0.06] p-5 sm:p-6">
              <p className="mb-2 text-xs tracking-[0.25em] text-pink-300">
                HAVE AN IDEA?
              </p>

              <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                Let's build something.
              </h2>

              <p className="mb-5 text-sm leading-6 text-white/60">
                Looking for a simple, stylish profile website? Let's talk
                about your project.
              </p>

              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-3 rounded-lg bg-pink-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-white"
              >
                CONTACT ME <span aria-hidden="true">↗</span>
              </a>
            </section>

            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
}
