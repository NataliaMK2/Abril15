export interface Loan {
    principal: number;
    interestRate: number;
  }
  
  export interface ConventionalLoan extends Loan {
    months: number;
  }
  
  export function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    const { principal, interestRate } = loanTerms;
    const interest = interestRate / 1200; 
    const payment = principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
  }
  
  export function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    const { principal, interestRate, months } = loanTerms;
    const interest = interestRate / 1200; 
    const payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
  }
  