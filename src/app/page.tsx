'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { Play, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,_#dcfce7_0%,_rgba(255,255,255,0)_60%)] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-semibold tracking-wide mb-8 border border-green-100/50">
            <Info size={14} className="text-green-600" />
            <span>Nigeria Tax Compliance made simple</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Understand Your Tax Obligation <br className="hidden md:block" />
            In Minutes With{" "}
            <span className="relative inline-block px-3 pb-1 pt-0 mx-1 align-bottom">
                <span className="absolute inset-0 border border-green-300 bg-green-50/50 rounded-sm"></span>
               
                <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
              
                <span className="relative text-green-600 z-10">TaxBuddy</span>
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-normal px-4">
            No Jargon. No Expensive Consultants. Just Clear Personalized Guidance On Nigeria 2026 Tax Rules Tailored To Your Income And Employment Status.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-7 py-3.5 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold text-base shadow-lg shadow-green-100/50 transition-all">
              Start free assessment
            </button>
            <button className="flex items-center gap-2 px-7 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 rounded-full font-semibold text-base shadow-sm hover:shadow-md transition-all">
              <Play size={16} fill="black" className="text-black" />
              Watch Demo
            </button>
          </div>
          <div className="mt-16 relative mx-auto max-w-6xl">
            {/* We can get the dashboard screenshot from Ayanfe to place here. What do you think */}
             <div className="">
                <div className="bg-gray-50/60">
                    <span className="text-gray-300 font-bold  uppercase text-xs">[Dashboard placeholder]</span>
                </div>
             </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">$125B</div>
              <div className="text-gray-500 text-base font-medium">Quarterly Volume Traded</div>
            </div>

            <div className="group md:border-l md:border-r border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">₦1.7B+</div>
              <div className="text-gray-500 text-base font-medium">Tax Savings Identified</div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">5Min</div>
              <div className="text-gray-500 text-base font-medium">Average Assessment Time</div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
             <div className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold mb-6">
                Explore
             </div>
             <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Everything You Need
             </h2>
             <p className="text-gray-500 text-lg max-w-xl mx-auto font-normal">
                Simple powerful features designed to demystify Nigeria tax compliance for everyone
             </p>
        </div>
      </section>

    </div>
  );
}