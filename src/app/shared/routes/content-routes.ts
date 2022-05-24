import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../../components/products/products.module').then(
        (m) => m.ProductsModule
      ),
    data: {
      breadcrumb: 'Productos',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('../../components/sales/sales.module').then((m) => m.SalesModule),
    data: {
      breadcrumb: 'Ventas',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'coupons',
    loadChildren: () =>
      import('../../components/coupons/coupons.module').then(
        (m) => m.CouponsModule
      ),
    data: {
      breadcrumb: 'Cupones',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../../components/pages/pages.module').then((m) => m.PagesModule),
    data: {
      breadcrumb: 'Paginas',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'media',
    loadChildren: () =>
      import('../../components/media/media.module').then((m) => m.MediaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'menus',
    loadChildren: () =>
      import('../../components/menus/menus.module').then((m) => m.MenusModule),
    data: {
      breadcrumb: 'Menus',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../../components/users/users.module').then((m) => m.UsersModule),
    data: {
      breadcrumb: 'Usuarios',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'vendors',
    loadChildren: () =>
      import('../../components/vendors/vendors.module').then(
        (m) => m.VendorsModule
      ),
    data: {
      breadcrumb: 'Vendedores',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'localization',
    loadChildren: () =>
      import('../../components/localization/localization.module').then(
        (m) => m.LocalizationModule
      ),
    data: {
      breadcrumb: 'Localización',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('../../components/reports/reports.module').then(
        (m) => m.ReportsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../../components/setting/setting.module').then(
        (m) => m.SettingModule
      ),
    data: {
      breadcrumb: 'Ajustes',
    },
    canActivate: [AuthGuard],
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('../../components/invoice/invoice.module').then(
        (m) => m.InvoiceModule
      ),
    data: {
      breadcrumb: 'Factura',
    },
    canActivate: [AuthGuard],
  },
];
