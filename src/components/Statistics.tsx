import React from 'react';

const Statistics = () => {
  const stats = [
    { value: '400K+', label: 'Trusted Learners', bgColor: 'bg-orange-100', image: '/Trusted_Learners.png' },
    { value: '70K+', label: 'YouTube Subscribers', bgColor: 'bg-red-100', image: '/YouTube_Subscribers.png' },
    { value: '10000+', label: 'Video Lectures', bgColor: 'bg-blue-100', image: '/Video_Lectures.png' },
    { value: '25+ Years', label: 'Experienced Mentors', bgColor: 'bg-purple-100', image: '/Experienced_Mentors.png' },
  ];

  return (
    <section className="text-center py-12 container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">A Platform Trusted by Students</h2>
      <p className="text-lg mb-8 text-gray-600">
        ITVersity aims to transform not just through words, but provide results with numbers!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className={`p-8 w-60 h-56 flex flex-col justify-center items-center rounded-lg shadow-md ${stat.bgColor} relative overflow-hidden group`}>
            <h3 className="text-3xl font-bold mb-2 group-hover:translate-y-[-20px] transition-transform duration-300">{stat.value}</h3>
            <p className="text-gray-700 group-hover:translate-y-[-20px] transition-transform duration-300">{stat.label}</p>
            <img src={stat.image} alt="Stat Image" className="absolute bottom-0 w-20 h-20 transform translate-y-full group-hover:translate-y-[-20%] transition-transform duration-500 ease-in-out" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics; 