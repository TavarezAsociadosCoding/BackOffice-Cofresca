import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ReOrders } from 'src/app/core/models/order/order';
import { ExportService } from 'src/app/shared/service/export/export.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent implements OnInit {
  @Input() public data!: any;
  _dataArray: Array<any> = [];

  @Output() passEntry: EventEmitter<void> = new EventEmitter();

  constructor(
    private activeModal: NgbActiveModal,
    private exportService: ExportService
  ) {}

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY h:mm:ss a');
  }

  ngOnInit() {}

  public closeModal(result: any) {
    this.activeModal.close(result);
  }

  exportToCsv(): void {
    this._dataArray = [];

    this._dataArray.push(this.data);

    this.exportService.exportToCsv(this._dataArray, 'order-data', [
      'id',
      'name',
      'quantity',
    ]);
  }
  // 'Cliente',
  // 'Líneas del pedido / Producto',
  // 'Líneas del pedido / Cantidad'
}
