export default function SuccessStories() {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      title: "Digital Learning Centers",
      description: "Established 15 digital learning centers in rural Rajasthan, impacting over 2,000 students.",
      impact: "2,000+ Students Impacted",
      alt: "Children learning with technology in rural school"
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      title: "Mobile Health Clinics",
      description: "Mobile health units serving remote villages with essential healthcare services and health education.",
      impact: "50+ Villages Served",
      alt: "Healthcare workers providing medical services in rural community"
    },
    {
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      title: "Green Communities",
      description: "Community-led environmental restoration projects creating sustainable green spaces.",
      impact: "10,000+ Trees Planted",
      alt: "Community tree planting and environmental restoration project"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4">Success Stories</h2>
          <p className="text-gray-600 text-lg">Real impact, real change in communities across India</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <img 
                src={story.image} 
                alt={story.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-['Poppins'] font-bold text-xl text-[hsl(207,100%,20%)] mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="flex items-center text-[hsl(158,49%,36%)]">
                  <span className="font-semibold">{story.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
