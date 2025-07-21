import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
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
              <Button size="sm" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(158,49%,36%)] transition-colors">
                <Facebook size={16} />
              </Button>
              <Button size="sm" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(158,49%,36%)] transition-colors">
                <Instagram size={16} />
              </Button>
              <Button size="sm" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(158,49%,36%)] transition-colors">
                <Twitter size={16} />
              </Button>
              <Button size="sm" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(158,49%,36%)] transition-colors">
                <Linkedin size={16} />
              </Button>
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
              <p className="flex items-center">
                <MapPin className="mr-2" size={16} />
                Jaipur, Rajasthan, India
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={16} />
                +91 XXXXX XXXXX
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={16} />
                info@navyaanfoundation.org
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Navyaan Foundation. All rights reserved. | Innovating Change, Inspiring Progress.
          </p>
        </div>
      </div>
    </footer>
  );
}
