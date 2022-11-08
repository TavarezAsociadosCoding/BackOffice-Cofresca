import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { OrderService } from 'src/app/core/services/orders/order.service';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import * as moment from 'moment';
import { Orders } from 'src/app/core/models/order/order';
import { ModalAdapterService } from 'src/app/shared/service/modal-adapter.service';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orderLists.component.html',
  styleUrls: ['./orderLists.component.scss'],
})
export class OrdersListComponent implements OnInit {
  public order: Orders[] = [];
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
    this.orderService.ordersList().subscribe((orders: Orders[]) => {
      console.log(orders)
      //this.order = orders;
    });
  }

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }

}
