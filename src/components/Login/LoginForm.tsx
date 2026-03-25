"use client";

import React, { useState } from 'react';
import { Mail, Lock, LogIn, Eye, EyeOff } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      
      <div className="flex flex-col items-center">
        {/* Logo Container - No background, no hover movement */}
        <div className="w-30 h-30 flex items-center justify-center mb-8 relative">
          <img 
            src="/logo.png" 
            alt="ViaScholar" 
            className="w-full h-full object-contain" 
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome back</h2>
          <p className="text-gray-500 text-sm">Sign in to your ViaScholar account</p>
        </div>

        {/* Form content */}
        <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-sky-400 transition-colors" size={16} />
              <input
                type="email"
                placeholder="you@university.edu.ph"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                className="w-full rounded-2xl py-3.5 pl-11 pr-4 text-white text-sm placeholder:text-gray-600 outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Password
              </label>
              <button type="button" className="text-[10px] text-sky-500 hover:text-sky-400 font-bold uppercase tracking-wider transition">
                Forgot?
              </button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-sky-400 transition-colors" size={16} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                className="w-full rounded-2xl py-3.5 pl-11 pr-11 text-white text-sm placeholder:text-gray-600 outline-none focus:border-sky-500/50 focus:bg-white/[0.06] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-300 transition"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2 ml-1 pb-2">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 rounded border-gray-700 bg-transparent accent-sky-500 cursor-pointer"
            />
            <label htmlFor="remember" className="text-xs text-gray-500 cursor-pointer select-none font-medium">
              Keep me signed in
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-400 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-sky-500/20"
          >
            Sign In <LogIn size={16} />
          </button>

          {/* Divider */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
              <span className="px-4 text-gray-600 bg-[#0A1628]">or</span>
            </div>
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google 
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-8">
          Don't have an account?{' '}
          <button className="text-sky-400 font-bold hover:text-sky-300 transition underline underline-offset-4">
            Register now
          </button>
        </p>
      </div>
    </div>
  );
}