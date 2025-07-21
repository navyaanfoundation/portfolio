import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 navbar-backdrop border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/attached_assets/ChatGPT Image Jul 13, 2025, 04_55_56 PM_1752405975923.png" 
              alt="Navyaan Foundation Logo" 
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="font-bold text-[hsl(207,100%,20%)] text-lg font-['Poppins']">Navyaan Foundation</h1>
              <p className="text-xs text-gray-600">नव्यान फाउंडेशन</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">About Us</button>
            <button onClick={() => scrollToSection('work')} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Our Work</button>
            <button onClick={() => scrollToSection('involve')} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Get Involved</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Contact</button>
          </div>
          
          {/* Donate Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="btn-primary text-white px-6 py-2 rounded-full font-semibold">
              Donate Now
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2 space-y-2 bg-white border-t">
            <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-700 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="block py-2 text-gray-700 w-full text-left">About Us</button>
            <button onClick={() => scrollToSection('work')} className="block py-2 text-gray-700 w-full text-left">Our Work</button>
            <button onClick={() => scrollToSection('involve')} className="block py-2 text-gray-700 w-full text-left">Get Involved</button>
            <button onClick={() => scrollToSection('gallery')} className="block py-2 text-gray-700 w-full text-left">Gallery</button>
            <button onClick={() => scrollToSection('blog')} className="block py-2 text-gray-700 w-full text-left">Blog</button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-700 w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
