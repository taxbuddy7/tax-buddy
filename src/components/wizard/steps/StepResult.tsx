import { CheckCircle, AlertTriangle, XCircle, Download } from 'lucide-react';
import { calculateTaxStatus } from '@/lib/tax-logic'; 
import { TaxProfile } from '@/types';

export default function StepResult({ profile, onRestart }: { profile: TaxProfile, onRestart: () => void }) {
  const result = calculateTaxStatus(profile);

  const statusConfig = {
    safe: {
      icon: <CheckCircle className="w-16 h-16 text-green-500 mb-4" />,
      bg: 'bg-green-50',
      border: 'border-green-100',
      text: 'text-green-900',
      badge: 'bg-green-200 text-green-800'
    },
    warning: {
      icon: <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />,
      bg: 'bg-yellow-50',
      border: 'border-yellow-100',
      text: 'text-yellow-900',
      badge: 'bg-yellow-200 text-yellow-800'
    },
    danger: {
      icon: <XCircle className="w-16 h-16 text-red-500 mb-4" />,
      bg: 'bg-red-50',
      border: 'border-red-100',
      text: 'text-red-900',
      badge: 'bg-red-200 text-red-800'
    }
  };

  const config = statusConfig[result.status];

  return (
    <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Result Card */}
      <div className={`p-8 rounded-3xl border-2 ${config.bg} ${config.border} mb-6`}>
        <div className="flex flex-col items-center">
          {config.icon}
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${config.badge}`}>
            {result.status === 'safe' ? 'Compliant' : 'Action Required'}
          </span>
          <h2 className={`text-2xl font-extrabold ${config.text} mb-2`}>
            {result.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {result.message}
          </p>
        </div>
      </div>

      {/* Action Box */}
      <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm mb-8 text-left relative overflow-hidden group hover:border-green-200 transition-colors cursor-pointer">
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
          Recommended Next Step
        </h3>
        <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-gray-900">
            {result.actionItem}
            </p>
            <div className="bg-gray-100 p-2 rounded-full group-hover:bg-green-100 transition-colors">
                <Download className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
            </div>
        </div>
      </div>

      <button 
        onClick={onRestart}
        className="text-gray-400 hover:text-gray-900 font-medium text-sm transition-colors"
      >
        Start Over
      </button>
    </div>
  );
}