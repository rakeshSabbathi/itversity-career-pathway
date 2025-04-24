
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !phone) {
      toast.error("Please provide either email or phone number");
      return;
    }
    toast.success("Thanks! We'll contact you shortly for your demo call.");
    setEmail('');
    setPhone('');
  };

  return (
    <section className="bg-gradient-to-b from-white to-itv-light-grey">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="heading-xl text-itv-dark-grey">
              Become a Data Engineer in as Little as <span className="text-itv-red">3 Months</span>
            </h1>
            <p className="text-lg text-itv-neutral-grey">
              Master data engineering with industry-relevant skills, hands-on projects, and job placement support. Online and offline options available.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  placeholder="Your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
                <Input
                  placeholder="Your phone number" 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12"
                />
                <Button type="submit" size="lg" className="w-full bg-itv-red hover:bg-itv-red/90 h-12 text-base font-medium">
                  Schedule Your Free Demo Call
                </Button>
              </div>
              <p className="text-xs text-itv-neutral-grey text-center">
                By submitting, you agree to receive communications from ITVersity.
              </p>
            </form>
          </div>
          <div className="relative hidden md:block animate-fade-in">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Data Engineering Program" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-itv-red">1000+ Successful Students</p>
              <p className="text-sm text-itv-neutral-grey">Join our growing community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
