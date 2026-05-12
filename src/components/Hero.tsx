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
          backgroundImage:
            "url(/images/4b8c218b-7b6d-427a-bf5b-b4dd16bc6957.png)",
        }}
      />

      
      <div className="absolute inset-0 pointer-events-none" />

      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src="/images/mee.jpg"
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

          <div className="flex justify-center mb-12 animate-fade-in">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;