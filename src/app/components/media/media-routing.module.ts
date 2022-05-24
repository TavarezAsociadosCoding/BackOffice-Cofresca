import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MediaComponent,
        data: {
          title: 'Media',
          breadcrumb: 'Media',
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
export class MediaRoutingModule {}
