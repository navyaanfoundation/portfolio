import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Events from "@/pages/events";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
FILE 2 of 4 — src/pages/home.tsx
GitHub link to edit: 👉 https://github.com/navyaanfoundation/portfolio/edit/main/src/pages/home.tsx

Replace entire file with this code:

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FocusAreas from "@/components/focus-areas";
import SuccessStories from "@/components/success-stories";
import AboutSection from "@/components/about-section";
import OurWork from "@/components/our-work";
import GetInvolved from "@/components/get-involved";
import GallerySection from "@/components/gallery-section";
import EventHighlight from "@/components/EventHighlight";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FocusAreas />
      <SuccessStories />
      <AboutSection />
      <OurWork />
      <GetInvolved />
      <GallerySection />
      <EventHighlight />
      <BlogSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
