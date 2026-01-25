import { TaxProfile } from "@/types";

export function calculateTaxStatus(profile: TaxProfile) {
  let status: 'safe' | 'warning' | 'danger' = 'safe';
  let title = '';
  let message = '';
  let actionItem = '';

  // 1. Business Logic
  if (profile.persona === 'business') {
    if (profile.revenueBand === 'below_25m') {
      status = 'safe';
      title = '🎉 You are Exempt from Company Tax';
      message = 'Under the 2026 Act, small companies with <₦25m turnover pay 0% CIT.';
      actionItem = 'File "Nil Returns" by June 30th to avoid penalties.';
    } else if (profile.revenueBand === '25m_50m') {
      status = 'warning';
      title = '⚠️ No CIT, but VAT Applies';
      message = 'You are exempt from Income Tax, but you MUST collect/remit VAT.';
      actionItem = 'Register for VAT immediately.';
    } else {
      status = 'danger';
      title = '🚨 Standard Tax Regime Applies';
      message = 'You are liable for 27.5% CIT and Education Tax.';
      actionItem = 'Contact a tax consultant.';
    }
  } 
  
  // 2. Freelancer Logic
  else if (profile.persona === 'freelancer') {
    if (profile.annualIncome === 'below_800k') {
      status = 'safe';
      title = '✅ 100% Tax Free';
      message = 'Your income is below the new ₦800k threshold.';
      actionItem = 'No filing required.';
    } else if (profile.incomeSource === 'foreign') {
        status = 'warning';
        title = '🌍 Foreign Income Alert';
        message = 'Foreign income is taxable unless repatriated through official channels.';
        actionItem = 'Check your repatriation compliance.';
    } else {
      status = 'warning';
      title = 'ℹ️ Personal Income Tax Due';
      message = 'You are liable for PIT.';
      
      // Rent Relief Calculation
      if (profile.paysRent && profile.rentAmount) {
        const relief = Math.min(profile.rentAmount * 0.2, 500000);
        message += ` Good news: You can deduct ₦${relief.toLocaleString()} from your taxable income as Rent Relief.`;
      }
      actionItem = 'File via your State Internal Revenue Service.';
    }
  }

  return { status, title, message, actionItem };
}