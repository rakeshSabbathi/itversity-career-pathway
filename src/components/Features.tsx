
import React from 'react';
import { 
  Computer,
  Clock, 
  Users, 
  ListCheck, 
  MessageSquare,
  Headphones
} from 'lucide-react';

const features = [
  {
    icon: <Computer className="h-8 w-8 text-itv-red" />,
    title: "Structured, Job-Ready Curriculum",
    description: "Master Data Modeling, Warehousing, SQL, Python, Spark, Airflow, and Cloud technologies."
  },
  {
    icon: <Clock className="h-8 w-8 text-itv-red" />,
    title: "1-Year Access to Learning Materials",
    description: "Learn at your own pace with extended access to all course content and resources."
  },
  {
    icon: <Users className="h-8 w-8 text-itv-red" />,
    title: "Hybrid Learning Mode",
    description: "Attend online from anywhere or offline at our Hyderabad campus."
  },
  {
    icon: <ListCheck className="h-8 w-8 text-itv-red" />,
    title: "Real-World Projects",
    description: "Build your portfolio with capstone projects that showcase your skills to employers."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-itv-red" />,
    title: "1:1 Mentorship",
    description: "Receive personalized guidance from industry experts and live doubt-solving sessions."
  },
  {
    icon: <Headphones className="h-8 w-8 text-itv-red" />,
    title: "Career Support",
    description: "Get resume building, mock interviews, and placement assistance from our career team."
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Program Features & Benefits</h2>
          <p className="text-itv-neutral-grey">Everything you need to launch your data engineering career</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-itv-light-grey rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-itv-neutral-grey">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
