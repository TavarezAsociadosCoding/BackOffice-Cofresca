import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core';
import { WarehouseDisplayComponent } from '../warehouse-display/warehouse-display.component';
// import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'default',
      //   component: DashboardComponent,
      //   data: {
      //     title: 'Dashboard',
      //     breadcrumb: 'Dashboard',
      //   },
      //   // canActivate: [AuthGuard],
      // },
      {
        path: 'default',
        component: WarehouseDisplayComponent,
        data: {
          title: 'Warehouse display',
          breadcrumb: 'Dashboard',
        },
        // canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
