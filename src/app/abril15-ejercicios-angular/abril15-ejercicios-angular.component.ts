import { Loan, ConventionalLoan, calculateInterestOnlyLoanPayment, calculateConventionalLoanPayment } from '../_module/loan';

const interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
console.log(interestOnlyPayment); 

const conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(conventionalPayment); 
