import React from 'react';
import { Search, BrainCircuit } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-48 pb-32 px-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-sky-900/50 text-[#0EA5E9] px-5 py-2 rounded-full text-[11px] font-black mb-10 tracking-widest uppercase">
          <BrainCircuit size={14} /> Random Forest Matching Active
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white">
          Don't just search. <br/><span className="text-[#0EA5E9]">Get Matched.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Smart matching for Davao City students. Our algorithmic engine predicts your acceptance probability based on your unique profile.
        </p>
        
        <div className="relative max-w-2xl mx-auto group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search Davao City scholarships..."
            className="w-full pl-14 pr-36 py-6 bg-[#1E293B] border-2 border-gray-700 rounded-3xl focus:border-[#0EA5E9] outline-none text-lg text-white shadow-2xl transition-all"
          />
          <button className="absolute right-3 top-3 bottom-3 px-8 bg-[#0EA5E9] text-white rounded-2xl font-black text-sm hover:bg-[#0284C7] transition-all">
            FIND MATCHES
          </button>
        </div>
      </div>
    </section>
  );
}