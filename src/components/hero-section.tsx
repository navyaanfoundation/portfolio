import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <img
                src="/attached_assets/ChatGPT Image Jul 13, 2025, 04_55_56 PM_1752405975923.png"
                alt="Navyaan Foundation Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="font-['Poppins'] font-bold text-4xl md:text-6xl mb-4">
              नई सोच, नया सफर
            </h1>
            <h2 className="font-['Poppins'] font-semibold text-2xl md:text-3xl mb-6 text-yellow-200">
              Innovating Change, Inspiring Progress
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Navyaan Foundation is committed to innovative solutions for
              sustainable impact in education, health, and environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("involve")}
                className="bg-[hsl(51,100%,50%)] text-[hsl(207,100%,20%)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                Join Us Today
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-2 bg-[hsl(207,100%,20%)] border-[hsl(207,100%,20%)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[hsl(207,100%,20%)] transition-colors"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
