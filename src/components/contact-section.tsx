import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast({
        title: "Thank you for your message!",
        description: "We will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl text-[hsl(207,100%,20%)] mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">Get in touch to learn more about our work or to get involved</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="block text-gray-700 font-semibold mb-2">Name *</Label>
                  <Input 
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]"
                    required
                  />
                </div>
                <div>
                  <Label className="block text-gray-700 font-semibold mb-2">Phone</Label>
                  <Input 
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]"
                  />
                </div>
              </div>
              <div>
                <Label className="block text-gray-700 font-semibold mb-2">Email *</Label>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]"
                  required
                />
              </div>
              <div>
                <Label className="block text-gray-700 font-semibold mb-2">Message *</Label>
                <Textarea 
                  name="message"
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(158,49%,36%)]"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="btn-primary text-white px-8 py-3 rounded-full font-bold w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-['Poppins'] font-bold text-2xl text-[hsl(207,100%,20%)] mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-[hsl(158,49%,36%)] text-xl mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Navyaan Foundation<br />
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[hsl(158,49%,36%)] text-xl mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-[hsl(158,49%,36%)] text-xl mr-4 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@navyaanfoundation.org</p>
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
              
              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button size="sm" className="w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors">
                    <Facebook size={16} />
                  </Button>
                  <Button size="sm" className="w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors">
                    <Instagram size={16} />
                  </Button>
                  <Button size="sm" className="w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors">
                    <Twitter size={16} />
                  </Button>
                  <Button size="sm" className="w-10 h-10 bg-[hsl(158,49%,36%)] text-white rounded-full flex items-center justify-center hover:bg-[hsl(207,100%,20%)] transition-colors">
                    <Linkedin size={16} />
                  </Button>
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
      </div>
    </section>
  );
}
