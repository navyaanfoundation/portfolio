import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (_jsx(_Fragment, { children: isVisible && (_jsx(Button, { onClick: scrollToTop, className: "fixed bottom-8 right-8 bg-[hsl(158,49%,36%)] text-white w-12 h-12 rounded-full shadow-lg hover:bg-[hsl(207,100%,20%)] transition-colors z-50", size: "sm", children: _jsx(ArrowUp, { size: 20 }) })) }));
}
