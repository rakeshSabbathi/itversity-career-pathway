
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom h-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="font-bold text-xl text-itv-red">ITVersity</div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="font-medium hover:text-itv-red transition-colors">Features</a>
          <a href="#tracks" className="font-medium hover:text-itv-red transition-colors">Program Tracks</a>
          <a href="#curriculum" className="font-medium hover:text-itv-red transition-colors">Curriculum</a>
          <a href="#mentorship" className="font-medium hover:text-itv-red transition-colors">Mentorship</a>
          <a href="#faq" className="font-medium hover:text-itv-red transition-colors">FAQ</a>
        </div>
        <Button className="bg-itv-red hover:bg-itv-red/90">Schedule Demo Call</Button>
      </div>
    </nav>
  );
};

export default Navbar;
