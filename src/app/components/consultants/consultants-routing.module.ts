import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { ConsultantComponent } from './consultants.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ConsultantComponent,
        data: {
          title: 'Asesorias',
          breadcrumb: 'Asesorias',
        },
      },
      {
        path: 'add-consultant',
        component: AddConsultantComponent,
        data: {
          title: 'Añadir Asesorias',
          breadcrumb: 'Añadir Asesorias',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultantsRoutingModule {}
