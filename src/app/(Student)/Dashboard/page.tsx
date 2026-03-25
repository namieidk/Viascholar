"use client";

import React from 'react';
import Sidebar from '../../../components/Student/Dashboard/Sidebar';
import ScholarshipFeed from '../../../components/Student/Dashboard/ScholarshipFeed';
import { Search, Bell, Settings, UserCircle } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white font-sans">
      {/* 1. TOP NAVIGATION (Upwork Style) */}
      <nav className="border-b border-white/5 bg-[#0F1D2F] px-8 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <div className="hidden md:flex gap-6 text-sm font-bold text-gray-400">
            <button className="text-white border-b-2 border-sky-500 pb-1">Find Scholarships</button>
            <button className="hover:text-white transition">My Applications</button>
            <button className="hover:text-white transition">Messages</button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search for scholarships..." 
              className="bg-[#1E293B] border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs w-64 focus:outline-none focus:border-sky-500 transition-all"
            />
          </div>
          <Bell className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          <Settings className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center font-bold text-xs">
            N
          </div>
        </div>
      </nav>

      {/* 2. MAIN CONTENT GRID */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: The Feed (8/12 units) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Banner Hero */}
          <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-md">
              <h2 className="text-2xl font-black mb-2">Boost your matching rate</h2>
              <p className="text-emerald-100 text-sm mb-6">Students with complete profiles see up to 2X more relevant scholarship matches.</p>
              <button className="bg-white text-emerald-900 px-6 py-2 rounded-full font-bold text-xs hover:bg-emerald-50 transition">
                Complete Profile
              </button>
            </div>
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-20">
               <img src="/logo.png" className="w-48 h-48 grayscale brightness-200" alt="bg" />
            </div>
          </div>

          <ScholarshipFeed />
        </div>

        {/* RIGHT COLUMN: Sidebar (4/12 units) */}
        <aside className="lg:col-span-4 space-y-6">
          <Sidebar />
        </aside>

      </main>
    </div>
  );
}