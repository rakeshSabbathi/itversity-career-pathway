
import React from 'react';

const testimonials = [
  {
    name: "Aishwarya S.",
    role: "Data Engineer at Amazon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    content: "After 3 years as a software developer, I wanted to transition to data engineering. ITVersity's Career Track program equipped me with all the skills I needed. Within two months of completing the program, I landed a job at Amazon with a 40% salary increase.",
  },
  {
    name: "Rahul M.",
    role: "Big Data Engineer at Infosys",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    content: "The hands-on projects and mentorship at ITVersity made a huge difference. The capstone project became the highlight of my portfolio and impressed recruiters. I went from knowing basic Python to implementing complex data pipelines at Infosys.",
  },
  {
    name: "Priya K.",
    role: "Data Solutions Architect at Accenture",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    content: "As a recent graduate, I was struggling to break into the data field. ITVersity's program gave me both the technical skills and confidence I needed. The 1:1 mentorship was invaluable, and the career services team helped me prepare for interviews that led to my role at Accenture.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-itv-light-grey section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Student Success Stories</h2>
          <p className="text-itv-neutral-grey">
            Hear from our alumni who have transformed their careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-itv-red">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-itv-neutral-grey italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
