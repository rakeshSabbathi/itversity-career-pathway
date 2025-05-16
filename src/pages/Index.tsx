import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProgramTracks from "@/components/ProgramTracks";
import Statistics from "@/components/Statistics";
import Curriculum from "@/components/Curriculum";
import Learning from "@/components/Learning";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="tracks">
          <ProgramTracks />
        </section>
        <section id="learning-format">
          <h2>Learning Format</h2>
          <p>Details about the learning format.</p>
        </section>
        <Statistics />
        <Curriculum />
        <Learning />
        <Testimonials />
        <CTA />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
