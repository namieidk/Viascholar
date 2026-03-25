"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Welcome/Navbar';
import Hero from '../../components/Welcome/Hero';
import ScholarshipList from '../../components/Welcome/Scholarship';
import Footer from '../../components/Welcome/Footer';
import { ScanLine, BellRing, BrainCircuit } from 'lucide-react';

export default function WelcomePage() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans selection:bg-sky-500 selection:text-white">
      <Navbar scrollTo={scrollTo} />
      
      <Hero />

      {/* Technology Section with darker cards */}
      <section id="technology" className="py-24 bg-[#0A0F1C]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BrainCircuit size={32} />} 
            title="Random Forest ML" 
            desc="Predictive analytics engine that matches your profile to Davao City's eligibility rules." 
          />
          <FeatureCard 
            icon={<ScanLine size={32} />} 
            title="OCR Verification" 
            desc="Google Cloud Vision API scans your documents for errors before you hit submit." 
          />
          <FeatureCard 
            icon={<BellRing size={32} />} 
            title="AWS Notifications" 
            desc="Real-time push alerts for upcoming application deadlines in Davao City." 
          />
        </div>
      </section>

      <ScholarshipList />
      
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 bg-[#1E293B] rounded-[2.5rem] border border-gray-800 shadow-xl hover:border-[#0EA5E9] transition-all group">
      <div className="text-[#0EA5E9] mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="font-black text-xl mb-3 tracking-tight text-white">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}