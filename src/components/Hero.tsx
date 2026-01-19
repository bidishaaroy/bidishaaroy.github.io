import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url(/images/4b8c218b-7b6d-427a-bf5b-b4dd16bc6957.png)",
        }}
      />

      
      <div className="absolute inset-0 pointer-events-none" />

      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src="/images/8b8252ee-138b-470d-b0a3-3d0d9699303d.png"
              alt="Bidisha Roy - 3rd Year Computing Science Student"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-slate-950">Bidisha Roy</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in">
            3rd Year Computing Science at Simon Fraser University
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection("projects");
              }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>

            <Button asChild variant="ghost" className="p-0">
              <a
                href="https://drive.google.com/uc?export=download&id=1BvxF09bWP90K1BEShJEGB2Re8tvQ4sPX"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="
                  inline-flex items-center justify-center gap-2 whitespace-nowrap
                  border-2 border-black rounded-md
                  bg-transparent text-black
                  !text-xl !font-semibold
                  !px-8 !py-3
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:bg-black hover:text-white hover:scale-105
                  will-change-transform
                "
              >
                <Download className="mr-2 h-5 w-5 shrink-0" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
