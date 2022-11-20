import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './list-user/user-modal/user-modal.component';
import { PasswordModalComponent } from './list-user/password-modal/password-modal.component';

@NgModule({
  declarations: [
    ListUserComponent,
    CreateUserComponent,
    PasswordModalComponent,
    UserModalComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
