import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'products',
    loadChildren: () => import('../../components/products/products.module').then(m => m.ProductsModule),
    data: {
      breadcrumb: "Products"
    }
  },
  {
    path: 'sales',
    loadChildren: () => import('../../components/sales/sales.module').then(m => m.SalesModule),
    data: {
      breadcrumb: "Sales"
    }
  },
  {
    path: 'coupons',
    loadChildren: () => import('../../components/coupons/coupons.module').then(m => m.CouponsModule),
    data: {
      breadcrumb: "Coupons"
    }
  },
  {
    path: 'pages',
    loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: "Pages"
    }
  },
  {
    path: 'media',
    loadChildren: () => import('../../components/media/media.module').then(m => m.MediaModule),
  },
  {
    path: 'menus',
    loadChildren: () => import('../../components/menus/menus.module').then(m => m.MenusModule),
    data: {
      breadcrumb: "Menus"
    }
  },
  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: 'vendors',
    loadChildren: () => import('../../components/vendors/vendors.module').then(m => m.VendorsModule),
    data: {
      breadcrumb: "Vendors"
    }
  },
  {
    path: 'localization',
    loadChildren: () => import('../../components/localization/localization.module').then(m => m.LocalizationModule),
    data: {
      breadcrumb: "Localization"
    }
  },
  {
    path: 'reports',
    loadChildren: () => import('../../components/reports/reports.module').then(m => m.ReportsModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('../../components/setting/setting.module').then(m => m.SettingModule),
    data: {
      breadcrumb: "Settings"
    }
  },
  {
    path: 'invoice',
    loadChildren: () => import('../../components/invoice/invoice.module').then(m => m.InvoiceModule),
    data: {
      breadcrumb: "Invoice"
    }
  }
];