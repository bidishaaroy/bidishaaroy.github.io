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
    href: "https://github.com/CMPT-276-SUMMER-2025/final-project-11-stars", 
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
              <div
                className="
                  flex gap-6 overflow-x-auto pb-4
                  snap-x snap-mandatory scroll-smooth
                  px-1
                  [-ms-overflow-style:none] [scrollbar-width:none]
                "
              >
                
                <style>{`
                  div::-webkit-scrollbar { display: none; }
                `}</style>

                {projects.map((p) => (
                  <div key={p.title} className="snap-start shrink-0 flex justify-center">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        block rounded-2xl
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                      "
                    >
                      <div
                        className="
                          bg-zinc-800 border border-zinc-700
                          rounded-2xl shadow-lg
                          hover:shadow-2xl transition-all duration-300
                          hover:-translate-y-0.5
                          p-4
                        "
                      >
                        
                        <div className="w-48 sm:w-56 md:w-60 aspect-square rounded-xl overflow-hidden bg-zinc-700">
                          <img
                            src={p.imageSrc}
                            alt={p.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          
                          <div className="absolute inset-0" />
                        </div>

                        
                        <p className="mt-3 text-center font-semibold text-gray-100">
                          {p.title}
                        </p>
                      </div>
                    </a>
                  </div>
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
