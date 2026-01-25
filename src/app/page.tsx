"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Play, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
}

interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// --- FOOTER DATA ---
const footerData: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "How it works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tax Guide", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Contact Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-transparent">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #dcfce7 0%, #f0fdf4 45%, #ffffff 85%)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-semibold tracking-wide mb-8 border border-green-100/50">
            <Info size={14} className="text-green-600" />
            <span>Nigeria Tax Compliance made simple</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            Understand Your Tax Obligation <br className="hidden md:block" />
            In Minutes With{" "}
            <span className="relative inline-block px-3 pb-1 pt-0 mx-1 align-bottom">
              <span className="absolute inset-0 border border-green-300 bg-green-50/50 rounded-sm"></span>
              {/* Corner Dots */}
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-green-400 z-20 shadow-sm"></span>
              
              <span className="relative text-green-600 z-10">TaxBuddy</span>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 mb-10 leading-relaxed font-normal px-4">
            No Jargon. No Expensive Consultants. Just Clear Personalized
            Guidance On Nigeria 2026 Tax Rules Tailored To Your Income And
            Employment Status.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  
  <Link 
    href="/assessment" 
    className="px-7 py-3.5 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold text-base shadow-lg shadow-green-100/50 transition-all"
  >
    Start free assessment
  </Link>

  <button className="flex items-center gap-2 px-7 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 rounded-full font-semibold text-base shadow-sm hover:shadow-md transition-all">
    <Play size={16} fill="black" className="text-black" />
    Watch Demo
  </button>
