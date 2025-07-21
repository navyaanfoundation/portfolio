import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsx("section", { id: "home", className: "hero-gradient text-white pt-24 pb-16", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "text-center", children: _jsxs("div", { className: "mb-8", children: [_jsx("div", { className: "w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx("img", { src: "/attached_assets/ChatGPT Image Jul 13, 2025, 04_55_56 PM_1752405975923.png", alt: "Navyaan Foundation Logo", className: "w-full h-full object-contain" }) }), _jsx("h1", { className: "font-['Poppins'] font-bold text-4xl md:text-6xl mb-4", children: "\u0928\u0908 \u0938\u094B\u091A, \u0928\u092F\u093E \u0938\u092B\u0930" }), _jsx("h2", { className: "font-['Poppins'] font-semibold text-2xl md:text-3xl mb-6 text-yellow-200", children: "Innovating Change, Inspiring Progress" }), _jsx("p", { className: "text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8", children: "Navyaan Foundation is committed to innovative solutions for sustainable impact in education, health, and environment." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { onClick: () => scrollToSection("involve"), className: "bg-[hsl(51,100%,50%)] text-[hsl(207,100%,20%)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors", children: "Join Us Today" }), _jsx(Button, { variant: "outline", onClick: () => scrollToSection("about"), className: "border-2 bg-[hsl(207,100%,20%)] border-[hsl(207,100%,20%)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[hsl(207,100%,20%)] transition-colors", children: "Learn More" })] })] }) }) }) }));
}
