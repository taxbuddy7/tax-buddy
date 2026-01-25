import { Building2, Laptop, User, TrendingUp } from 'lucide-react';
import { WizardOption } from '../ui/WizardOption';
import { TaxProfile } from '@/types';

interface Props {
  profile: TaxProfile;
  update: (data: Partial<TaxProfile>) => void;
}

export default function StepPersona({ profile, update }: Props) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Identify Yourself !</h2>
        <p className="text-gray-500">Select the option that matches your primary situation.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WizardOption 
          title="Business Owner" 
          subtitle="Registered Company (LTD)"
          icon={<Building2 className="w-6 h-6"/>}
          selected={profile.persona === 'business'}
          onClick={() => update({ persona: 'business' })}
        />
        <WizardOption 
          title="Freelancer / Remote" 
          subtitle="Self-employed / Foreign"
          icon={<Laptop className="w-6 h-6"/>}
          selected={profile.persona === 'freelancer'}
          onClick={() => update({ persona: 'freelancer' })}
        />
        <WizardOption 
          title="Salary Earner" 
          subtitle="9-5 Job / PAYE"
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
    </div>
  );
}