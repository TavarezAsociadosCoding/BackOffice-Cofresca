import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { ListVendorsComponent } from './list-vendors/list-vendors.component';
import { CreateVendorsComponent } from './create-vendors/create-vendors.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [ListVendorsComponent, CreateVendorsComponent],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SmartTableModule
  ]
})
export class VendorsModule { }
