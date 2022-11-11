import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-order-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  public accountForm: FormGroup;
  @Input() public data!: any;

  @Output() passEntry: EventEmitter<void> = new EventEmitter();

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createAccountForm();
  }

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY h:mm:ss a');
  }

  ngOnInit() {
    this.setData();
  }

  private setData() {
    this.accountForm.patchValue({
      estado: this.data.state,
      pais: this.data.city,
      postal: this.data.codePostal,
      rnc: this.data.rnc,
      telefono:  this.data.phone,
    });
  }

  private createAccountForm() {
    this.accountForm = this.formBuilder.group({
      pais: [''],
      estado: [''],
      postal: [''],
      rnc: [''],
      telefono: [''],
    });
  }

  public closeModal(result: any) {
    this.activeModal.close(result);
  }

  public submit() {
    console.log(this.accountForm.value);
  }
}
