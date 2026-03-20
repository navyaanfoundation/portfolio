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

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-6">About Navyaan Foundation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-['Poppins'] font-bold text-xl text-[hsl(158,49%,36%)] mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To create sustainable social impact through innovative solutions that empower communities in education, health, and environmental conservation.
                </p>
              </div>
              <div>
                <h3 className="font-['Poppins'] font-bold text-xl text-[hsl(158,49%,36%)] mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every individual has access to quality education, healthcare, and a sustainable environment for a better future.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/attached_assets/about_us_mamta.jpg" 
              alt="Mamta Sharma, Founder of Navyaan Foundation" 
              className="rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl flex flex-col text-center justify-end p-6">
              <h4 className="text-white font-['Poppins'] font-bold text-2xl">Mamta Sharma</h4>
              <p className="text-white/90 font-['Poppins']">Founder - Navyaan Foundation</p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="font-['Poppins'] font-bold text-3xl text-center text-[hsl(207,100%,20%)] mb-12">Our Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mamta Sharma - Founder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/attached_assets/about_us_mamta.jpg" 
                alt="Mamta Sharma - Founder" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-xl text-[hsl(207,100%,20%)] mb-2">Mamta Sharma</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold mb-3">Founder</p>
                <p className="text-gray-600 text-sm">Leading Navyaan Foundation's mission to create sustainable social impact across education, health, and environmental conservation.</p>
              </div>
            </div>

            {/* Raja Yadav - Co-Founder & Trustee */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="/attached_assets/raja_yadav.jpeg" 
                alt="Raja Yadav - Co-Founder & Trustee" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-xl text-[hsl(207,100%,20%)] mb-2">Raja Yadav</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold mb-3">Co-Founder & Trustee</p>
                <p className="text-gray-600 text-sm">Driving strategic initiatives and partnerships to amplify our impact in communities across India.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div>
          <h3 className="font-['Poppins'] font-bold text-3xl text-center text-[hsl(207,100%,20%)] mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`${value.iconColor} text-xl`} size={24} />
                </div>
                <h4 className="font-['Poppins'] font-bold text-[hsl(207,100%,20%)] mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
