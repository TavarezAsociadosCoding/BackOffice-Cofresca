import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ProfileService } from 'src/app/core/services/account/account.service';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  public accountForm: FormGroup;
  @Input() public data!: any;

  private userid;
  @Output() passEntry: EventEmitter<void> = new EventEmitter();

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    public profileService: ProfileService
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
    this.userid = this.data.userId;
    this.accountForm.patchValue({
      state: this.data.state,
      city: this.data.city,
      codePostal: this.data.codePostal,
      rnc: this.data.rnc,
      phone: this.data.phone,
      hoursDelivery: this.data.hoursDelivery,
      phoneGerente: this.data.phoneGerente,
      address: this.data.address,
      companyName: this.data.companyName,
      extPhoneGerente: this.data.extPhoneGerente,
      nameUser: this.data.nameUser,
      lastName: this.data.lastName,
    });
  }

  private createAccountForm() {
    this.accountForm = this.formBuilder.group({
      address: [''],
      city: [''],
      state: [''],
      codePostal: [''],
      rnc: [''],
      phone: [''],
      hoursDelivery: [''],
      phoneGerente: [''],
      companyName: [''],
      extPhoneGerente: [''],
      nameUser: [''],
      lastName: [''],
    });
  }

  public closeModal(result: any) {
    this.activeModal.close(result);
  }

  public async onSubmit() {
    this.modalService.createRegisterModal(
      {
        text: 'Seguro que quieres editar este usuario',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      },
      async () => {
        this.profileService
          .editProfile(this.userid, this.accountForm.value)
          .subscribe(
            () => {
              window.location.reload();
              // this.router.navigate([returnUrl]);
            },
            (ex) => {
              // this.loginError = true;
              console.log(' Exception' + ex);
            }
          );
      }
    );
  }
}
