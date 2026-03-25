"use client";
import React from 'react';

export default function Navbar({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-800 px-6 md:px-12 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={() => scrollTo('hero')}>
        <img src="/logo.png" alt="Logo" className="h-9 w-auto" />
        <span className="text-xl font-black tracking-tighter text-white">ViaScholar</span>
      </div>

      <div className="hidden lg:flex gap-10 text-[13px] font-black text-gray-500 absolute left-1/2 transform -translate-x-1/2">
        {['Home', 'Scholarships', 'Technology', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className="hover:text-[#0EA5E9] transition uppercase tracking-widest"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button className="text-[14px] font-bold hover:text-[#0EA5E9] transition px-3 text-gray-300">Log In</button>
        <button className="bg-[#0EA5E9] text-white text-[14px] font-black px-6 py-2.5 rounded-xl hover:bg-[#0284C7] transition-all shadow-lg active:scale-95">
          GET STARTED
        </button>
      </div>
    </nav>
  );
}