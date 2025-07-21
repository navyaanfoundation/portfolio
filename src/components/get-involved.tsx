import { Button } from "@/components/ui/button";
import { HandHeart, Handshake, Heart, CreditCard, Smartphone, Building } from "lucide-react";

export default function GetInvolved() {
  return (
    <section id="involve" className="py-16 bg-[hsl(158,49%,36%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-4xl mb-4">Get Involved</h2>
          <p className="text-xl opacity-90">Join us in creating positive change in communities across India</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Volunteer */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HandHeart className="text-2xl" size={32} />
            </div>
            <h3 className="font-['Poppins'] font-bold text-2xl mb-4">Volunteer</h3>
            <p className="opacity-90 mb-6">
              Join our team of dedicated volunteers and make a direct impact in communities. Your time and skills can transform lives.
            </p>
            <Button className="bg-white text-[hsl(158,49%,36%)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Become a Volunteer
            </Button>
          </div>
          
          {/* Partner */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="text-2xl" size={32} />
            </div>
            <h3 className="font-['Poppins'] font-bold text-2xl mb-4">Partner With Us</h3>
            <p className="opacity-90 mb-6">
              Collaborate with us to amplify impact. We welcome partnerships with organizations sharing our vision for positive change.
            </p>
            <Button className="bg-white text-[hsl(158,49%,36%)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Explore Partnership
            </Button>
          </div>
          
          {/* Donate */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-2xl" size={32} />
            </div>
            <h3 className="font-['Poppins'] font-bold text-2xl mb-4">Donate</h3>
            <p className="opacity-90 mb-6">
              Your generous contributions help us expand our reach and create sustainable impact in education, health, and environment.
            </p>
            <Button className="bg-[hsl(51,100%,50%)] text-[hsl(207,100%,20%)] px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors">
              Donate Now
            </Button>
          </div>
        </div>
        
        {/* Donation Options */}
        <div className="mt-16 bg-white/10 backdrop-blur rounded-xl p-8">
          <h3 className="font-['Poppins'] font-bold text-2xl text-center mb-8">Support Our Mission</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-['Poppins'] font-bold text-xl mb-4">Online Payment</h4>
              <p className="opacity-90 mb-4">Secure online donations through multiple payment options</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CreditCard className="mr-3" size={20} />
                  <span>Credit/Debit Cards</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="mr-3" size={20} />
                  <span>UPI & Digital Wallets</span>
                </div>
                <div className="flex items-center">
                  <Building className="mr-3" size={20} />
                  <span>Net Banking</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-['Poppins'] font-bold text-xl mb-4">Bank Transfer</h4>
              <p className="opacity-90 mb-4">Direct bank transfer details</p>
              <div className="space-y-2 text-sm">
                <div><strong>Account Name:</strong> Navyaan Foundation</div>
                <div><strong>Account Number:</strong> XXXX-XXXX-XXXX</div>
                <div><strong>IFSC Code:</strong> XXXXXX</div>
                <div><strong>Bank:</strong> [Bank Name]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
