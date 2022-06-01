import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Orders } from 'src/app/core/interceptors/orders';
import { ProductService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-warehouse-display',
  templateUrl: './warehouse-display.component.html',
  styleUrls: ['./warehouse-display.component.scss']
})
export class WarehouseDisplayComponent implements OnInit {
  public orders:Orders[] = [];
  public pendintes:number = 0;
  public listo:number = 0;
  public Total:number = 0 ;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  public dateForm(date:Date):string{
    return moment(date).format("DD/MM/YYYY")
  }

 private getData():void{
   this.productService.getData().subscribe(
     {
       next:(data:Orders[]) =>{
          this.orders = data;
          this.Total = data.length;
          data.forEach((item,index)=>{
            if(item.status === "Pedientes"){
              this.pendintes++;
            }
            if(item.status === "Listo"){
              this.Total--;
              this.listo++;
            }
          })
       },
       error:(error) =>{
          console.log(error);
       }
     }
   )
 }
 /*  Host/api/orders */
}
