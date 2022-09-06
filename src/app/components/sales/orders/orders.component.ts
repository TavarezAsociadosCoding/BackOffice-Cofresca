import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { OrderService } from 'src/app/core/services/orders/order.service';
import { CurrencyService } from 'src/app/shared/service/currecy.service';
import { orderDB } from '../../../shared/tables/order-list';
// import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import * as moment from 'moment';
import { Orders } from 'src/app/core/models/order/order';
import { ModalAdapterService } from 'src/app/shared/service/modal-adapter.service';
import { OrderModalComponent } from './order-modal/order-modal.component';
//import { Orders } from '../../models/order/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public order:Orders[] = [];
  public temp = [];
  public configuration: Config;
  public columns: Columns[];

  ngOnInit() {
   
     this.configuration = { ...DefaultConfig };
  }
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(private orderService: OrderService,private _modalAdapter: ModalAdapterService) {
   this.orderService.orders().subscribe(
      (orders:Orders[]) => (this.order = orders)
    );

  }

  public dateForm(date:Date):string{
    return moment(date).format("DD/MM/YYYY")
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

  onSumit(item: any){
   this.openModal(item);
  }

  private async openModal( row: any) {
    const modal = this._modalAdapter.open(OrderModalComponent);
    modal.componentInstance.data = row;
    modal.componentInstance.passEntry.subscribe(() => {
      
      this._modalAdapter.close();
    });
  }
}
