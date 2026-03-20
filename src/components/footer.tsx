import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[hsl(207,100%,20%)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/attached_assets/ChatGPT Image Jul 13, 2025, 04_55_56 PM_1752405975923.png" 
                alt="Navyaan Foundation Logo" 
                className="w-12 h-12 mr-3"
              />
              <div>
                <h3 className="font-['Poppins'] font-bold text-xl">Navyaan Foundation</h3>
                <p className="text-sm opacity-75">नव्यान फाउंडेशन</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              नई सोच, नया सफर - Innovating Change, Inspiring Progress. 
              Creating sustainable impact in education, health, and environment across India.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1AkwcWDt25/" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(158,49%,36%)] transition-colors">
                  <Facebook size={16} />
                </Button>
              </a>
              <a href="https://www.instagram.com/navyaanfoundation?igsh=aXl0MGxpdW91eWRn" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(158,49%,36%)] transition-colors">
                  <Instagram size={16} />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/navyaan-foundation-196b78378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(158,49%,36%)] transition-colors">
                  <Linkedin size={16} />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-['Poppins'] font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection('work')} className="text-gray-300 hover:text-white transition-colors text-left">Our Work</button></li>
              <li><button onClick={() => scrollToSection('involve')} className="text-gray-300 hover:text-white transition-colors text-left">Get Involved</button></li>
              <li><button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-white transition-colors text-left">News & Updates</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left">Contact Us</button></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-['Poppins'] font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                <span>R 60 North Part, Kailashpuri, Manoharpura, Jagatpura, Jaipur - 302027</span>
              </p>
              <p className="flex items-start">
                <Phone className="mr-2 mt-1 flex-shrink-0" size={16} />
                <span>+91 78910 15777, +91 98283 90745</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={16} />
                info@navyaanfoundation.org
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2026 Navyaan Foundation. All rights reserved. | Innovating Change, Inspiring Progress.
          </p>
        </div>
      </div>
    </footer>
  );
}
