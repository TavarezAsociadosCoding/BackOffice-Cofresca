import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { OrderService } from 'src/app/core/services/orders/order.service';
import { CurrencyService } from 'src/app/shared/service/currecy.service';
import { orderDB } from '../../../shared/tables/order-list';
// import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public order = [];
  public temp = [];
  public configuration: Config;
  public columns: Columns[];
  // public data: Company[] = [];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit() {
     this.columns = [
       { key: 'level', title: 'Level' },
       { key: 'age', title: 'Age' },
       { key: 'company', title: 'Company' },
       { key: 'name', title: 'Name' },
       { key: 'isActive', title: 'STATUS' },
     ];
     this.configuration = { ...DefaultConfig };
  }
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(private orderService: OrderService) {
    orderService.orders().subscribe(
      (orders) => (this.order = orders)

      // this.product_list = this.temporal_list

      // console.log('salida', users.message)
    );
    // this.order = orderDB.list_order;
    // this.order =
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.order = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
