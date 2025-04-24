
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const CTA = () => {
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
    <section className="bg-itv-red text-white section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a free demo call with our admissions team to learn more about the program and get answers to your questions.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Input
              placeholder="Your phone number" 
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button type="submit" size="lg" className="w-full bg-white text-itv-red hover:bg-white/90 h-12 text-base font-medium">
              Schedule Your Free Demo Call
            </Button>
            <p className="text-xs opacity-70">
              By submitting, you agree to receive communications from ITVersity.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
