import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/products/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  public productForm: FormGroup;
  public counter: number = 1;
  public url = [
    {
      img: 'assets/images/pro3/add-image.png',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      price: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      code: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      size: ['', Validators.required],
    });
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  async crear() {
    let name = this.productForm.get('name').value;
    let prices = this.productForm.get('price').value;
    let barcode = this.productForm.get('code').value;
    let qty = this.counter;
    let image = this.url[0].img;
    console.log('estoy llamando el crear product');
    let x = await (await this.ProductService.crear_product(
      name,
      barcode,
      prices,
      image,
      'categorias',
      10,
      'creacion normal'
    )).subscribe(
      () => {
        console.log('espere resultado');
        // this.router.navigate("/home");
      },
      () => {
        console.log('error');
        // this.loginError = true;
      }
    );
  }

  //FileUpload
  readUrl(event: any, i) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url[i].img = reader.result.toString();
    };
  }
  // console.log('mi nombre', this.fb.control['user'].value);

  ngOnInit() {}
}
