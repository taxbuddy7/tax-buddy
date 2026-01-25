'use client';

import { useState } from 'react';
import { Briefcase, User, Building2, TrendingUp, Wallet, Globe, Laptop } from 'lucide-react';
import { WizardOption } from './ui/WizardOption';
import StepResult from './StepResult'; // Reuse your logic-based result component
import { TaxProfile, WizardStep } from '@/types'; // Using the types we defined earlier

export default function TaxWizard() {
  const [step, setStep] = useState<WizardStep>(1);
  const [profile, setProfile] = useState<TaxProfile>({
    persona: null,
    paysRent: false,
    hasPension: false,
    // defaults
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => { if (step < totalSteps) setStep((prev) => (prev + 1) as WizardStep); };
  const handleBack = () => { if (step > 1) setStep((prev) => (prev - 1) as WizardStep); };
  
  const update = (data: Partial<TaxProfile>) => setProfile(prev => ({ ...prev, ...data }));

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* --- HEADER (Screenshot Style) --- */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-semibold text-gray-500">
              Question {step} of {totalSteps}
            </span>
            <span className="text-sm font-bold text-green-600">
              {progress}% complete
            </span>
          </div>
          
          {/* Green Progress Bar */}
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Numbered Stepper (1 2 3 4) */}
          <div className="flex justify-between items-center mt-8 px-2 relative">
             {/* Connector Line */}
             <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-100 -z-10" />
             
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num}
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors
                  ${step >= num 
                    ? 'bg-green-600 border-green-600 text-white shadow-md shadow-green-200' 
                    : 'bg-white border-gray-200 text-gray-400'}
                `}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* --- BODY CONTENT --- */}
        <div className="px-8 py-4 min-h-[420px] flex flex-col">
          
          {/* STEP 1: PERSONA */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">Who are we helping?</h2>
              <p className="text-gray-500 text-center text-sm mb-8">Select the option that matches your primary situation.</p>
              
              <WizardOption 
                title="Business Owner" 
                subtitle="I have a registered company (LTD/Enterprise)"
                icon={<Building2 className="w-6 h-6"/>}
                selected={profile.persona === 'business'}
                onClick={() => update({ persona: 'business' })}
              />
              <WizardOption 
                title="Freelancer / Remote" 
                subtitle="I work for myself or foreign clients"
                icon={<Laptop className="w-6 h-6"/>}
                selected={profile.persona === 'freelancer'}
                onClick={() => update({ persona: 'freelancer' })}
              />
              <WizardOption 
                title="Salary Earner" 
                subtitle="I have a 9-5 job"
                icon={<User className="w-6 h-6"/>}
                selected={profile.persona === 'salary'}
                onClick={() => update({ persona: 'salary' })}
              />
              <WizardOption 
                title="Investor" 
                subtitle="Crypto, Stocks, Forex"
                icon={<TrendingUp className="w-6 h-6"/>}
                selected={profile.persona === 'investor'}
                onClick={() => update({ persona: 'investor' })}
              />
            </div>
          )}

          {/* STEP 2: DETAILS (Dynamic based on Persona) */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">Income Details</h2>
              <p className="text-gray-500 text-center text-sm mb-8">This determines your tax band.</p>

              {profile.persona === 'business' ? (
                <>
                  <WizardOption 
                    title="Startups / Small Biz" 
                    subtitle="Revenue Below ₦25 Million"
                    icon={<Wallet className="w-6 h-6"/>}
                    selected={profile.revenueBand === 'below_25m'}
                    onClick={() => update({ revenueBand: 'below_25m' })}
                  />
                  <WizardOption 
                    title="Growing Business" 
                    subtitle="Revenue ₦25M - ₦50M"
                    icon={<TrendingUp className="w-6 h-6"/>}
                    selected={profile.revenueBand === '25m_50m'}
                    onClick={() => update({ revenueBand: '25m_50m' })}
                  />
                  <WizardOption 
                    title="Large Company" 
                    subtitle="Revenue Above ₦50 Million"
                    icon={<Building2 className="w-6 h-6"/>}
                    selected={profile.revenueBand === 'above_50m'}
                    onClick={() => update({ revenueBand: 'above_50m' })}
                  />
                </>
              ) : (
                <>
                   {/* Freelancer/Individual Logic */}
                  <WizardOption 
                    title="Low Income" 
                    subtitle="Below ₦800,000 / year"
                    icon={<Wallet className="w-6 h-6"/>}
                    selected={profile.annualIncome === 'below_800k'}
                    onClick={() => update({ annualIncome: 'below_800k' })}
                  />
                   <WizardOption 
                    title="Middle Income" 
                    subtitle="₦800k - ₦2.5M / year"
                    icon={<User className="w-6 h-6"/>}
                    selected={profile.annualIncome === '800k_2.5m'}
                    onClick={() => update({ annualIncome: '800k_2.5m' })}
                  />
                   <WizardOption 
                    title="High Income" 
                    subtitle="Above ₦2.5M / year"
                    icon={<Briefcase className="w-6 h-6"/>}
                    selected={profile.annualIncome === 'above_2.5m'}
                    onClick={() => update({ annualIncome: 'above_2.5m' })}
                  />
                </>
              )}
            </div>
          )}

          {/* STEP 3: DEDUCTIONS (Multi-Select) */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">Tax Reliefs</h2>
              <p className="text-gray-500 text-center text-sm mb-8">Select items that apply to you to lower your tax.</p>
              
              <WizardOption 
                title="I pay Rent" 
                subtitle="Apply for 20% Rent Relief"
                icon={<Building2 className="w-6 h-6"/>}
                type="checkbox"
                selected={profile.paysRent}
                onClick={() => update({ paysRent: !profile.paysRent })}
              />
              <WizardOption 
                title="Pension" 
                subtitle="I contribute to a pension scheme"
                icon={<Wallet className="w-6 h-6"/>}
                type="checkbox"
                selected={profile.hasPension}
                onClick={() => update({ hasPension: !profile.hasPension })}
              />
            </div>
          )}

          {/* STEP 4: RESULT */}
          {step === 4 && <StepResult profile={profile} onRestart={() => setStep(1)} />}

        </div>

        {/* --- FOOTER (Screenshot Style) --- */}
        {step !== 4 && (
          <div className="px-8 py-6 border-t border-gray-50 flex gap-4 bg-white">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`
                flex-1 py-3.5 rounded-xl font-bold border-2 transition-all
                ${step === 1 
                  ? 'border-gray-100 text-gray-300 cursor-not-allowed' 
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}
              `}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="flex-1 py-3.5 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 shadow-lg shadow-green-200 active:scale-[0.98] transition-all"
            >
              Continue
            </button>
          </div>
        )}

      </div>
    </div>
  );
}