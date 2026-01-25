import { CheckCircle2, Circle } from "lucide-react";
import { ReactNode } from "react";

interface WizardOptionProps {
  title: string;
  subtitle?: string;
  selected: boolean;
  onClick: () => void;
  icon: ReactNode;
  type?: 'radio' | 'checkbox'; // Support both single and multi-select
}

export function WizardOption({ title, subtitle, selected, onClick, icon, type = 'radio' }: WizardOptionProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative flex items-center p-4 mb-3 rounded-xl border-2 cursor-pointer transition-all duration-200 group
        ${selected 
          ? "border-green-600 bg-green-50/30 shadow-sm" 
          : "border-gray-100 hover:border-green-200 hover:bg-gray-50"}
      `}
    >
      {/* Icon Box (Gray background) */}
      <div className={`
        flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 transition-colors
        ${selected ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}
      `}>
        {icon}
      </div>

      {/* Text Content */}
      <div className="flex-grow pr-4">
        <h3 className={`font-bold text-sm md:text-base ${selected ? "text-green-900" : "text-gray-900"}`}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
        )}
      </div>

      {/* Selection Indicator */}
      <div className="flex-shrink-0">
        {selected ? (
          <CheckCircle2 className="w-6 h-6 text-green-600 fill-green-50" />
        ) : (
          <Circle className="w-6 h-6 text-gray-300 group-hover:text-green-400" />
        )}
      </div>
    </div>
  );
}