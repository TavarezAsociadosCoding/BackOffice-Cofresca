import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from 'src/app/core';
import { ProfileService } from 'src/app/core/services/account/account.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ModalAdapterService } from 'src/app/shared/service/modal-adapter.service';
import { ModalService } from 'src/app/shared/service/modal.service';
import { userListDB } from 'src/app/shared/tables/list-users';
import { UserModalComponent } from './user-modal/user-modal.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  public user_list = [];
  userid;
  constructor(
    private UsersService: UsersService,
    private _modalAdapter: ModalAdapterService,
    private ProfileService: ProfileService,
    private authService: AuthService,
    private modalService: ModalService
  ) {
    this.userid = this.authService.getUserIdStorage();

    this.UsersService.users().subscribe(
      (users) => (this.user_list = users.message)
    );
  }

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }
  ngOnInit() {}

  public onSumit(item: any) {
    const modal = this._modalAdapter.open(UserModalComponent);
    modal.componentInstance.data = item;
    modal.componentInstance.passEntry.subscribe(() => {
      this._modalAdapter.close();
    });
  }

  public async activate(item: any) {
    this.modalService.createRegisterModal(
      {
        text: 'Seguro que quieres activar este usuario',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      },
      async () => {
        await this.ProfileService.ActivateUser(item.userId);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    );
  }
  public async desactivar(item: any) {
    this.modalService.createRegisterModal(
      {
        text: 'Seguro que quieres desactivar este usuario',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      },
      async () => {
        await this.ProfileService.DesactivarUser(item.userId);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    );
  }
}
