export type PersonaType = 'business' | 'freelancer' | 'salary' | 'investor';

export type TaxProfile = {
  persona: PersonaType | null;
  // Business Specifics
  companyType?: 'ltd' | 'business_name' | 'unregistered';
  revenueBand?: 'below_25m' | '25m_50m' | 'above_50m';
  // Individual Specifics
  incomeSource?: 'local' | 'foreign' | 'digital';
  annualIncome?: 'below_800k' | '800k_2.5m' | 'above_2.5m';
  // Deductions
  paysRent: boolean;
  rentAmount?: number;
  hasPension: boolean;
};

export type WizardStep = 1 | 2 | 3 | 4;