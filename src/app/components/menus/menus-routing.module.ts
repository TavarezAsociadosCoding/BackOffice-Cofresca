import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-menu',
        component: ListMenuComponent,
        data: {
          title: "Menu Lists",
          breadcrumb: "Menu Lists"
        }
      },
      {
        path: 'create-menu',
        component: CreateMenuComponent,
        data: {
          title: "Create Menu",
          breadcrumb: "Create Menu"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
