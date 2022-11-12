import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private consultantsService: ConsultantsService,
    private router: Router
  ) {
    this.consultantForm = this.fb.group({
      header: ['', [Validators.required]],
      body: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  async crear() {
    let header = this.consultantForm.get('header').value;
    let type = this.consultantForm.get('type').value;
    let body = this.consultantForm.get('body').value;

    await this.consultantsService.postConsultants(header, body, type);
  }

  ngOnInit() {}
}
