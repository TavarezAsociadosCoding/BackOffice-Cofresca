import { Component, OnInit } from '@angular/core';
import { rateDB } from '../../../shared/tables/rate';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  public rate = []

  constructor() {
    this.rate = rateDB.data;
  }

  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      title: {
        title: 'Currency Title'
      },
      usd: {
        title: 'USD'
      },
      code: {
        title: 'Code'
      },
      rate: {
        title: 'Exchange Rate'
      }
    },
  };


  ngOnInit() {
  }

}
