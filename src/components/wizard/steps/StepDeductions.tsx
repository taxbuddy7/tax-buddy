import { Building2, Wallet } from 'lucide-react';
import { WizardOption } from '../ui/WizardOption';
import { TaxProfile } from '@/types';

interface Props {
  profile: TaxProfile;
  update: (data: Partial<TaxProfile>) => void;
}

export default function StepDeductions({ profile, update }: Props) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">Tax Reliefs</h2>
      <p className="text-gray-500 text-center text-sm mb-8">Select items that apply to you to lower your tax.</p>
      
      {/* RENT LOGIC */}
      <div className="mb-3">
        <WizardOption 
            title="I pay Rent" 
            subtitle="Apply for 20% Rent Relief"
            icon={<Building2 className="w-6 h-6"/>}
            type="checkbox"
            selected={profile.paysRent}
            onClick={() => update({ paysRent: !profile.paysRent })}
        />
        
        {/* Conditional Rent Input */}
        {profile.paysRent && (
            <div className="ml-4 pl-12 -mt-2 mb-4 animate-in slide-in-from-top-2 fade-in duration-300">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Enter Annual Rent (₦)
            </label>
            <input 
                type="number" 
                placeholder="e.g. 1,000,000"
                className="w-full p-3 border-2 border-green-100 rounded-xl focus:border-green-500 focus:ring-green-500 outline-none transition-all text-gray-900 font-medium"
                onChange={(e) => update({ rentAmount: Number(e.target.value) })}
                value={profile.rentAmount || ''}
            />
            <p className="text-xs text-green-600 mt-2 font-medium">
                System will deduct 20% (Max ₦500k) from your taxable income.
            </p>
            </div>
        )}
      </div>

      <WizardOption 
        title="Pension" 
        subtitle="I contribute to a pension scheme"
        icon={<Wallet className="w-6 h-6"/>}
        type="checkbox"
        selected={profile.hasPension}
        onClick={() => update({ hasPension: !profile.hasPension })}
      />
    </div>
  );
}