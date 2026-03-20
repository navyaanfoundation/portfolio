import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">Get in touch to learn more about our work or to get involved</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-['Poppins'] font-bold text-2xl text-[hsl(207,100%,20%)] mb-6 text-center">Get in Touch</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-[hsl(158,49%,36%)] text-xl mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Navyaan Foundation<br />
                      R 60 North Part, Kailashpuri,<br />
                      Manoharpura, Jagatpura,<br />
                      Jaipur - 302027, Rajasthan, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[hsl(158,49%,36%)] text-xl mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      +91 78910 15777<br />
                      +91 98283 90745
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-[hsl(158,49%,36%)] text-xl mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@navyaanfoundation.org<br />
                      navyaanfoundation@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-[hsl(158,49%,36%)] text-xl mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="https://www.facebook.com/share/1AkwcWDt25/" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors">
                    <Facebook size={16} />
                  </Button>
                </a>
                <a href="https://www.instagram.com/navyaanfoundation?igsh=aXl0MGxpdW91eWRn" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors">
                    <Instagram size={16} />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/navyaan-foundation-196b78378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors">
                    <Linkedin size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Google Map Placeholder */}
          <div className="mt-8">
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-4xl text-gray-400 mb-2 mx-auto" size={48} />
                <p className="text-gray-500">Google Map Integration</p>
                <p className="text-sm text-gray-400">Jaipur, Rajasthan Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
