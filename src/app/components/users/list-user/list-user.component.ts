import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users/users.service';
import { userListDB } from 'src/app/shared/tables/list-users';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  public user_list = [];

  constructor(private UsersService: UsersService) {
    // this.user_list = userListDB.list_user;
    UsersService.users().subscribe((users) =>
       this.user_list = users.message
      // console.log('salida', users.message)
    );
  }

  public settings = {
    columns: {
      avatar: {
        title: 'Imagen',
        type: 'html',
      },
      fName: {
        title: 'Nombre',
      },
      lName: {
        title: 'Apellido',
      },
      email: {
        title: 'Correo',
      },
      last_login: {
        title: 'Ultima vez conectado',
      },
      role: {
        title: 'Rol',
      },
    },
  };

  ngOnInit() {}
}
