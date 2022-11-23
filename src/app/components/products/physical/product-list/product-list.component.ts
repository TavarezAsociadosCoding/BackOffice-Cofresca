import { Component, OnInit } from '@angular/core';
import { ProductsResult } from 'src/app/core/models/products';
import { ProductService } from 'src/app/core/services/products/products.service';
import { ModalAdapterService } from 'src/app/shared/service/modal-adapter.service';
import { productDB } from 'src/app/shared/tables/product-list';
import { ProductModalComponent } from './product-modal/product-modal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public product_list = [];
  public temporal_list = [];
  // constructor() {
  // this.product_list = productDB.product;
  // }

  constructor(
    private ProductService: ProductService,
    private _modalAdapter: ModalAdapterService
  ) {
    // this.user_list = userListDB.list_user;
    ProductService.products().subscribe(
      (product) => (this.product_list = product)
      // this.product_list = this.temporal_list

      // console.log('salida', users.message)
    );
    console.log('mi lista', this.product_list);
  }
  ngOnInit() {}

  public async openModal(row: any) {
    const modal = this._modalAdapter.open(ProductModalComponent);
    modal.componentInstance.data = row;
    modal.componentInstance.passEntry.subscribe(() => {
      this._modalAdapter.close();
    });
  }

  Delete(item: any) {
    window.alert('Esta funcionalidad no esta disponible');
  }
}
