import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ProgramTracks = () => {
  return (
    <section id="tracks" className="bg-itv-light-grey section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Program Tracks</h2>
          <p className="text-itv-neutral-grey">
            Choose the program that aligns with your career goals
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4">
          {/* Skill Track */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-itv-light-grey flex-shrink-0 w-80">
            <div className="p-6 border-b border-itv-light-grey">
              <h3 className="text-xl font-bold mb-2">Skill Track</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">₹15,000</span>
                <span className="text-itv-neutral-grey line-through ml-2">₹25,000</span>
              </div>
              <p className="text-sm text-itv-neutral-grey">Core data engineering skills</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Data Modeling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Data Warehousing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>SQL</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Python</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Spark</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Airflow</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>1-Year Access</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-6 border-itv-red text-itv-red hover:bg-itv-red hover:text-white">
                Enroll Now
              </Button>
            </div>
          </div>

          {/* Plus Icon */}
          <div className="flex items-center justify-center text-itv-red text-4xl flex-shrink-0">+</div>

          {/* Career Track */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-itv-light-grey flex-shrink-0 w-80">
            <div className="p-6 border-b border-itv-light-grey">
              <h3 className="text-xl font-bold mb-2">Career Track</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">₹25,000</span>
                <span className="text-itv-neutral-grey line-through ml-2">₹40,000</span>
              </div>
              <p className="text-sm text-itv-neutral-grey">Skill Track + Cloud + Career Services</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span className="font-medium">Everything in Skill Track, plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>AWS/GCP/Azure (One Platform)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Capstone Project</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Real-World Case Studies</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Resume/Profile Building</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Mock Interviews</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Placement Assistance</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-6 border-itv-red text-itv-red hover:bg-itv-red hover:text-white">
                Enroll Now
              </Button>
            </div>
          </div>

          {/* Equal Icon */}
          <div className="flex items-center justify-center text-itv-red text-4xl flex-shrink-0">=</div>

          {/* Full Program */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-itv-red transform md:scale-105 translate-x-2 relative flex-shrink-0">
            <div className="absolute top-0 right-0 bg-itv-red text-white text-xs font-bold py-1 px-3 rounded-bl">
              POPULAR
            </div>
            <div className="p-6 border-b border-itv-light-grey">
              <h3 className="text-xl font-bold mb-2">Full Program</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">₹40,000</span>
                <span className="text-itv-neutral-grey line-through ml-2">₹60,000</span>
              </div>
              <p className="text-sm text-itv-neutral-grey">All features of both tracks</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span className="font-medium">All features from both tracks, plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Multiple Cloud Platforms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Advanced Capstone Projects</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>1-on-1 Placement Strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Career Prep</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Priority Job Referrals</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5" />
                  <span>Lifetime Access to Updates</span>
                </li>
              </ul>
              <Button className="w-full mt-6 bg-itv-red hover:bg-itv-red/90">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTracks;
