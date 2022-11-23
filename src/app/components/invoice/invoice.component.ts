import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Invoices } from 'src/app/core/models/invoices/invoices';
import { InvoicesService } from 'src/app/core/services/invoices/invoices.service';
import { ExportService } from 'src/app/shared/service/export/export.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  public invoices: Invoices[] = [];
  _dataArray: Array<any> = [];

  constructor(
    private invoiceService: InvoicesService,
    private exportService: ExportService
  ) {
    invoiceService.invoices().subscribe(
      (invoices) => (this.invoices = invoices)

      // this.product_list = this.temporal_list

      // console.log('salida', users.message)
    );
  }

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }

  ngOnInit() {}

  public onSumit(item: any): void {
    this._dataArray = [];

    this._dataArray.push(item.orders);

    this.exportService.exportToCsv(this._dataArray, 'factura', [
      'Export',
      'Cliente',
      'Líneas del pedido / Producto / ID de la base de datos',
      'Líneas del pedido / Cantidad',
    ]);
  }

  public onSumitPresupuesto(item: any): void {
    this._dataArray = [];

    this._dataArray.push(item.orders);

    this.exportService.exportPresupuestoToCsv(
      this._dataArray,
      'presupuesto-factura',
      [
        'Export',
        'Cliente',
        'Líneas del pedido / Producto / ID de la base de datos',
        'Líneas del pedido / Cantidad',
      ]
    );
  }
  // exportToCsv(): void {

  // }
}
