import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FocusAreas from "@/components/focus-areas";
import SuccessStories from "@/components/success-stories";
import AboutSection from "@/components/about-section";
import OurWork from "@/components/our-work";
import GetInvolved from "@/components/get-involved";
import GallerySection from "@/components/gallery-section";
import BlogSection from "@/components/blog-section";
import NewsletterSection from "@/components/newsletter-section";
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
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
