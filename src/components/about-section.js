import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Lightbulb, Users, Recycle, Handshake, Shield } from "lucide-react";
export default function AboutSection() {
    const values = [
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Creative solutions for complex challenges",
            bgColor: "bg-[hsl(158,49%,36%)]/10",
            iconColor: "text-[hsl(158,49%,36%)]"
        },
        {
            icon: Users,
            title: "Inclusivity",
            description: "Ensuring equal opportunities for all",
            bgColor: "bg-[hsl(207,100%,20%)]/10",
            iconColor: "text-[hsl(207,100%,20%)]"
        },
        {
            icon: Recycle,
            title: "Sustainability",
            description: "Long-term environmental responsibility",
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            icon: Handshake,
            title: "Collaboration",
            description: "Working together for greater impact",
            bgColor: "bg-yellow-100",
            iconColor: "text-yellow-600"
        },
        {
            icon: Shield,
            title: "Integrity",
            description: "Transparent and ethical practices",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        }
    ];
    return (_jsx("section", { id: "about", className: "py-16 bg-gray-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { children: [_jsx("h2", { className: "font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-6", children: "About Navyaan Foundation" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-['Poppins'] font-bold text-xl text-[hsl(158,49%,36%)] mb-2", children: "Our Mission" }), _jsx("p", { className: "text-gray-600", children: "To create sustainable social impact through innovative solutions that empower communities in education, health, and environmental conservation." })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-['Poppins'] font-bold text-xl text-[hsl(158,49%,36%)] mb-2", children: "Our Vision" }), _jsx("p", { className: "text-gray-600", children: "A world where every individual has access to quality education, healthcare, and a sustainable environment for a better future." })] })] })] }), _jsx("div", { children: _jsx("img", { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600", alt: "NGO team members collaborating on community development projects", className: "rounded-xl shadow-lg" }) })] }), _jsxs("div", { className: "mt-16", children: [_jsx("h3", { className: "font-['Poppins'] font-bold text-3xl text-center text-[hsl(207,100%,20%)] mb-12", children: "Our Core Values" }), _jsx("div", { className: "grid md:grid-cols-5 gap-6", children: values.map((value, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: `w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`, children: _jsx(value.icon, { className: `${value.iconColor} text-xl`, size: 24 }) }), _jsx("h4", { className: "font-['Poppins'] font-bold text-[hsl(207,100%,20%)] mb-2", children: value.title }), _jsx("p", { className: "text-gray-600 text-sm", children: value.description })] }, index))) })] })] }) }));
}
