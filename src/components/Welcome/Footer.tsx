"use client";
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0F172A] text-white pt-24 pb-12 px-6 border-t border-gray-800/60 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Logo" className="h-8" />
              <span className="text-2xl font-black tracking-tighter">ViaScholar</span>
            </div>
            <p className="text-gray-400 font-medium max-w-sm">
              A Unified Scholarship System for Davao City. Built for the Future of Mindanao Scholars through Machine Learning.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400">Contact Proponents</h5>
            <div className="space-y-3 text-lg font-bold">
              <div className="flex items-center gap-3 hover:text-sky-400 transition cursor-pointer">
                <Mail className="text-sky-400" size={18}/> support@viascholar.ph
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-sky-400" size={18}/> University of Mindanao, Davao City
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom copyright area */}
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em]">
            © 2026 ViaScholar Platform • Incio, Sanao, Fayloga • IT15 Capstone
          </p>
        </div>
      </div>
    </footer>
  );
}