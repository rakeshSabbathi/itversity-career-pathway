
import React from 'react';
import { Computer, Users } from 'lucide-react';

const Learning = () => {
  return (
    <section className="bg-itv-light-grey section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Learning Format</h2>
          <p className="text-itv-neutral-grey">
            Choose the learning style that works best for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex justify-center mb-6">
              <Computer className="h-12 w-12 text-itv-red" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Online Learning</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Live interactive sessions with instructors</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Access to recorded sessions for flexible learning</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Virtual lab environments for hands-on practice</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Online community access for peer collaboration</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Virtual office hours with instructors</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex justify-center mb-6">
              <Users className="h-12 w-12 text-itv-red" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Offline Learning (Hyderabad)</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>In-person classes at our Hyderabad campus</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Direct interaction with instructors and peers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Access to campus resources and facilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Face-to-face mentorship sessions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full" />
                <span>Networking events with industry professionals</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Common Benefits for Both Formats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-itv-red rounded-full" />
                  <span>1-year access to all recorded content</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-itv-red rounded-full" />
                  <span>Online community for peer support</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-itv-red rounded-full" />
                  <span>1:1 mentorship sessions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-itv-red rounded-full" />
                  <span>Career support (for eligible tracks)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
