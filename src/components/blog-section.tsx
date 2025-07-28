import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      date: "December 15, 2024",
      title: "National Environment Conclave 2025: Inspiring Change in Jaipur",
      description:
        "Our team played a key role in organizing the 5-day National Environment Conclave at RFWTI, Jaipur, in partnership with CCoNREPCC and the Rajasthan Pollution Control Board. Highlights included Youth Parliament, Innovation to Industry sessions, cultural events, and a grand cyclothon. Grateful for the guidance of Smt. Shailaja Deval, IFS.",
      alt: "Students learning computer skills in new digital center",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      date: "December 10, 2024",
      title: "Honored to Moderate Young Indian Parliament, Jaipur",
      description:
        "Served as Moderator and Jury at the Young Indian Parliament (City Round) organized by CII at Hotel Royal Orchid. Ten students are now selected for the next rounds at Kanpur and Delhi. A truly inspiring experience with young leaders!",
      alt: "Medical professionals conducting health screening at village camp",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      date: "December 5, 2024",
      title: "Shiv Mahabhishek, Divine Bath & Rudraksh Distribution",
      description:
        "Sh. Avinash Gehlot, Cabinet Minister of Social Justice & Empowerment (Rajasthan), led the sacred Shiv Mahabhishek ceremony and distributed rudraksh to devotees, creating a spiritual and memorable event.",
      alt: "Community tree plantation event with volunteers and local residents",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 text-lg">Stay updated with our latest initiatives and success stories</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="mr-2" size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-['Poppins'] font-bold text-xl text-[hsl(207,100%,20%)] mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Button variant="link" className="text-[hsl(158,49%,36%)] font-semibold hover:text-[hsl(207,100%,20%)] transition-colors p-0">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary text-white px-8 py-3 rounded-full font-bold">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
