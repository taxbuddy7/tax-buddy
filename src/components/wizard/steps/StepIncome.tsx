import { Wallet, TrendingUp, Building2, User, Briefcase } from 'lucide-react';
import { WizardOption } from '../ui/WizardOption';
import { TaxProfile } from '@/types';

interface Props {
  profile: TaxProfile;
  update: (data: Partial<TaxProfile>) => void;
}

export default function StepIncome({ profile, update }: Props) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Income Details</h2>
        <p className="text-gray-500">This determines your tax band.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profile.persona === 'business' ? (
          <>
            <WizardOption 
              title="Small Business" 
              subtitle="Turnover < ₦25 Million"
              icon={<Wallet className="w-6 h-6"/>}
              selected={profile.revenueBand === 'below_25m'}
              onClick={() => update({ revenueBand: 'below_25m' })}
            />
            <WizardOption 
              title="Medium Enterprise" 
              subtitle="₦25M - ₦100M (New Exemption)"
              icon={<TrendingUp className="w-6 h-6"/>}
              selected={profile.revenueBand === '25m_100m'} 
              onClick={() => update({ revenueBand: '25m_100m' })}
            />
            <WizardOption 
              title="Large Company" 
              subtitle="Above ₦100 Million"
              icon={<Building2 className="w-6 h-6"/>}
              selected={profile.revenueBand === 'above_100m'}
              onClick={() => update({ revenueBand: 'above_100m' })}
            />
          </>
        ) : (
          <>
            <WizardOption 
              title="Low Income" 
              subtitle="Below ₦800k / year"
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
    </div>
  );
}