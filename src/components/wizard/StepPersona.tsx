import { PersonaType } from '@/types';

type Props = {
  onSelect: (persona: PersonaType) => void;
};

export default function StepPersona({ onSelect }: Props) {
  const options = [
    { id: 'business', label: 'Business Owner', sub: 'I have a registered company (LTD/Enterprise)', icon: '🏢' },
    { id: 'freelancer', label: 'Freelancer / Remote', sub: 'I earn via Upwork, Gigs, or Contracts', icon: '💻' },
    { id: 'salary', label: 'Salary Earner', sub: 'I have a 9-5 job', icon: '👔' },
    { id: 'investor', label: 'Investor', sub: 'Crypto, Stocks, Forex', icon: '📈' },
  ] as const;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Who are we helping today?</h2>
        <p className="text-gray-500 mt-2">Select the category that best fits your primary income.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className="flex items-center p-5 border-2 border-gray-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group text-left"
          >
            <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">{opt.icon}</span>
            <div>
              <h3 className="font-bold text-gray-900">{opt.label}</h3>
              <p className="text-sm text-gray-500">{opt.sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}