</div>

          {/* Dashboard Image */}
          <div className="mt-16 relative mx-auto max-w-6xl">
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-green-100/30 border border-green-50/50">
               <Image
                 src="/hero-bg-image.svg" 
                 alt="TaxBuddy Dashboard Preview"
                 width={1200}
                 height={600}
                 className="w-full h-auto object-cover"
                 priority
               />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
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

      {/* --- EXPLORE / FEATURES INTRO --- */}
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

      {/* --- STATS SECTION --- */}
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

      {/* --- EXPLORE / FEATURES INTRO --- */}
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
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                $125B
              </div>
              <div className="text-gray-500 text-base font-medium">
                Quarterly Volume Traded
              </div>
            </div>

            <div className="group md:border-l md:border-r border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                ₦1.7B+
              </div>
              <div className="text-gray-500 text-base font-medium">
                Tax Savings Identified
              </div>
            </div>

            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                5Min
              </div>
              <div className="text-gray-500 text-base font-medium">
                Average Assessment Time
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold mb-6">
              Explore
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything You Need
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-normal leading-relaxed">
              Simple powerful features designed to demystify Nigeria tax
              compliance for everyone
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Horizontal & Vertical Divider Lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-100 hidden md:block" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-green-100 hidden md:block" />

            <div className="relative p-8 md:p-12 flex flex-col items-center text-center bg-gradient-to-tl from-green-50 to-transparent md:rounded-tl-[3rem] border-b border-gray-100 md:border-none">
              <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/10">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Smart Assessment
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Answer a few simple questions about your income and employment.
                Our system instantly identifies which taxes apply to you.
              </p>
            </div>

            <div className="relative p-8 md:p-12 flex flex-col items-center text-center bg-white border-b border-gray-100 md:border-none">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/10">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Clear Explanations
              </h3>
              <p className="text-gray-500 leading-relaxed">
                No confusing tax jargon. Get plain language explanations of PIT,
                VAT, withholding tax, and what&apos;s changing in 2026.
              </p>
            </div>

            <div className="relative p-8 md:p-12 flex flex-col items-center text-center bg-white border-b md:border-b-0 border-gray-100">
              <div className="w-14 h-14 bg-[#A04E4E] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/10">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Tax Summary Report
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Get a personalized PDF Summary of your tax obligations.
                Download, print, or share with your accountant.
              </p>
            </div>

            <div className="relative p-8 md:p-12 flex flex-col items-center text-center bg-gradient-to-br from-green-50 to-transparent md:rounded-br-[3rem]">
              <div className="w-14 h-14 bg-[#A38E3C] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-900/10">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Smart Reminders
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Never miss a deadline. Get timely notifications for important
                tax dates and compliance requirements.
              </p>
            </div>

            {/* Central Circle Connector */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex justify-center items-center w-28 h-28 bg-gray-50 rounded-full border border-green-100 shadow-sm z-10">
              {/* Inner Circle */}
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-inner">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <g clipPath="url(#clip0_center)">
                    <path
                      d="M2.81055 9.18945H10.5C11.0844 9.18945 11.6416 9.29549 12.1748 9.4668C11.0081 11.0071 10.3105 12.9222 10.3105 15C10.3105 16.2745 10.5718 17.4891 11.043 18.5938L11.1035 18.7363L11.2393 18.708C11.2473 18.7124 11.266 18.7249 11.2959 18.7588C11.3558 18.8267 11.4278 18.9433 11.5088 19.1133C11.6695 19.4506 11.8443 19.9519 12.0283 20.5684C12.3956 21.7989 12.7877 23.4537 13.1611 25.0908C13.5337 26.7244 13.8887 28.3413 14.1797 29.4854C14.3247 30.0556 14.4558 30.5188 14.5684 30.8096C14.6214 30.9465 14.6818 31.0755 14.7529 31.1514C14.7859 31.1865 14.8671 31.2595 14.9844 31.2383C15.0971 31.2178 15.1509 31.1255 15.1719 31.082L15.2021 31.0186L15.1836 30.9512C15.1836 30.9512 15.1833 30.9494 15.1826 30.9463C15.1819 30.943 15.1817 30.9384 15.1807 30.9326C15.1784 30.9204 15.1749 30.904 15.1719 30.8838C15.1657 30.8431 15.159 30.7884 15.1504 30.7207C15.1332 30.5852 15.1119 30.3994 15.0869 30.1709C15.0369 29.7142 14.9719 29.0878 14.8984 28.3477C14.7516 26.867 14.5689 24.9332 14.3896 22.998C14.2104 21.063 14.0355 19.1267 13.9053 17.6406C13.8402 16.8978 13.7856 16.2677 13.748 15.8066C13.7099 15.3391 13.6895 15.0572 13.6895 15C13.6895 11.7965 16.2965 9.18945 19.5 9.18945L27.1895 9.18945V5.81055L19.5 5.81055C17.8639 5.81055 16.3312 6.24694 15 6.99902C13.6695 6.24581 12.1362 5.81055 10.5 5.81055L2.81055 5.81055V9.18945Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_center">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="matrix(0 1 1 0 0 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              {/* Decorative Dots on the ring */}
              <div className="absolute left-0 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full ring-4 ring-white"></div>
              <div className="absolute right-0 translate-x-1/2 w-2 h-2 bg-green-400 rounded-full ring-4 ring-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO TAXBUDDY IS FOR SECTION --- */}
      <section className="py-20 bg-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Who TaxBuddy is For
            </h2>
            <p className="text-gray-500 text-lg font-normal">
              Whether you&apos;re employed, self employed or running a business,
              we&apos;ve got you Covered
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl p-8 bg-gray-50/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {/* image placeholder */}
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  👨🏾‍💻
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Salaried Employees
              </h3>
              <p className="text-gray-500 text-center mb-8 text-sm leading-relaxed">
                Understand your PAYE deductions, exemptions, and if you need to
                file independently
              </p>
              <ul className="space-y-4">
                {[
                  "Personal Income Tax Clarity",
                  "Exemption eligibility",
                  "Side income guidance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[1.25rem]">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-8 bg-gray-50/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {/* image placeholder */}
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-3xl">
                  👩🏾‍💼
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Small Businesses Owners
              </h3>
              <p className="text-gray-500 text-center mb-8 text-sm leading-relaxed">
                Navigate business taxes, VAT, and compliance for formal and
                informal businesses.
              </p>
              <ul className="space-y-4">
                {[
                  "Business tax breakdown",
                  "VAT requirements",
                  "Compliance checklist",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[1.25rem]">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-8 bg-gray-50/80 hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {/* image placeholder */}
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-3xl">
                  🎨
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Freelancers & Gig
              </h3>
              <p className="text-gray-500 text-center mb-8 text-sm leading-relaxed">
                Know which taxes apply to your income and how to stay compliant.
              </p>
              <ul className="space-y-4">
                {[
                  "Withhold tax explained",
                  "Registration requirements",
                  "Filing deadlines",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[1.25rem]">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-600 font-medium text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-20 bg-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              How TaxBuddy Works
            </h2>
            <p className="text-gray-500 text-lg font-normal">
              Get Tax Clarity in three simple steps, No Consultants, No
              Confusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 border border-gray-100/50 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#3F51B5] rounded-xl flex items-center justify-center mb-6 shadow-md shadow-blue-900/10">
                <span className="text-white text-2xl font-bold">?</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Answer Questions
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                Tell us about your income, Employment status and business type.
                Takes just 5 minutes
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#E8F5E9]/50 border border-green-100 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#D32F2F] rounded-xl flex items-center justify-center mb-6 shadow-md shadow-red-900/10">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Get Your Analysis
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                Our system analyzes your situation against 2026 tax rules and
                shows what applies to you.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-gray-100/50 flex flex-col items-center">
              <div className="w-14 h-14 bg-[#AF943E] rounded-xl flex items-center justify-center mb-6 shadow-md shadow-yellow-900/10">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Take Action
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                Follow your personalized checklist with steps, deadlines, and
                where to go for compliance.
              </p>
            </div>
          </div>

          <button className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-full font-bold text-lg shadow-xl shadow-green-700/20 transition-all transform hover:-translate-y-1">
            Start Your Assessment Now
          </button>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold mb-6">
              FAQs
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Frequently Asked Question
            </h2>
            <p className="text-gray-500 font-normal">
              Got question? We&apos;ve got answers.
            </p>
          </div>

          <div className="space-y-4">
            {(
              [
                {
                  q: "Is TaxBuddy really free?",
                  a: "Yes! TaxBuddy is 100% free. Our mission is to make tax compliance accessible to all Nigerians. No hidden fees, no premium tiers.",
                },
                {
                  q: "Does TaxBuddy File taxes for me?",
                  a: "No, we provide the guidance, calculation, and forms you need. You will still need to submit them to the relevant state or federal authority.",
                },
                {
                  q: "Is my information secure?",
                  a: "Absolutely. We do not store your personal financial data permanently. All calculations are performed securely and data is encrypted.",
                },
                {
                  q: "What if my situation is complex?",
                  a: "TaxBuddy covers the most common scenarios for individuals and small businesses. For highly complex corporate structures, we recommend a professional consultant.",
                },
                {
                  q: "How up to date is the tax information?",
                  a: "We update our database immediately when new fiscal policies or Finance Acts are signed into law in Nigeria.",
                },
                {
                  q: "Can i use TaxBuddy for past tax years?",
                  a: "Currently, we focus on the 2025/2026 tax year to ensure maximum compliance with current laws.",
                },
              ] as FAQItem[]
            ).map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={false}
              />
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-10">
          <button className="relative z-10 px-6 py-2.5 bg-[#2E9E82] hover:bg-[#25856e] text-white rounded-full text-sm font-semibold shadow-sm transition-colors">
            Ask a Question
          </button>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              What Our Users Say
            </h2>
            <p className="text-gray-500 font-normal">
              Real Stories from Nigerians who simplified their tax compliance
              with TaxBuddy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {(
              [
                {
                  name: "Chinedu Okafor",
                  quote:
                    "I used to run away from tax discussions because they were so confusing. TaxBuddy broke it down into simple English for me.",
                  image: "avatar.svg",
                },
                {
                  name: "Amina Yusuf",
                  quote:
                    "The analysis tool is a game changer. I found out I was exempt from certain levies I had been worrying about paying.",
                  image: "avatar.svg",
                },
                {
                  name: "Sarah Adebayo",
                  quote:
                    "Finally, a platform that doesn't feel like a government website. It's actually user-friendly and helped me file on time.",
                  image: "avatar.svg",
                },
              ] as Testimonial[]
            ).map((user, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl flex flex-col items-center text-center transition-all bg-gray-50 border border-transparent`}
              >
                <div
                  className={`w-16 h-16 rounded-full overflow-hidden mb-6 border-2 shadow-sm border-white`}
                >
                  <Image
                    src={user.image}
                    alt={user.name}
                    height="64"
                    width="64"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {user.name}
                </h3>
                <p className={`text-sm leading-relaxed text-gray-500`}>
                  &quot;{user.quote}&quot;
                </p>
              </div>
            ))}
          </div>

          <button className="px-8 py-3.5 bg-[#2E9E82] hover:bg-[#25856e] text-white rounded-full font-bold text-lg shadow-lg shadow-green-700/20 transition-all">
            Start Your Assessment Now
          </button>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        {/* NOT SURE HOW TO GO ABOUT THE ARCH */}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 pt-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Ready to simplify <br />
            your taxes?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto font-normal">
            Join thousands of Nigerians who&apos;ve gained tax clarity in
            minutes, No consultants needed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-full font-bold text-base shadow-lg shadow-green-700/20 transition-all hover:-translate-y-1">
              Start free assessment
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 rounded-full font-bold text-base shadow-sm hover:shadow-md transition-all">
              <Play size={18} fill="black" className="text-black" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xl font-bold text-gray-900">TaxBuddy</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                Making Nigerian tax compliance simple, clear, and accessible for
                everyone.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 w-10 h-10">
                  <Image
                    height="40"
                    width="40"
                    src="twitter.svg"
                    alt="Twitter"
                  />
                </a>
                <a href="#" className="text-gray-600 w-10 h-10">
                  <Image
                    height="40"
                    width="40"
                    src="facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="#" className="text-gray-600 w-10 h-10">
                  <Image
                    height="40"
                    width="40"
                    src="linkedin.svg"
                    alt="LinkedIn"
                  />
                </a>
                <a href="#">
                  <Image
                    height="40"
                    width="40"
                    src="instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>

            {footerData.map((col, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-900 mb-6">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

// Accordion Item Component
function AccordionItem({
  question,
  answer,
  isOpen: defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div
      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "bg-gray-50 backdrop-blur-md"
          : "bg-transparent border-b border-gray-100"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span
          className={`font-medium ${isOpen ? "text-gray-900" : "text-gray-600"}`}
        >
          {question}
        </span>
        <div
          className={`p-1 rounded-full ${isOpen ? "bg-white shadow-sm" : ""}`}
        >
          {isOpen ? (
            // Minus Icon
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 12H6"
              />
            </svg>
          ) : (
            // Plus Icon
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          )}
        </div>
      </button>

      <div
        className={`px-5 text-gray-500 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
