import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModalComponent } from 'src/app/components/sales/orders/order-modal/order-modal.component';
// import { ToastrService } from "ngx-toastr";
import { AuthService } from 'src/app/core';
import { Product } from 'src/app/core/models/product/product';
import { Products, ProductsEdit } from 'src/app/core/models/products';
import { ProductService } from 'src/app/core/services/products/products.service';
import { ModalService } from 'src/app/shared/service/modal.service';
// import { ProfileService } from "src/app/shared/services/account/account.service";
// import { EmailService } from "src/app/shared/services/email/email.service";
// import { ModalService } from "src/app/shared/services/modal.service";

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  @Input() public data!: ProductsEdit;

  @Output() passEntry: EventEmitter<void> = new EventEmitter();

  constructor(
    private activeModal: NgbActiveModal,
    private authService: AuthService,
    private modalService: ModalService,

    private ProductService: ProductService
  ) {}

  ngOnInit(): void {}

  public closeModal(result: any) {
    this.activeModal.close(result);
  }

  public async EditProduct() {
    this.modalService.createRegisterModal(
      {
        text: 'Seguro que quieres actualizar este producto',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar',
      },
      async () => {
        await this.ProductService.updateOnlyProduct(
          this.data.id,
          this.data.name,
          this.data.barCode,
          this.data.prices,
          this.data.image,
          this.data.categoryId,
          this.data.stock,
          this.data.description,
          this.data.type
        );
        window.location.reload();
      }
    );
  }
}
