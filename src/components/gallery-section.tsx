export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Education workshop being conducted in village school"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Community health screening camp with volunteers and medical staff"
    },
    {
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Community volunteers participating in tree plantation drive"
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Children participating in interactive learning session"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Distribution of educational materials to rural school students"
    },
    {
      src: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Community members attending environmental awareness session"
    },
    {
      src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Mobile health clinic providing medical services in rural area"
    },
    {
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Group photo of volunteers and community members at project completion"
    }
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4">Gallery</h2>
          <p className="text-gray-600 text-lg">Moments from our journey of creating positive change</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt} 
              className="rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
