import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationRoutingModule } from './localization-routing.module';
import { TranslationsComponent } from './translations/translations.component';
import { RatesComponent } from './rates/rates.component';
import { TaxesComponent } from './taxes/taxes.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [TranslationsComponent, RatesComponent, TaxesComponent],
  imports: [
    CommonModule,
    LocalizationRoutingModule,
    Ng2SmartTableModule
  ]
})
export class LocalizationModule { }
