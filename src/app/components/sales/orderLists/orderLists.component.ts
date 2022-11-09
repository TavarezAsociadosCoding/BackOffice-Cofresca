import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { OrderService } from 'src/app/core/services/orders/order.service';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import * as moment from 'moment';
import { OrderInfos, OrdesList } from 'src/app/core/models/order/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orderLists.component.html',
  styleUrls: ['./orderLists.component.scss'],
})
export class OrdersListComponent implements OnInit {
  public order: OrderInfos[] = [];
  public temp = [];
  public configuration: Config;
  public columns: Columns[];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(
    private orderService: OrderService,
  ) {}

  ngOnInit() {
    this.configuration = { ...DefaultConfig };
    this.getTableData();
  }

  private getTableData() {
    this.orderService.ordersList().subscribe((orders: OrdesList) => {
      console.log(orders);
      this.order = orders.orderInfo;
    });
  }

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }

}
