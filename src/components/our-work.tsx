import { CheckCircle } from "lucide-react";

export default function OurWork() {
  return (
    <section id="work" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4">Our Work</h2>
          <p className="text-gray-600 text-lg">Comprehensive programs driving positive change across communities</p>
        </div>
        
        {/* Education Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-['Poppins'] font-bold text-3xl text-[hsl(158,49%,36%)] mb-6">Education Projects</h3>
              <p className="text-gray-600 mb-6">
                Our education initiatives focus on bridging the digital divide and providing quality learning opportunities to underserved communities. Through technology integration and teacher training, we're transforming how children learn and grow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Digital literacy programs for rural schools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Teacher training and capacity building</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Scholarship programs for underprivileged students</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Students engaged in digital learning activities in modern classroom" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Health Initiatives */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="font-['Poppins'] font-bold text-3xl text-[hsl(158,49%,36%)] mb-6">Health Initiatives</h3>
              <p className="text-gray-600 mb-6">
                We believe healthcare is a fundamental right. Our health programs focus on preventive care, health education, and improving access to quality medical services in remote areas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Mobile health clinics for remote villages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Maternal and child health programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Health awareness and prevention campaigns</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare worker providing medical consultation to rural community member" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Environment Programs */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-['Poppins'] font-bold text-3xl text-[hsl(158,49%,36%)] mb-6">Environment Programs</h3>
              <p className="text-gray-600 mb-6">
                Environmental conservation is crucial for sustainable development. Our programs focus on community-led initiatives that promote environmental awareness and sustainable practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Reforestation and tree plantation drives</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Waste management and recycling programs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[hsl(158,49%,36%)] mr-3" size={20} />
                  <span>Renewable energy adoption initiatives</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Community volunteers working together on environmental conservation project" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
