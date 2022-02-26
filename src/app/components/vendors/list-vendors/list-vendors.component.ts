import { Component, OnInit } from '@angular/core';
import { vendorsDB } from '../../../shared/tables/vendor-list';

@Component({
  selector: 'app-list-vendors',
  templateUrl: './list-vendors.component.html',
  styleUrls: ['./list-vendors.component.scss']
})
export class ListVendorsComponent implements OnInit {
  public vendors = [];

  constructor() {
    this.vendors = vendorsDB.data;
  }

  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      vendor: {
        title: 'Vendor',
        type: 'html',
      },
      products: {
        title: 'Products'
      },
      store_name: {
        title: 'Store Name'
      },
      date: {
        title: 'Date'
      },
      balance: {
        title: 'Wallet Balance',
      },
      revenue: {
        title: 'Revenue',
      }
    },
  };

  ngOnInit() {
  }

}
