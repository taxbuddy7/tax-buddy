'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg shadow-gray-200/50 w-full max-w-6xl px-2">
        <div className="flex justify-between items-center h-[72px] px-2 md:px-4">
          <div className="flex items-center gap-2 cursor-pointer pl-2">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="5" x2="19" y2="5"></line>
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">TaxBuddy</span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            <a href="#" className="px-5 py-2.5 bg-green-600 text-white rounded-full text-sm font-semibold transition-all shadow-sm">
              Explore
            </a>
            <a href="#features" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Features</a>
            <a href="#company" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Company</a>
            <a href="#service" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Service</a>
            <a href="#resources" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Resources</a>
            <a href="#about" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">About us</a>
          </div>

          <div className="hidden lg:flex items-center pr-1">
            <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg">
              Free trial
            </button>
          </div>

          <div className="lg:hidden flex items-center pr-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-xl flex flex-col gap-2">
            <a href="#" className="block text-center py-2 bg-green-50 text-green-700 font-bold rounded-xl">Explore</a>
            <a href="#features" className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-lg">Features</a>
            <a href="#company" className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-lg">Company</a>
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold mt-2">
              Free trial
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;