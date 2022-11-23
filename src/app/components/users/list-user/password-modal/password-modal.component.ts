import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrService } from "ngx-toastr";
import { AuthService } from 'src/app/core';
import { ProfileService } from 'src/app/core/services/account/account.service';
import { ModalService } from 'src/app/shared/service/modal.service';
// import { ProfileService } from "src/app/shared/services/account/account.service";
// import { EmailService } from "src/app/shared/services/email/email.service";
// import { ModalService } from "src/app/shared/services/modal.service";

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss'],
})
export class PasswordModalComponent implements OnInit {
  @Input() public data!: any;

  @Output() passEntry: EventEmitter<void> = new EventEmitter();

  public userid: string;
  public Password: string;

  constructor(
    private activeModal: NgbActiveModal,
    private profileService: ProfileService,
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.userid = this.authService.getUserIdStorage();
  }

  public closeModal(result: any) {
    this.activeModal.close(result);
  }

  public setValue() {
    console.log(this.userid);
    console.log(this.Password);
  }

  public async EditPassword() {
    this.modalService.createRegisterModal(
      {
        text: 'Seguro que quieres actualizar su Contraseña',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      },
      async () => {
        await this.profileService.UpdatePassword(this.userid, this.Password);
        window.location.reload();
      }
    );
  }
}
