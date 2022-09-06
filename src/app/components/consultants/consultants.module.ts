import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ReportsRoutingModule } from './reports-routing.module';
// import { ReportsComponent } from './reports.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';
import { ConsultantComponent } from './consultants.component';
import { ConsultantsRoutingModule } from './consultants-routing.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { AddConsultantComponent } from './add-consultant/add-consultant.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  DropzoneConfigInterface,
  DropzoneModule,
  DROPZONE_CONFIG,
} from 'ngx-dropzone-wrapper';
import { ReactiveFormsModule } from '@angular/forms';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [AddConsultantComponent, ConsultantComponent],

  imports: [
    CKEditorModule,
    CommonModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    NgxChartsModule,
    ChartistModule,
    ConsultantsRoutingModule,
    ReactiveFormsModule,
    DropzoneModule,
    NgbModule,
    Ng2SmartTableModule,
    GalleryModule.forRoot(),
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
    NgbActiveModal,
  ],
})
export class ConsultantsModule {}
