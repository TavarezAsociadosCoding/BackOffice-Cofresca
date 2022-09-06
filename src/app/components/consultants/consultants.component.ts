import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { OrderService } from 'src/app/core/services/orders/order.service';
import { CurrencyService } from 'src/app/shared/service/currecy.service';
import * as moment from 'moment';
import { Orders } from 'src/app/core/models/order/order';
import { ModalAdapterService } from 'src/app/shared/service/modal-adapter.service';
import { ConsultantModalComponent } from './consultant-modal/consultant-modal.component';
import { ConsultantsService } from 'src/app/core/services/consultants/consultants.service';
import { Consultants } from 'src/app/core/models/consultants/consultants';
@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.scss'],
})
export class ConsultantComponent implements OnInit {
  public consultants: Consultants[] = [];
  // public temp = [];
  // public configuration: Config;
  // public columns: Columns[];

  ngOnInit() {
    // this.configuration = { ...DefaultConfig };
  }
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(
    private consultantsService: ConsultantsService,
    private _modalAdapter: ModalAdapterService
  ) {
    this.consultantsService.getConsultants().then((response) => {
      this.consultants = response;
    });
  }

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }

  onSumit(item: any) {
    this.openModal(item);
  }

  private async openModal(row: any) {
    const modal = this._modalAdapter.open(ConsultantModalComponent);
    modal.componentInstance.data = row;
    modal.componentInstance.passEntry.subscribe(() => {
      this._modalAdapter.close();
    });
  }

}
