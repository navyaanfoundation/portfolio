import { GraduationCap, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FocusAreas() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4">Our Focus Areas</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming communities through innovative solutions in three key areas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-white rounded-xl p-8 card-hover">
            <div className="w-16 h-16 bg-[hsl(158,49%,36%)]/10 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="text-[hsl(158,49%,36%)] text-2xl" size={32} />
            </div>
            <h3 className="font-['Poppins'] font-bold text-2xl text-[hsl(207,100%,20%)] mb-4">Education</h3>
            <p className="text-gray-600 mb-6">
              Empowering communities through quality education and skill development programs that create lasting change.
            </p>
            <Button variant="link" className="text-[hsl(158,49%,36%)] font-semibold hover:text-[hsl(207,100%,20%)] transition-colors p-0">
              Learn More →
            </Button>
          </div>
          
          {/* Health */}
          <div className="bg-white rounded-xl p-8 card-hover">
            <div className="w-16 h-16 bg-[hsl(207,100%,20%)]/10 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-[hsl(207,100%,20%)] text-2xl" size={32} />
            </div>
            <h3 className="font-['Poppins'] font-bold text-2xl text-[hsl(207,100%,20%)] mb-4">Health</h3>
            <p className="text-gray-600 mb-6">
              Improving healthcare access and promoting wellness through innovative health initiatives and awareness programs.
            </p>
            <Button variant="link" className="text-[hsl(158,49%,36%)] font-semibold hover:text-[hsl(207,100%,20%)] transition-colors p-0">
              Learn More →
            </Button>
          </div>
          
          {/* Environment */}
          <div className="bg-white rounded-xl p-8 card-hover">
            <div className="w-16 h-16 bg-[hsl(51,100%,50%)]/20 rounded-full flex items-center justify-center mb-6">
              <Leaf className="text-green-600 text-2xl" size={32} />
            </div>
            <h3 className="font-['Poppins'] font-bold text-2xl text-[hsl(207,100%,20%)] mb-4">Environment</h3>
            <p className="text-gray-600 mb-6">
              Protecting our planet through sustainable practices and environmental conservation initiatives.
            </p>
            <Button variant="link" className="text-[hsl(158,49%,36%)] font-semibold hover:text-[hsl(207,100%,20%)] transition-colors p-0">
              Learn More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
