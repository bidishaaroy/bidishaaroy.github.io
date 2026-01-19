import React from "react";

type Project = {
  title: string;
  imageSrc: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "SilverCare",
    imageSrc: "/projects/silver.jpg",
    href: "https://github.com/bidishaaroy/silvercareapp",
  },
  {
    title: "Space Explorer Hub",
    imageSrc: "/projects/spacex.jpg",
    href: "https://cmpt-276-summer-2025.github.io/final-project-11-stars/",
  },
  {
    title: "HungryHungryHippos",
    imageSrc: "/projects/hippos.jpg",
    href: "https://github.com/StormHacks2025-ghostpeppers/HungryHungryHippos",
  },
  {
    title: "Personal Portfolio",
    imageSrc: "/projects/favicon.png",
    href: "https://bidishaaroy.github.io/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-zinc-900">
            My Projects
          </h2>

          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              {/* Hide scrollbar (webkit + firefox + old edge) */}
              <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>

              <div
                className="
                  hide-scrollbar
                  flex gap-6 overflow-x-auto pb-4
                  snap-x snap-mandatory scroll-smooth
                  px-1
                  justify-start
                "
              >
                {projects.map((p) => (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      snap-start shrink-0
                      block
                      focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl
                    "
                  >
                    <div
                      className="
                        bg-zinc-800 border border-zinc-700
                        rounded-2xl shadow-lg
                        transition-all duration-300
                        hover:shadow-2xl hover:-translate-y-0.5
                        p-4
                        w-56 sm:w-60
                      "
                    >
                      {/* Image box */}
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-700">
                        <img
                          src={p.imageSrc}
                          alt={p.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* subtle tint overlay like your site style, but it won't block clicks */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10" />
                      </div>

                      <p className="mt-3 text-center font-semibold text-gray-100">
                        {p.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-sm text-gray-500 text-center mt-3">
                Scroll sideways to see more projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
