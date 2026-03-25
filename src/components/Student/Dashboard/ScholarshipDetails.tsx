"use client";

import React from 'react';
import { X, MapPin, Clock, Award, Users, ShieldCheck, Heart, Flag, ExternalLink } from 'lucide-react';

interface ScholarshipDetailProps {
  isOpen: boolean;
  onClose: () => void;
  scholarship: any;
}

export default function ScholarshipDetail({ isOpen, onClose, scholarship }: ScholarshipDetailProps) {
  if (!scholarship) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-4xl bg-[#0F172A] z-[70] shadow-2xl transform transition-transform duration-500 ease-out border-l border-white/10 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header Actions */}
        <div className="sticky top-0 bg-[#0F172A]/80 backdrop-blur-md p-6 border-b border-white/5 flex justify-between items-center z-10">
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
          <div className="flex gap-3">
             <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#0EA5E9] hover:bg-[#0EA5E9]/10 px-4 py-2 rounded-xl transition">
               <ExternalLink size={14} /> Open in new window
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 p-8 md:p-12 space-y-10 border-r border-white/5">
            <div>
              <h1 className="text-3xl font-black text-white mb-4">{scholarship.title}</h1>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500">
                <span className="text-[#0EA5E9]">Posted {scholarship.posted}</span>
                <span className="flex items-center gap-1"><MapPin size={14}/> {scholarship.location || 'Davao City'}</span>
              </div>
            </div>

            <div className="h-px bg-white/5 w-full" />

            {/* Summary */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-white">Scholarship Summary</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                This program is designed for high-performing students in the Davao Region. 
                Selected scholars will receive full tuition coverage and a monthly living allowance 
                to support their academic journey in priority fields like Information Technology and Engineering.
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <Award size={18} className="text-[#0EA5E9]" />
                  <span className="text-xs font-bold">Full Coverage</span>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Tuition + Stipend</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <Clock size={18} className="text-[#0EA5E9]" />
                  <span className="text-xs font-bold">4 Years</span>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Duration</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white">
                  <Users size={18} className="text-[#0EA5E9]" />
                  <span className="text-xs font-bold">Merit-Based</span>
                </div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Entry Level</p>
              </div>
            </div>

            {/* Skills/Requirements */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-white">Eligibility & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['GWA 1.75+', 'Davao Resident', 'IT Major', 'UM Student', 'STEM Background'].map(skill => (
                  <span key={skill} className="bg-white/5 text-gray-300 px-4 py-2 rounded-xl text-xs font-bold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action Sidebar */}
          <div className="lg:col-span-4 p-8 space-y-8 bg-white/[0.01]">
            <div className="space-y-3">
              <button className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95">
                Apply Now
              </button>
              <button className="w-full border border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/5 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
                <Heart size={16} /> Save Scholarship
              </button>
            </div>

            <button className="flex items-center gap-2 text-gray-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest transition mx-auto">
              <Flag size={14} /> Flag as inappropriate
            </button>

            <div className="h-px bg-white/5" />

            {/* About Provider */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-white">About the Provider</h3>
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck size={16} />
                <span className="text-[11px] font-black uppercase tracking-widest">Verified Institution</span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-300">Davao City LGU</p>
                <p className="text-[10px] text-gray-500">Government Entity • Davao City</p>
              </div>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                Providing educational assistance to deserving Davaoeños since 2012. 
                500+ active scholars currently enrolled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}