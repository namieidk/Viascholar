"use client";

import React from 'react';
import RegisterForm from '../../../components/Signup/RegisterForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: '#0A1628' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Depth Glows */}
      <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px]" />

      <Link
        href="/login"
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-sky-400 transition-all text-[10px] font-black uppercase tracking-[0.3em] z-20 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Login
      </Link>

      <div className="relative z-10 w-full max-w-[550px] px-6">
        <RegisterForm />
      </div>

      <p className="absolute bottom-6 text-gray-700 text-[9px] font-black uppercase tracking-[0.4em] z-10">
        ViaScholar Unified System • Registration Portal
      </p>
    </div>
  );
}