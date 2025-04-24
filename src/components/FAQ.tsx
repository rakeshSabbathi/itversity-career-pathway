
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this program designed for?",
    answer: "This program is designed for recent college graduates looking to start a career in data engineering, as well as working professionals who want to transition into data engineering roles. The program is suitable for those with basic programming knowledge who want to specialize in data engineering technologies."
  },
  {
    question: "Can I complete this program while working full-time?",
    answer: "Yes, the program is designed to be flexible. With self-paced learning options and 1-year access to recorded content, many of our students successfully complete the program while working full-time jobs. You can adjust your learning schedule based on your availability."
  },
  {
    question: "What's the difference between Skill Track and Career Track?",
    answer: "The Skill Track focuses on core technical skills like SQL, Python, Spark, and Airflow. The Career Track includes everything in the Skill Track plus cloud technologies, a capstone project, and career services like resume building, mock interviews, and placement assistance."
  },
  {
    question: "Where are the offline classes conducted?",
    answer: "Offline classes are conducted at our campus in Hyderabad. The exact address and directions will be provided upon enrollment in the offline program option."
  },
  {
    question: "What kind of placement support is provided?",
    answer: "Students in the Career Track and Full Program receive comprehensive placement support, including resume and LinkedIn profile optimization, technical and behavioral mock interviews, job search strategy sessions, and direct referrals to our hiring partners. Our placement team works with you until you secure a position."
  },
  {
    question: "Do I receive a certificate upon completion?",
    answer: "Yes, all students receive a certificate of completion after finishing their respective track. Additionally, Career Track and Full Program students receive certificates for their capstone projects."
  },
  {
    question: "Are payment plans available?",
    answer: "Yes, we offer flexible payment plans that allow you to pay in installments. Please contact our admissions team for more details about payment options."
  },
  {
    question: "How do I enroll in the program?",
    answer: "You can start by scheduling a free demo call through the form on this page. Our admissions team will guide you through the enrollment process, help you choose the right track, and answer any questions you may have."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-itv-neutral-grey">
            Find answers to common questions about our Data Engineering Program
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-itv-neutral-grey">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
