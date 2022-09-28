import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SalesRoutingModule } from './sales-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { OrderModalComponent } from './orders/order-modal/order-modal.component';
import { FormsModule } from '@angular/forms';
import { ExportService } from 'src/app/shared/service/export/export.service';

@NgModule({
  declarations: [OrdersComponent, OrderModalComponent, TransactionsComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    FormsModule,
  ],
  providers: [ExportService],
})
export class SalesModule {}
