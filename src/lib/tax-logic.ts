import { TaxProfile } from "@/types";

export function calculateTaxStatus(profile: TaxProfile) {
  let status: 'safe' | 'warning' | 'danger' = 'safe';
  let title = '';
  let message = '';
  let actionItem = '';

  // --- 1. BUSINESS OWNER LOGIC (UPDATED FOR 2026 ACT) ---
  if (profile.persona === 'business') {
    if (profile.revenueBand === 'below_25m') {
      status = 'safe';
      title = '🎉 Exempt from Company Tax';
      message = 'Good news! Small companies with <₦25m turnover are exempt from CIT, VAT, and the new Development Levy.';
      actionItem = 'File "Nil Returns" by June 30th.';
    } 
    // UPDATED: Now covers ₦25M - ₦100M (The new exemption zone)
    else if (profile.revenueBand === '25m_100m') {
      status = 'warning';
      title = '⚠️ CIT Exempt, but VAT Applies';
      message = 'Under the 2026 Act, companies with turnover <₦100m pay 0% Income Tax. However, you MUST collect and remit VAT.';
      actionItem = 'Register for VAT immediately.';
    } 
    // UPDATED: Standard Regime is now only for >₦100M
    else {
      status = 'danger';
      title = '🚨 Standard Tax Regime Applies';
      message = 'Your turnover exceeds the new ₦100m threshold. You are liable for 30% CIT and the 4% Development Levy.';
      actionItem = 'Contact a tax consultant.';
    }
  } 
  
  // --- 2. SALARY EARNER (9-5) LOGIC ---
  else if (profile.persona === 'salary') {
    if (profile.annualIncome === 'below_800k') {
      status = 'safe';
      title = '✅ 100% Tax Free';
      message = 'Your income is below the ₦800,000 threshold. No PAYE should be deducted.';
      actionItem = 'Ensure HR is not deducting tax o!.';
    } else {
      status = 'safe';
      title = '✅ You are Compliant (PAYE)';
      message = 'Your employer deducts tax automatically. However, you might be overpaying if you haven\'t claimed reliefs.';
      
      if (profile.paysRent && profile.rentAmount) {
        const relief = Math.min(profile.rentAmount * 0.2, 500000);
        status = 'warning';
        title = '💰 Claim Your Rent Relief';
        message = `You are eligible to deduct ₦${relief.toLocaleString()} from your taxable income. This will reduce your monthly PAYE and increase your salary.`;
        actionItem = 'Submit your Rent Receipt to HR/Finance.';
      } else {
        actionItem = 'Check your payslip for correct deductions.';
      }
    }
  }

  // --- 3. FREELANCER / INVESTOR LOGIC ---
  else {
    if (profile.annualIncome === 'below_800k') {
      status = 'safe';
      title = '✅ 100% Tax Free';
      message = 'Your income is below the new ₦800,000 tax-free threshold. You do not owe tax.';
      actionItem = 'No filing required.';
    } 
    else {
      status = 'warning';
      title = 'ℹ️ Personal Income Tax Due';
      message = 'Since you earn above ₦800k, you must file Personal Income Tax directly via Direct Assessment.';
      actionItem = 'Register for Direct Assessment with SBIR.';

      if (profile.persona === 'investor') {
         title = '📈 Capital Gains Tax Due';
         message = 'Profits from Stocks, Crypto, and Assets are taxable. Crypto is specifically taxed under the 2026 Act.';
         actionItem = 'Calculate Capital Gains Tax.';
      }

      if (profile.paysRent && profile.rentAmount) {
        const relief = Math.min(profile.rentAmount * 0.2, 500000);
        message += `\n\n💰 RENT RELIEF: You can deduct ₦${relief.toLocaleString()} from your taxable income.`;
      }
    }
  }

  return { status, title, message, actionItem };
}