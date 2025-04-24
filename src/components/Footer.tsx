
import React from 'react';
import { Phone, Mail, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-itv-dark-grey text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ITVersity</h3>
            <p className="text-itv-light-grey mb-4">
              Transforming careers through industry-relevant data engineering education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-itv-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-white hover:text-itv-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-itv-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-itv-red transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-itv-light-grey hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#tracks" className="text-itv-light-grey hover:text-white transition-colors">Program Tracks</a>
              </li>
              <li>
                <a href="#curriculum" className="text-itv-light-grey hover:text-white transition-colors">Curriculum</a>
              </li>
              <li>
                <a href="#mentorship" className="text-itv-light-grey hover:text-white transition-colors">Mentorship</a>
              </li>
              <li>
                <a href="#faq" className="text-itv-light-grey hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                <span className="text-itv-light-grey">+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                <span className="text-itv-light-grey">info@itversity.com</span>
              </li>
              <li className="flex items-start">
                <Home className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                <span className="text-itv-light-grey">
                  ITVersity Campus, Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-itv-light-grey text-sm">
          <p>&copy; {new Date().getFullYear()} ITVersity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
