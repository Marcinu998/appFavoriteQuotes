import { Component } from '@angular/core';
import { QUOTES } from './models/database';
import { Quotation } from './models/quotation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCitations';
  // titleNavbar = 'Najlepsze cytaty';

  quotes: Quotation[] = QUOTES;


  // tslint:disable-next-line: typedef
  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
  // tslint:disable-next-line: typedef
  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  // tslint:disable-next-line: typedef
  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }

  // tslint:disable-next-line: typedef
  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation);
  }
}
