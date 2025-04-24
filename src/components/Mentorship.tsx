
import React from 'react';
import { MessageSquare, Users, Headphones } from 'lucide-react';

const Mentorship = () => {
  return (
    <section id="mentorship" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Mentorship & Support</h2>
          <p className="text-itv-neutral-grey">
            Personalized guidance to help you succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-itv-light-grey rounded-lg p-6">
            <div className="flex justify-center mb-6">
              <MessageSquare className="h-12 w-12 text-itv-red" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">One-on-One Mentorship</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Regular scheduled sessions with your assigned mentor</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Personalized learning path and progress tracking</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Technical guidance on course concepts and projects</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Industry insights and career path guidance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-itv-light-grey rounded-lg p-6">
            <div className="flex justify-center mb-6">
              <Users className="h-12 w-12 text-itv-red" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Peer Support & Networking</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Access to student community for collaboration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Group projects and study sessions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Alumni network connections</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Industry meetups and networking events</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-itv-light-grey rounded-lg p-6">
            <div className="flex justify-center mb-6">
              <Headphones className="h-12 w-12 text-itv-red" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Career Coaching</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Resume and portfolio review sessions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Mock interview practice with feedback</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Job search strategies and applications</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-2 w-2 bg-itv-red rounded-full mt-2" />
                <span>Employer connections and referrals</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-itv-neutral-grey italic">
              *Available for Career Track and Full Program students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
