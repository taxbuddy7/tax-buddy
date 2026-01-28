'use client';

import { useState } from 'react';
import StepPersona from './steps/StepPersona';
import StepIncome from './steps/StepIncome';
import StepDeductions from './steps/StepDeductions';
import StepResult from './steps/StepResult';
import { TaxProfile, WizardStep } from '@/types';

export default function TaxWizard() {
  const [step, setStep] = useState<WizardStep>(1);
  const [profile, setProfile] = useState<TaxProfile>({
    persona: null,
    paysRent: false,
    hasPension: false,
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => { if (step < totalSteps) setStep((prev) => (prev + 1) as WizardStep); };
  const handleBack = () => { if (step > 1) setStep((prev) => (prev - 1) as WizardStep); };
  
  const update = (data: Partial<TaxProfile>) => setProfile(prev => ({ ...prev, ...data }));

  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300">
      
      {/* --- HEADER --- */}
      <div className="px-8 pt-8 pb-2">
        <div className="flex justify-between items-end mb-3">
          <div className="flex flex-col">
             <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Assessment Progress</span>
             <span className="text-lg font-bold text-gray-900">Question {step} <span className="text-gray-400 text-sm">/ {totalSteps}</span></span>
          </div>
          <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
            {progress}% completed
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-600 transition-all duration-500 ease-out rounded-full shadow-[0_0_10px_rgba(22,163,74,0.5)]" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>

      <div className="px-8 py-6">
        {step === 1 && <StepPersona profile={profile} update={update} />}
        {step === 2 && <StepIncome profile={profile} update={update} />}
        {step === 3 && <StepDeductions profile={profile} update={update} />}
        {step === 4 && <StepResult profile={profile} onRestart={() => setStep(1)} />}
      </div>

      {/* --- FOOTER --- */}
      {step !== 4 && (
        <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100 flex justify-end gap-4">
          <button 
            onClick={handleBack} 
            disabled={step === 1} 
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Back
          </button>
          <button 
            onClick={handleNext} 
            className="px-8 py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 shadow-lg shadow-green-200 active:scale-[0.98] transition-all flex items-center gap-2"
          >
            Continue
          </button>
        </div>
      )}

    </div>
  );
}