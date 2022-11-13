import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultantsService } from 'src/app/core/services/consultants/consultants.service';
import { ProductService } from 'src/app/core/services/products/products.service';
@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss'],
})
export class AddConsultantComponent implements OnInit {
  public consultantForm: FormGroup;
  header = '';
  type = '';
  body = '';
  constructor(
    private fb: FormBuilder,
    private consultantsService: ConsultantsService,
    private router: Router
  ) {
    // displayName: new FormControl(model.displayName),
  }

  async crear() {
    if (this.body != null && this.type != null && this.body != null) {
      await this.consultantsService.postConsultants(
        this.header,
        this.body,
        this.type
      );
      window.location.reload();
    }
  }

  ngOnInit() {}
}
