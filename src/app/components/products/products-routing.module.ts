import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './physical/category/category.component';
import { SubCategoryComponent } from './physical/sub-category/sub-category.component';
import { ProductListComponent } from './physical/product-list/product-list.component';
import { AddProductComponent } from './physical/add-product/add-product.component';
import { ProductDetailComponent } from './physical/product-detail/product-detail.component';
import { ExcelsheetComponent } from './physical/excelsheet/excelsheet.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'Categorias',
          breadcrumb: 'Categorias',
        },
      },
      {
        path: 'sub-category',
        component: SubCategoryComponent,
        data: {
          title: 'Subcategoría',
          breadcrumb: 'Subcategoría',
        },
      },
      {
        path: 'product-list',
        component: ProductListComponent,
        data: {
          title: 'Lista de productos',
          breadcrumb: 'Lista de productos',
        },
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent,
        data: {
          title: 'Detalle del producto',
          breadcrumb: 'Detalle del producto',
        },
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        data: {
          title: 'Añadir productos',
          breadcrumb: 'Añadir productos',
        },
      },
      {
        path: 'import-product',
        component: ExcelsheetComponent,
        data: {
          title: 'importa productos',
          breadcrumb: 'importa productos',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
