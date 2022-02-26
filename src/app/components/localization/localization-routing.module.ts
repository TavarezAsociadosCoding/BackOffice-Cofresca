import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates/rates.component';
import { TranslationsComponent } from './translations/translations.component';
import { TaxesComponent } from './taxes/taxes.component';


const routes: Routes = [
  {
    path: 'translations',
    component: TranslationsComponent,
    data: {
      title: "Translations",
      breadcrumb: "Translations"
    }
  },
  {
    path: 'currency-rates',
    component: RatesComponent,
    data: {
      title: "Currency Rates",
      breadcrumb: "Currency Rates"
    }
  },
  {
    path: 'taxes',
    component: TaxesComponent,
    data: {
      title: 'Taxes',
      breadcrumb: 'Taxes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizationRoutingModule { }
