import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/core/interceptors/orders';
import { ProductService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-warehouse-display',
  templateUrl: './warehouse-display.component.html',
  styleUrls: ['./warehouse-display.component.scss']
})
export class WarehouseDisplayComponent implements OnInit {
  public orders:Orders[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getData();
  }

 private getData():void{
   this.productService.getData().subscribe(
     {
       next:(data:Orders[]) =>{
          this.orders = data;
          console.log(this.orders)
       },
       error:(error) =>{
          console.log(error);
       }
     }
   )
 }
 /*  Host/api/orders */
}
