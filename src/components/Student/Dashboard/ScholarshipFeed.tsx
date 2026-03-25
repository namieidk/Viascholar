"use client";

import React, { useState } from 'react';
import { ThumbsDown, Heart, MapPin, Clock } from 'lucide-react';
import ScholarshipDetail from './ScholarshipDetails';

// 1. Move the data OUTSIDE the component to fix the scope error
const SCHOLARSHIPS = [
  {
    id: 1,
    title: "CHED Merit Scholarship Program 2026",
    provider: "Commission on Higher Education",
    amount: "₱120,000 / Year",
    match: "98% Match",
    posted: "Posted yesterday",
    location: "National / Davao Region",
    tags: ["Academic", "Priority Courses", "National"]
  },
  {
    id: 2,
    title: "Davao City LGU - EBSU Full Subsidy",
    provider: "Davao City Hall",
    amount: "Full Tuition + Stipend",
    match: "92% Match",
    posted: "2 hours ago",
    location: "Davao City Residents",
    tags: ["Local", "LGU Davao", "Full Grant"]
  },
  {
    id: 3,
    title: "DOST-SEI Undergraduate Scholarship",
    provider: "Department of Science and Technology",
    amount: "₱40,000 / Semester",
    match: "85% Match",
    posted: "3 days ago",
    location: "National",
    tags: ["STEM", "Research", "Science"]
  }
];

export default function ScholarshipFeed() {
  // 2. State to track which scholarship is currently clicked/selected
  const [selectedScholar, setSelectedScholar] = useState<any>(null);

  return (
    <div className="bg-[#0F1D2F] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-xl">
      {/* Header Tabs */}
      <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-6 text-sm font-bold">
          <button className="text-white border-b-2 border-[#0EA5E9] pb-4">Best Matches</button>
          <button className="text-gray-500 hover:text-gray-300 pb-4 transition">Most Recent</button>
          <button className="text-gray-500 hover:text-gray-300 pb-4 transition">Saved</button>
        </div>
      </div>

      {/* The List */}
      <div className="divide-y divide-white/5">
        {SCHOLARSHIPS.map((s) => (
          <div 
            key={s.id} 
            onClick={() => setSelectedScholar(s)}
            className="p-8 hover:bg-white/[0.02] transition-colors group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-[#0EA5E9] transition">
                {s.title}
              </h3>
              <div className="flex gap-3" onClick={(e) => e.stopPropagation()}> 
                {/* stopPropagation prevents opening the detail when clicking icons */}
                <button className="p-2 rounded-full border border-white/10 text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition">
                  <ThumbsDown size={16} />
                </button>
                <button className="p-2 rounded-full border border-white/10 text-gray-500 hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition">
                  <Heart size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
              <span className="text-emerald-400 font-black bg-emerald-400/10 px-2 py-0.5 rounded uppercase tracking-wider">
                {s.match}
              </span>
              <span className="flex items-center gap-1"><Clock size={12}/> {s.posted}</span>
              <span className="flex items-center gap-1"><MapPin size={12}/> {s.location}</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
              This scholarship is matched to your profile based on your current GWA and enrollment at the University of Mindanao. 
              Click to view the specific requirements for the {s.provider} application.
            </p>

            <div className="flex flex-wrap gap-2">
              {s.tags.map(tag => (
                <span key={tag} className="bg-white/5 text-gray-400 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. The Slide-over Detail View */}
      <ScholarshipDetail 
        isOpen={!!selectedScholar} 
        onClose={() => setSelectedScholar(null)} 
        scholarship={selectedScholar}
      />
    </div>
  );
}