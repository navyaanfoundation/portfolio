import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const { toast } = useToast();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            toast({
                title: "Thank you for your message!",
                description: "We will get back to you soon.",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });
        }
    };
    return (_jsx("section", { id: "contact", className: "py-16", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4", children: "Contact Us" }), _jsx("p", { className: "text-gray-600 text-lg", children: "Get in touch to learn more about our work or to get involved" })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsx("div", { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Label, { className: "block text-gray-700 font-semibold mb-2", children: "Name *" }), _jsx(Input, { name: "name", type: "text", value: formData.name, onChange: handleInputChange, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]", required: true })] }), _jsxs("div", { children: [_jsx(Label, { className: "block text-gray-700 font-semibold mb-2", children: "Phone" }), _jsx(Input, { name: "phone", type: "tel", value: formData.phone, onChange: handleInputChange, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]" })] })] }), _jsxs("div", { children: [_jsx(Label, { className: "block text-gray-700 font-semibold mb-2", children: "Email *" }), _jsx(Input, { name: "email", type: "email", value: formData.email, onChange: handleInputChange, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]", required: true })] }), _jsxs("div", { children: [_jsx(Label, { className: "block text-gray-700 font-semibold mb-2", children: "Message *" }), _jsx(Textarea, { name: "message", rows: 5, value: formData.message, onChange: handleInputChange, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]", required: true })] }), _jsx(Button, { type: "submit", className: "btn-primary text-white px-8 py-3 rounded-full font-bold w-full", children: "Send Message" })] }) }), _jsxs("div", { children: [_jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [_jsx("h3", { className: "font-['Poppins'] font-bold text-2xl text-[hsl(207,100%,20%)] mb-6", children: "Get in Touch" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "text-[hsl(158,49%,36%)] text-xl mr-4 mt-1", size: 20 }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: "Address" }), _jsxs("p", { className: "text-gray-600", children: ["Navyaan Foundation", _jsx("br", {}), "Jaipur, Rajasthan, India"] })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Phone, { className: "text-[hsl(158,49%,36%)] text-xl mr-4 mt-1", size: 20 }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: "Phone" }), _jsx("p", { className: "text-gray-600", children: "+91 XXXXX XXXXX" })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Mail, { className: "text-[hsl(158,49%,36%)] text-xl mr-4 mt-1", size: 20 }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: "Email" }), _jsx("p", { className: "text-gray-600", children: "info@navyaanfoundation.org" })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx(Clock, { className: "text-[hsl(158,49%,36%)] text-xl mr-4 mt-1", size: 20 }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: "Office Hours" }), _jsxs("p", { className: "text-gray-600", children: ["Monday - Friday: 9:00 AM - 6:00 PM", _jsx("br", {}), "Saturday: 10:00 AM - 4:00 PM"] })] })] })] }), _jsxs("div", { className: "mt-8", children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Follow Us" }), _jsxs("div", { className: "flex space-x-4", children: [_jsx(Button, { size: "sm", className: "w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors", children: _jsx(Facebook, { size: 16 }) }), _jsx(Button, { size: "sm", className: "w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors", children: _jsx(Instagram, { size: 16 }) }), _jsx(Button, { size: "sm", className: "w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors", children: _jsx(Twitter, { size: 16 }) }), _jsx(Button, { size: "sm", className: "w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors", children: _jsx(Linkedin, { size: 16 }) })] })] })] }), _jsx("div", { className: "mt-8", children: _jsx("div", { className: "bg-gray-200 rounded-xl h-64 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx(MapPin, { className: "text-4xl text-gray-400 mb-2 mx-auto", size: 48 }), _jsx("p", { className: "text-gray-500", children: "Google Map Integration" }), _jsx("p", { className: "text-sm text-gray-400", children: "Jaipur, Rajasthan Location" })] }) }) })] })] })] }) }));
}
