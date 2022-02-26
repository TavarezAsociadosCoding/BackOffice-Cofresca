import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MediaComponent,
        data: {
          title: "Media",
          breadcrumb: "Media"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
