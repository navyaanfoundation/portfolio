import { Lightbulb, Users, Recycle, Handshake, Shield } from "lucide-react";

export default function AboutSection() {
  const values = [
    { icon: Lightbulb, title: "Innovation",     description: "Creative solutions for complex challenges",    bgColor: "bg-[hsl(158,49%,36%)]/10", iconColor: "text-[hsl(158,49%,36%)]" },
    { icon: Users,     title: "Inclusivity",    description: "Ensuring equal opportunities for all",         bgColor: "bg-[hsl(207,100%,20%)]/10", iconColor: "text-[hsl(207,100%,20%)]" },
    { icon: Recycle,   title: "Sustainability", description: "Long-term environmental responsibility",        bgColor: "bg-green-100",              iconColor: "text-green-600" },
    { icon: Handshake, title: "Collaboration",  description: "Working together for greater impact",           bgColor: "bg-yellow-100",             iconColor: "text-yellow-600" },
    { icon: Shield,    title: "Integrity",      description: "Transparent and ethical practices",             bgColor: "bg-blue-100",               iconColor: "text-blue-600" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Text */}
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-6">About Navyaan Foundation</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-['Poppins'] font-bold text-xl text-[hsl(158,49%,36%)] mb-2">Our Mission</h3>
              <p className="text-gray-600">To create sustainable social impact through innovative solutions that empower communities in education, health, and environmental conservation.</p>
            </div>
            <div>
              <h3 className="font-['Poppins'] font-bold text-xl text-[hsl(158,49%,36%)] mb-2">Our Vision</h3>
              <p className="text-gray-600">A world where every individual has access to quality education, healthcare, and a sustainable environment for a better future.</p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="font-['Poppins'] font-bold text-3xl text-center text-[hsl(207,100%,20%)] mb-12">Our Leadership</h3>

          {/* Chief Patron — centered alone */}
          <div className="flex justify-center mb-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[hsl(158,49%,36%)] max-w-xs w-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://i.ibb.co/nMmRffTS/Whats-App-Image-2026-04-26-at-11-54-02.jpg"
                  alt="Mrs. Mamta Sharma - Chief Patron"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <span className="inline-block bg-[hsl(158,49%,36%)] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">Chief Patron</span>
                <h4 className="font-['Poppins'] font-bold text-xl text-[hsl(207,100%,20%)] mb-1">Mrs. Mamta Sharma</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold">Renowned Social Activist</p>
                <p className="text-gray-500 text-sm mt-1">Patron-in-Chief, Navyaan Foundation</p>
              </div>
            </div>
          </div>

          {/* Founder & Co-Founder */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/about_us_mamta.jpg" alt="Mamta Sharma - Founder & Managing Trustee" className="w-full h-full object-cover object-top"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-xl text-[hsl(207,100%,20%)] mb-2">Mamta Sharma</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold">Founder & Managing Trustee</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img src="/attached_assets/raja_yadav.jpeg" alt="Raja Yadav - Co-Founder & Trustee" className="w-full h-full object-cover object-top"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-xl text-[hsl(207,100%,20%)] mb-2">Raja Yadav</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold">Co-Founder & Trustee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="font-['Poppins'] font-bold text-3xl text-center text-[hsl(207,100%,20%)] mb-12">Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1. Vijeta Maheshwari */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/vijeta_maheshwari.jpg" alt="Vijeta Maheshwari" className="w-full h-full object-cover object-center"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Vijeta Maheshwari</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Director – Government Relations & Partnerships</p>
              </div>
            </div>

            {/* 2. Pritika Agrawal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://i.ibb.co/DDPRjrkS/Whats-App-Image-2026-04-26-at-11-52-38.jpg" alt="Pritika Agrawal" className="w-full h-full object-cover object-top"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Pritika Agrawal</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Head of Academic Initiatives</p>
              </div>
            </div>

            {/* 3. Abhishek Verma */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/abhishek_verma.jpg" alt="Abhishek Verma" className="w-full h-full object-cover object-center"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Abhishek Verma</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Chief Programs & Impact Officer</p>
              </div>
            </div>

            {/* 4. Ruchika Badesra */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/ruchika_badesra.jpg" alt="Ruchika Badesra" className="w-full h-full object-cover object-center"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Ruchika Badesra</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Chief Strategy Officer</p>
              </div>
            </div>

            {/* 5. Swati Sharma */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/swati_sharma.jpg" alt="Swati Sharma" className="w-full h-full object-cover object-center"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Swati Sharma</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Chief Operations Officer</p>
              </div>
            </div>

            {/* 6. Deepa Jain */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/deepa_jain.jpg" alt="Deepa Jain" className="w-full h-full object-cover object-center"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Deepa Jain</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Chief Community Engagement Officer</p>
              </div>
            </div>

            {/* 7. Manjusha Mulchandani */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/manjusha_mulchandani.jpg" alt="Manjusha Mulchandani" className="w-full h-full object-cover object-center"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Manjusha Mulchandani</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Chief Events & Outreach Officer</p>
              </div>
            </div>

            {/* 8. Garima Sharma */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/attached_assets/garima_sharma.jpg" alt="Garima Sharma" className="w-full h-full object-cover object-center"/>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-['Poppins'] font-bold text-lg text-[hsl(207,100%,20%)] mb-2">Garima Sharma</h4>
                <p className="text-[hsl(158,49%,36%)] font-semibold text-sm">Social Ambassador</p>
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
