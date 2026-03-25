"use client";

import React from 'react';
import { TrendingUp, Award, Zap, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Profile Summary Card */}
      <div className="bg-[#0F1D2F] border border-white/5 p-8 rounded-[2rem] shadow-xl">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 bg-sky-500 rounded-full flex items-center justify-center text-3xl font-black mb-4 shadow-lg shadow-sky-500/20">
            N
          </div>
          <h4 className="text-lg font-bold hover:underline cursor-pointer">Namie User</h4>
          <p className="text-gray-500 text-xs font-medium">BS Information Technology</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-end text-[10px] font-black uppercase tracking-widest">
             <span className="text-gray-500">Profile Completion</span>
             <span className="text-sky-400">85%</span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
             <div className="bg-sky-500 w-[85%] h-full rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
          </div>
        </div>
      </div>

      {/* Stats / AI Matching Card */}
      <div className="bg-[#0F1D2F] border border-white/5 p-8 rounded-[2rem] shadow-xl space-y-6">
        <div>
          <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">Scholarship Readiness</h5>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 transition group-hover:bg-emerald-500 group-hover:text-white">
              <Award size={18} />
            </div>
            <div>
              <p className="text-sm font-bold">Document Verified</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Status: Ready</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
              <TrendingUp size={18} />
            </div>
            <div>
              <p className="text-sm font-bold">Matching Activity</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">High (Past 7 days)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connects / Credits Card */}
      <div className="bg-[#0F1D2F] border border-white/5 p-8 rounded-[2rem] shadow-xl flex items-center justify-between">
        <div>
          <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Scholar Points</h5>
          <p className="text-xl font-black">150</p>
        </div>
        <Zap className="text-sky-400" size={24} />
      </div>
    </div>
  );
}