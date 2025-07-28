import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function GallerySection() {
  const [showAllImages, setShowAllImages] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const galleryImages = [
    "/attached_assets/gallery_img/1.jpeg",
    "/attached_assets/gallery_img/2.jpg",
    "/attached_assets/gallery_img/3.jpg",
    "/attached_assets/gallery_img/4.jpg",
    "/attached_assets/gallery_img/5.jpeg",
    "/attached_assets/gallery_img/6.jpeg",
    "/attached_assets/gallery_img/7.JPG",
    "/attached_assets/gallery_img/8.jpg",
    "/attached_assets/gallery_img/9.jpg",
    "/attached_assets/gallery_img/10.jpg",
    "/attached_assets/gallery_img/11.jpg",
    "/attached_assets/gallery_img/12.jpeg",
    "/attached_assets/gallery_img/13.jpeg",
    "/attached_assets/gallery_img/14.jpeg",
    "/attached_assets/gallery_img/15.jpeg",
    "/attached_assets/gallery_img/16.jpg",
  ];

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const toggleImages = () => {
    setIsAnimating(true);
    const willCollapse = showAllImages;
    setShowAllImages(!showAllImages);

    if (willCollapse) {
      setTimeout(() => {
        document
          .getElementById("gallery")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const visibleImages = showAllImages
    ? galleryImages
    : galleryImages.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="gallery" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4"
          >
            Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Moments from our journey of creating positive change
          </motion.p>
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden"
          )}
        >
          <AnimatePresence initial={false}>
            {visibleImages.map((image, index) => (
              <motion.div
                key={image}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="aspect-square rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={toggleImages}
            variant="default"
            size="lg"
            className="bg-[hsl(207,100%,20%)] hover:bg-[hsl(207,100%,30%)] font-medium rounded-full px-8"
          >
            {showAllImages ? "Show Less" : "View More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
