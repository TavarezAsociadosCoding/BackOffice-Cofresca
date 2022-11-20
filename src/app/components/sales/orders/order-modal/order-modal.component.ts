import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Orders, ReOrders } from 'src/app/core/models/order/order';
import { OrderService } from 'src/app/core/services/orders/order.service';
import { ExportService } from 'src/app/shared/service/export/export.service';
import { ModalService } from 'src/app/shared/service/modal.service';

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
    private modalService: ModalService,
    private orderService: OrderService
  ) {}

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY h:mm:ss a');
  }

  ngOnInit() {}

  public closeModal(result: any) {
    this.activeModal.close(result);
  }
  public async sendOrder() {
    let mess = '';

    switch (this.data.status) {
      case 'Pendientes':
        mess = 'seguro que quieres enviar el producto';
        break;

      case 'Enviado':
        mess = 'seguro que quieres cerrar esta orden';

        break;
    }
    this.modalService.createRegisterModal(
      {
        text: mess,
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      },
      async () => {
        if (this.data.status == 'Enviado') {
          this.data.status = 'Completado';
        }
        if (this.data.status == 'Pendientes') {
          this.data.status = 'Enviado';
        }

        await this.orderService
          .UpdateOrderDetails(this.data.ordersDetails)
          .then(async (data) => {
            await this.orderService
              .UpdateOrder(this.data.id, this.data)
              .then((x) => {
                window.location.reload();
              });
          });
        // await this.orderService
        //   .UpdateOrder(this.data.id, this.data.ordersDetails)
        //   .then((x) => {
        //
        //   });
      }
    );
  }
}
