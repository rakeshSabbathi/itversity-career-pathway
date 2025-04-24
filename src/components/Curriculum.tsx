
import React from 'react';
import { Check } from 'lucide-react';

const Curriculum = () => {
  return (
    <section id="curriculum" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Curriculum Breakdown</h2>
          <p className="text-itv-neutral-grey">Comprehensive curriculum designed by industry experts</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-itv-light-grey rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-itv-red">Skill Track Curriculum</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Data Modeling</span>
                    <p className="text-sm text-itv-neutral-grey">Entity relationship diagrams, dimensional modeling, normalization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Data Warehousing</span>
                    <p className="text-sm text-itv-neutral-grey">Star schema, snowflake schema, data marts, ETL processes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">SQL</span>
                    <p className="text-sm text-itv-neutral-grey">Advanced queries, window functions, stored procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Python</span>
                    <p className="text-sm text-itv-neutral-grey">Data manipulation, pandas, numpy, data processing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Apache Spark</span>
                    <p className="text-sm text-itv-neutral-grey">RDDs, DataFrames, SparkSQL, optimization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Apache Airflow</span>
                    <p className="text-sm text-itv-neutral-grey">DAGs, operators, schedulers, workflow management</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-itv-light-grey rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-itv-red">Career Track (Additional Components)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Cloud Platform</span>
                    <p className="text-sm text-itv-neutral-grey">AWS/GCP/Azure (choose one), cloud architecture, services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Capstone Project</span>
                    <p className="text-sm text-itv-neutral-grey">Industry-relevant project built from scratch to deployment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Resume/Profile Building</span>
                    <p className="text-sm text-itv-neutral-grey">Professional resume crafting, LinkedIn optimization</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Mock Interviews</span>
                    <p className="text-sm text-itv-neutral-grey">Technical and behavioral interview preparation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-itv-red mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Placement Support</span>
                    <p className="text-sm text-itv-neutral-grey">Job opportunities, referrals, interview assistance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
