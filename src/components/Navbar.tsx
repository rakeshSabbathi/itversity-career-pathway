import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container-custom h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#">
            <img src="/public/ITV_Logo.png" alt="ITVersity Logo" className="h-8 w-auto mr-2" />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="font-medium hover:text-itv-red transition-colors">Features</a>
          <a href="#tracks" className="font-medium hover:text-itv-red transition-colors">Program Tracks</a>
          <a href="#learning-format" className="font-medium hover:text-itv-red transition-colors">Learning Format</a>
          <a href="#faq" className="font-medium hover:text-itv-red transition-colors">FAQ</a>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border-itv-red text-itv-red hover:bg-itv-red hover:text-white">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-itv-red hover:bg-itv-red/90">Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
