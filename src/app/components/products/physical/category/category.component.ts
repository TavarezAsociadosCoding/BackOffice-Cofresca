import { Component, OnInit } from '@angular/core';
import { categoryDB } from '../../../../shared/tables/category';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/core/services/categories/categories.service';
import { Categories } from 'src/app/core/models/categories/categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public closeResult: string;
  public categories = [];

  // constructor(private modalService: NgbModal) {
  //   this.categories = categoryDB.category;
  // }

  constructor(private categoryService: CategoryService) {
    categoryService.categories().subscribe(
      (categories:Categories[]) => (this.categories = categories)

      // this.product_list = this.temporal_list

      // console.log('salida', users.message)
    );
    // this.order = orderDB.list_order;
    // this.order =
  }

  public settings = {
    actions: {
      position: 'right',
    },
    columns: {
      img: {
        title: 'Imagen',
        type: 'html',
      },
      product_name: {
        title: 'Nombre',
      },
      price: {
        title: 'Precio',
      },
      status: {
        title: 'Estado',
        type: 'html',
      },
      category: {
        title: 'Categoria',
      },
    },
  };

  ngOnInit() {}
}
