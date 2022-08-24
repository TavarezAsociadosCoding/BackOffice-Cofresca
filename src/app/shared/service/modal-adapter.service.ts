import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalAdapterService {
  public modalRef!: NgbModalRef;
  
  constructor(
    private bootstrapModalService: NgbModal,
  ) { }

  public open(component: any, options?: NgbModalOptions  | undefined ) {
    let modal;
    if(options) {
      modal = this.bootstrapModalService.open(component, {
        centered: true,
        size: 'lg',
        ...options,
      });

      this.modalRef = modal;

      return modal;
    }

    modal = this.bootstrapModalService.open(component, {
      centered: true,
      size: 'lg',
    });
    
    this.modalRef = modal;

    return modal;
  }

  public close() {
    this.modalRef.close.apply(this.modalRef);
    this.bootstrapModalService.dismissAll();
  }
}
