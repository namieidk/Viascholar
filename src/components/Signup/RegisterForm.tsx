"use client";

import React from 'react';
import Link from 'next/link';
import { User, Mail, Lock, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RegisterForm() {
  return (
    <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      
      <div className="flex flex-col items-center">
        {/* Logo Container */}
        <div className="w-24 h-24 flex items-center justify-center mb-6 relative">
          <img 
            src="/logo.png" 
            alt="ViaScholar" 
            className="w-full h-full object-contain" 
          />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Create Account</h2>
          <p className="text-gray-500 text-sm">Join the Davao City Scholar Network</p>
        </div>

        <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Row 1: Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">First Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-sky-400 transition-colors" size={14} />
                <input type="text" placeholder="First Name" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  className="w-full rounded-2xl py-3 pl-11 pr-4 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-gray-700" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Last Name</label>
              <input type="text" placeholder="Last Name" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                className="w-full rounded-2xl py-3 px-4 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-gray-700" />
            </div>
          </div>

          {/* Row 2: University */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">University</label>
            <div className="relative group">
              <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-sky-400 transition-colors" size={16} />
              <select 
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                className="w-full rounded-2xl py-3 pl-11 pr-4 text-white text-sm outline-none focus:border-sky-500/50 transition-all appearance-none cursor-pointer"
              >
                <option className="bg-[#0A1628]">University of Mindanao</option>
                <option className="bg-[#0A1628]">Ateneo de Davao</option>
                <option className="bg-[#0A1628]">USEP</option>
              </select>
            </div>
          </div>

          {/* Row 3: Email */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-sky-400 transition-colors" size={16} />
              <input type="email" placeholder="you@university.edu.ph" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                className="w-full rounded-2xl py-3 pl-11 pr-4 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-gray-700" />
            </div>
          </div>

          {/* Row 4: Passwords */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-sky-400 transition-colors" size={14} />
                <input type="password" placeholder="••••••••" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  className="w-full rounded-2xl py-3 pl-11 pr-4 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-gray-700" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Confirm</label>
              <input type="password" placeholder="••••••••" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                className="w-full rounded-2xl py-3 px-4 text-white text-sm outline-none focus:border-sky-500/50 transition-all placeholder:text-gray-700" />
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="flex items-start gap-3 ml-1 py-2">
            <div className="mt-1">
               <ShieldCheck size={14} className="text-sky-500" />
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
              By creating an account, you agree to the processing of your data under the <button type="button" className="text-sky-400 hover:underline">Privacy Policy</button>.
            </p>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-400 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-sky-500/20"
          >
            Create Account <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-8">
          Already a member?{' '}
          <Link href="/login" className="text-sky-400 font-bold hover:text-sky-300 transition underline underline-offset-4">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}