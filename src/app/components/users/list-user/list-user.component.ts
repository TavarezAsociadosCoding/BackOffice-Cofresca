import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from 'src/app/core';
import { ProfileService } from 'src/app/core/services/account/account.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { ModalService } from 'src/app/shared/service/modal.service';
import { userListDB } from 'src/app/shared/tables/list-users';

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
    private ProfileService: ProfileService,
    private authService: AuthService,
    private modalService: ModalService
  ) {
    this.userid = this.authService.getUserIdStorage();

    // this.user_list = userListDB.list_user;
    UsersService.users().subscribe(
      (users) => (this.user_list = users.message)
      // console.log('salida', users.message)
    );
  }

  public dateForm(date: Date): string {
    return moment(date).format('DD/MM/YYYY');
  }
  ngOnInit() {}

  public onSumit(item: any) {
    console.log(item);
  }
  public async activate(item: any) {
    this.modalService.createRegisterModal(
      {
        text: 'Seguro que quieres activar este usuaario',
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
}
