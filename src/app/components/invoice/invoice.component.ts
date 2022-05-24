import { Component, OnInit } from '@angular/core';
import { InvoicesService } from 'src/app/core/services/invoices/invoices.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  public invoices = []

  constructor(private invoiceService: InvoicesService) {
    invoiceService.invoices().subscribe(
      (invoices) => (this.invoices = invoices)

      // this.product_list = this.temporal_list

      // console.log('salida', users.message)
    );
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
