import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Loan, ConventionalLoan, calculateInterestOnlyLoanPayment, calculateConventionalLoanPayment } from './_module/loan';
import { ArmaTuPcAppComponent } from './arma-tu-pc-app/arma-tu-pc-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true 
})
export class AppComponent {
  title = 'Abril15_ejerciciosAngular';
  interestOnlyPayment: string | undefined;
  conventionalPayment: string | undefined;

  constructor() {
    const interestOnlyLoan: Loan = { principal: 30000, interestRate: 5 };
    this.interestOnlyPayment = calculateInterestOnlyLoanPayment(interestOnlyLoan);

    const conventionalLoan: ConventionalLoan = { principal: 30000, interestRate: 5, months: 180 };
    this.conventionalPayment = calculateConventionalLoanPayment(conventionalLoan);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ArmaTuPcAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
