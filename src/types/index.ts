export type PersonaType = 'business' | 'freelancer' | 'salary' | 'investor';

export type TaxProfile = {
  persona: PersonaType | null;

  // --- BUSINESS SPECIFICS ---
  companyType?: 'ltd' | 'business_name' | 'unregistered';
  // UPDATED: Now reflects the 2026 ₦100m Exemption Threshold
  revenueBand?: 'below_25m' | '25m_100m' | 'above_100m'; 

  // --- INDIVIDUAL SPECIFICS ---
  incomeSource?: 'local' | 'foreign' | 'digital';
  annualIncome?: 'below_800k' | '800k_2.5m' | 'above_2.5m';

  // --- DEDUCTIONS ---
  paysRent: boolean;
  rentAmount?: number; // Used for the Rent Relief Calc
  hasPension: boolean;
};

export type WizardStep = 1 | 2 | 3 | 4;