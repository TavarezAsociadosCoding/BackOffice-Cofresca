import { Component, OnInit } from '@angular/core';
import { invoiceDB } from '../../shared/tables/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  public invoice = []

  constructor() {
    this.invoice = invoiceDB.data;
  }

  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      no: {
        title: 'No'
      },
      invoice: {
        title: 'Invoice'
      },
      date: {
        title: 'Date'
      },
      shipping: {
        title: 'Shipping'
      },
      amount: {
        title: 'Amount'
      },
      tax: {
        title: 'Tax'
      },
      total: {
        title: 'Total'
      }
    },
  };


  ngOnInit() {
  }

}
