import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (path === "/" && sectionId) {
      // If we're already on home page, just scroll
      if (location === "/") {
        scrollToSection(sectionId);
      } else {
        // Navigate to home first, then scroll after a short delay
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 navbar-backdrop border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - UPDATED WITH CIRCULAR STYLING */}
          <Link to="/">
            <div className="flex items-center cursor-pointer">
              {/* Circular container with gradient border */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00796B] to-[#002D62] p-[2px] mr-3 shadow-sm">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src="/attached_assets/ChatGPT Image Jul 13, 2025, 04_55_56 PM_1752405975923.png" 
                    alt="Navyaan Foundation Logo" 
                    className="w-11 h-11 object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[hsl(207,100%,20%)] text-lg font-['Poppins']">Navyaan Foundation</h1>
                <p className="text-xs text-gray-600">नव्यान फाउंडेशन</p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick("/", "home")} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Home</button>
            <button onClick={() => handleNavClick("/", "about")} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">About Us</button>
            <button onClick={() => handleNavClick("/", "work")} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Our Work</button>
            <button onClick={() => handleNavClick("/", "involve")} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Get Involved</button>
            <button onClick={() => handleNavClick("/", "gallery")} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Gallery</button>
            {/* FIXED: Events now navigates to /events page */}
            <Link to="/events">
              <button className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors font-medium">Events</button>
            </Link>
            <button onClick={() => handleNavClick("/", "blog")} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Blog</button>
            <button onClick={() => handleNavClick("/", "contact")} className="text-gray-700 hover:text-[hsl(158,49%,36%)] transition-colors">Contact</button>
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
            <button onClick={() => handleNavClick("/", "home")} className="block py-2 text-gray-700 w-full text-left">Home</button>
            <button onClick={() => handleNavClick("/", "about")} className="block py-2 text-gray-700 w-full text-left">About Us</button>
            <button onClick={() => handleNavClick("/", "work")} className="block py-2 text-gray-700 w-full text-left">Our Work</button>
            <button onClick={() => handleNavClick("/", "involve")} className="block py-2 text-gray-700 w-full text-left">Get Involved</button>
            <button onClick={() => handleNavClick("/", "gallery")} className="block py-2 text-gray-700 w-full text-left">Gallery</button>
            {/* FIXED: Events now navigates to /events page */}
            <Link to="/events" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="block py-2 text-gray-700 w-full text-left font-medium">Events</button>
            </Link>
            <button onClick={() => handleNavClick("/", "blog")} className="block py-2 text-gray-700 w-full text-left">Blog</button>
            <button onClick={() => handleNavClick("/", "contact")} className="block py-2 text-gray-700 w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
