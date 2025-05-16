import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

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

  const handleApplyNow = () => {
    navigate('/signup');
  };

  return (
    <section className="bg-gradient-to-b from-white to-itv-light-grey">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="heading-xl text-itv-dark-grey" style={{ lineHeight: '48px' }}>
              Launch your career as a <br /> top-tier Data Engineer in just
              <span className="text-itv-red" style={{ lineHeight: '55px' }}> 3 Months</span>
            </h1>
            <p className="text-lg text-itv-neutral-grey">
            No coding experience? No problem. We'll train you from the ground up to become a job-ready professional.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            </form>
          <div className="flex gap-4">
            <Button variant="default" className="bg-itv-red hover:bg-itv-red/90" onClick={handleApplyNow}>
              Apply Now
            </Button>
            <Button variant="outline" className="border-itv-red text-itv-red hover:bg-itv-red/10">
              Download Brochure
            </Button>
          </div>
          </div>
          <div className="relative hidden md:block animate-fade-in">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Data Engineering Program" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
