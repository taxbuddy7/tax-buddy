'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white/95 backdrop-blur-md border border-gray-200 rounded-full shadow-lg shadow-gray-200/50 w-full max-w-6xl px-2">
        <div className="flex justify-between items-center h-[72px] px-2 md:px-4">
          
          <div className="flex items-center gap-3 cursor-pointer pl-2">
            
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-md shadow-green-200">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 30 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <g clipPath="url(#clip0_taxbuddy)">
                  <path 
                    d="M2.81055 9.18945H10.5C11.0844 9.18945 11.6416 9.29549 12.1748 9.4668C11.0081 11.0071 10.3105 12.9222 10.3105 15C10.3105 16.2745 10.5718 17.4891 11.043 18.5938L11.1035 18.7363L11.2393 18.708C11.2473 18.7124 11.266 18.7249 11.2959 18.7588C11.3558 18.8267 11.4278 18.9433 11.5088 19.1133C11.6695 19.4506 11.8443 19.9519 12.0283 20.5684C12.3956 21.7989 12.7877 23.4537 13.1611 25.0908C13.5337 26.7244 13.8887 28.3413 14.1797 29.4854C14.3247 30.0556 14.4558 30.5188 14.5684 30.8096C14.6214 30.9465 14.6818 31.0755 14.7529 31.1514C14.7859 31.1865 14.8671 31.2595 14.9844 31.2383C15.0971 31.2178 15.1509 31.1255 15.1719 31.082L15.2021 31.0186L15.1836 30.9512C15.1836 30.9512 15.1833 30.9494 15.1826 30.9463C15.1819 30.943 15.1817 30.9384 15.1807 30.9326C15.1784 30.9204 15.1749 30.904 15.1719 30.8838C15.1657 30.8431 15.159 30.7884 15.1504 30.7207C15.1332 30.5852 15.1119 30.3994 15.0869 30.1709C15.0369 29.7142 14.9719 29.0878 14.8984 28.3477C14.7516 26.867 14.5689 24.9332 14.3896 22.998C14.2104 21.063 14.0355 19.1267 13.9053 17.6406C13.8402 16.8978 13.7856 16.2677 13.748 15.8066C13.7099 15.3391 13.6895 15.0572 13.6895 15C13.6895 11.7965 16.2965 9.18945 19.5 9.18945L27.1895 9.18945V5.81055L19.5 5.81055C17.8639 5.81055 16.3312 6.24694 15 6.99902C13.6695 6.24581 12.1362 5.81055 10.5 5.81055L2.81055 5.81055V9.18945Z" 
                    fill="currentColor" 
                    stroke="currentColor" 
                    strokeWidth="0.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_taxbuddy">
                    <rect width="30" height="30" fill="white" transform="matrix(0 1 1 0 0 0)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">TaxBuddy</span>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            <a href="#" className="px-5 py-2.5 bg-green-600 text-white rounded-full text-sm font-semibold transition-all shadow-sm hover:bg-green-700">
              Explore
            </a>
            <a href="#features" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Features</a>
            <a href="#company" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Company</a>
            <a href="#service" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Service</a>
            <a href="#resources" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">Resources</a>
            <a href="#about" className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium text-sm transition-colors">About us</a>
          </div>
          <div className="hidden lg:flex items-center pr-1">
            <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Free trial
            </button>
          </div>
          <div className="lg:hidden flex items-center pr-2">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 hover:text-green-600 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-3 mx-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-xl flex flex-col gap-2 ring-1 ring-black/5">
            <a href="#" className="block text-center py-2 bg-green-50 text-green-700 font-bold rounded-xl">Explore</a>
            <a href="#features" className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-50 hover:text-green-600 rounded-lg transition-colors">Features</a>
            <a href="#company" className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-50 hover:text-green-600 rounded-lg transition-colors">Company</a>
            <a href="#service" className="block px-4 py-2 text-gray-600 font-medium hover:bg-gray-50 hover:text-green-600 rounded-lg transition-colors">Service</a>
            <button className="w-full bg-green-600 active:bg-green-700 text-white py-3 rounded-xl font-bold mt-2 shadow-sm">
              Free trial
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;