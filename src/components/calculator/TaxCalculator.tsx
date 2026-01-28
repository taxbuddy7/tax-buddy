'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, RefreshCw, Building2, Wallet, Info } from 'lucide-react';

export default function TaxCalculator() {
  const [income, setIncome] = useState<number | ''>('');
  const [rent, setRent] = useState<number | ''>('');
  const [pension, setPension] = useState<number | ''>('');

  // --- THE 2026 LOGIC ENGINE (CORRECTED) ---
  const result = useMemo(() => {
    const gross = Number(income) || 0;
    const rentVal = Number(rent) || 0;
    const pensionVal = Number(pension) || 0;

    if (gross === 0) {
      return { gross: 0, reliefs: 0, taxable: 0, taxPayable: 0, effectiveRate: 0, rentSavings: 0 };
    }

    // 1. RELIEFS
    // New Law: CRA is abolished. 
    // Rent Relief: 20% of rent, strictly capped at ₦500k.
    const rentRelief = Math.min(rentVal * 0.20, 500000);
    
    // Total Statutory Deductions
    const totalReliefs = rentRelief + pensionVal;

    // 2. CHARGEABLE INCOME
    // We deduct reliefs first to get the "Chargeable Income"
    const chargeableIncome = Math.max(gross - totalReliefs, 0);

    // 3. NEW PROGRESSIVE TAX BANDS (Official 2026 Rates)
    // Source: Nigeria Tax Act 2025
    let tax = 0;
    let remainder = chargeableIncome;

    const bands = [
      { width: 800000, rate: 0.00 },   // 1st ₦800k:   0% (Tax Exempt)
      { width: 2200000, rate: 0.15 },  // Next ₦2.2m: 15% (Income up to 3m)
      { width: 9000000, rate: 0.18 },  // Next ₦9m:   18% (Income up to 12m)
      { width: 13000000, rate: 0.21 }, // Next ₦13m:  21% (Income up to 25m)
      { width: 25000000, rate: 0.23 }, // Next ₦25m:  23% (Income up to 50m)
      { width: Infinity, rate: 0.25 }, // Above ₦50m: 25% (High Net Worth)
    ];

    for (const band of bands) {
      if (remainder <= 0) break;
      const taxableAtThisBand = Math.min(remainder, band.width);
      tax += taxableAtThisBand * band.rate;
      remainder -= taxableAtThisBand;
    }

    return {
      gross,
      reliefs: totalReliefs,
      taxable: chargeableIncome,
      taxPayable: tax,
      effectiveRate: (tax / gross) * 100,
      rentSavings: rentRelief
    };

  }, [income, rent, pension]);

  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col md:flex-row overflow-hidden">
      
      {/* --- INPUTS --- */}
      <div className="p-8 md:w-1/2 flex flex-col justify-between border-r border-gray-100">
        <div>
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-green-600 text-sm font-semibold mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back Home
          </Link>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-green-600" />
            2026 Tax Estimator
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            <b>Updated Rule:</b> Rent Relief is capped at ₦500k. The first ₦800k of your income is 0% tax-free.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Annual Gross Income</label>
              <input 
                type="number" 
                value={income}
                onChange={(e) => setIncome(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder="₦ 0.00"
                className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-semibold text-gray-900 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex justify-between">
                <span>Annual Rent Paid</span>
              </label>
              <div className="relative">
                <input 
                  type="number" 
                  value={rent}
                  onChange={(e) => setRent(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="₦ 0.00"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-semibold text-gray-900 transition-all"
                />
              </div>
              <p className="text-[11px] text-gray-400 mt-1">20% Deduction (Max ₦500,000).</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Pension Contribution</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={pension}
                  onChange={(e) => setPension(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="₦ 0.00"
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none font-semibold text-gray-900 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => { setIncome(''); setRent(''); setPension(''); }}
            className="flex items-center text-xs font-bold text-gray-400 hover:text-red-500 transition-colors"
          >
            <RefreshCw className="w-3 h-3 mr-1.5" /> Reset
          </button>
        </div>
      </div>

      {/* --- RESULTS --- */}
      <div className="bg-gray-50 md:w-1/2 p-8 flex flex-col justify-center">
        
        <div className="space-y-6">
          
          {/* Main Number */}
          <div className="text-center">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Estimated 2026 Tax</span>
            <div className="text-4xl font-extrabold text-gray-900 mt-2 mb-1">
              ₦ {result.taxPayable.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <div className="text-sm font-medium text-gray-500">
              Effective Rate: <span className="text-gray-900">{result.effectiveRate.toFixed(1)}%</span>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Gross Income</span>
              <span className="font-semibold text-gray-900">₦ {result.gross.toLocaleString()}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center gap-1">
                 Total Reliefs
                 <div className="group relative">
                   <Info className="w-3 h-3 text-gray-400 cursor-help"/>
                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-800 text-white text-xs p-2 rounded hidden group-hover:block">
                     Rent Relief + Pension
                   </div>
                 </div>
              </span>
              <span className="font-semibold text-green-600">- ₦ {result.reliefs.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500 flex items-center gap-1">
                 Tax-Free Band (0%)
              </span>
              <span className="font-semibold text-gray-400">First ₦ 800,000</span>
            </div>
            
            <div className="h-px bg-gray-100 my-1" />
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Chargeable Income</span>
              <span className="font-bold text-gray-900">₦ {result.taxable.toLocaleString()}</span>
            </div>
          </div>

          {/* Alerts */}
          {result.rentSavings > 0 ? (
            <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex gap-3 items-start">
              <Building2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-green-800 text-sm">Rent Relief Active</h4>
                <p className="text-xs text-green-700 leading-snug mt-1">
                  You saved <strong>₦{result.rentSavings.toLocaleString()}</strong> in taxable income.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 border border-gray-200 p-4 rounded-xl flex gap-3 items-start opacity-75">
               <Wallet className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
               <div>
                <h4 className="font-bold text-gray-600 text-sm">No Rent Entered</h4>
                <p className="text-xs text-gray-500 leading-snug mt-1">
                  Enter your rent to claim up to ₦500k relief.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}