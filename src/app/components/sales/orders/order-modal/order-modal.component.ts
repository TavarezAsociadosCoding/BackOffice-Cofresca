import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {

@Input() public data!: any;

@Output() passEntry: EventEmitter<void> = new EventEmitter();

  constructor(
    private activeModal: NgbActiveModal,
  ) { }

  public dateForm(date: Date): string {
    return moment(date).format("DD/MM/YYYY h:mm:ss a");
  }
  
  ngOnInit() {

  }

  public closeModal(result: any) {
    this.activeModal.close(result);
  }

}
