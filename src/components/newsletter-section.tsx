import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and impact stories.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-[hsl(207,100%,20%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-['Poppins'] font-bold text-3xl mb-4">Stay Connected</h2>
          <p className="text-xl opacity-90 mb-8">
            Subscribe to our newsletter for updates on our initiatives and impact stories
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[hsl(51,100%,50%)]"
                required
              />
              <Button 
                type="submit"
                className="bg-[hsl(51,100%,50%)] text-[hsl(207,100%,20%)] px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
