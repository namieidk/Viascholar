"use client";
import React from 'react';
import { Bookmark } from 'lucide-react';

export default function ScholarshipList() {
  const LISTINGS = [
    { title: "EBSU eScholar Davao", amount: "Full Subsidy", provider: "LGU Davao City Hall", tag: "Local Gov" },
    { title: "OWWA EDSP Merit", amount: "₱60,000 / Year", provider: "OWWA Region XI", tag: "National" },
    { title: "Cebuana Foundation", amount: "Academic Grant", provider: "Private Sector", tag: "Private" }
  ];

  return (
    <main id="scholarships" className="max-w-5xl mx-auto py-32 px-6 bg-[#0F172A] border-b border-gray-800/50">
      <h2 className="text-4xl font-black tracking-tight mb-12 uppercase text-white">Discover Opportunities</h2>
      <div className="space-y-6">
        {LISTINGS.map((s, i) => (
          <div key={i} className="group bg-[#1E293B] border border-gray-800 p-8 rounded-[2.5rem] hover:border-[#0EA5E9] transition-all flex flex-col md:flex-row items-center gap-10 shadow-lg">
            <div className="flex-1 space-y-3">
              <span className="bg-gray-800 text-[#0EA5E9] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">{s.tag}</span>
              <h3 className="text-2xl font-black group-hover:text-[#0EA5E9] transition text-white">{s.title}</h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{s.provider}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-black text-white mr-4">{s.amount}</span>
              <button className="p-4 border-2 border-gray-700 rounded-xl hover:bg-gray-800 transition shadow-inner">
                <Bookmark size={20} className="text-gray-500" />
              </button>
              <button className="bg-[#0EA5E9] text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest hover:bg-[#0284C7] transition-all shadow-xl active:scale-95">
                APPLY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}