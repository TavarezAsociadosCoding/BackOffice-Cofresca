import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryService } from 'src/app/core/services/categories/categories.service';
import { ProductService } from 'src/app/core/services/products/products.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excelsheet',
  templateUrl: './excelsheet.component.html',
  styleUrls: ['./excelsheet.component.scss'],
})
export class ExcelsheetComponent implements OnInit {
  data: [][];
  count: number = 0;
  constructor(
    private categoriesService: CategoryService,
    private ProductService: ProductService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}
  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>evt.target;

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = async (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      console.log('!!!!!!DATA!!!!!!');
      console.log(this.data);
      const obj = {};
      for (let i = 0; i < this.data.length; i++) {
        //Categoria

        if (i > 0) {
          // console.log(this.data[i]);
          // let categoria = this.data[i][0];
          // for(let colum=0; colum < this.data[i].length;colum)
          const producto: any[] = this.data[i];
          // let categorias: number = 1;
          //Nombre
          let nombre: string = producto[1];
          //Precio
          let precio: number = producto[3];

          //Referencia interna

          let stock: number = producto[6];
          //Descripcion
          // let descripcion = this.data[i][0];
          // let imagen: string =

          let descripImg: any =
            'data:image/jpg;base64,' +
            (this._sanitizer.bypassSecurityTrustResourceUrl(producto[7]) as any)
              .changingThisBreaksApplicationSecurity;

          let imagen = descripImg;

          let descripcion = producto[4];

          let barcode = producto[5];

          let producto_ID = producto[8];

          let categorories_Name = producto[9];

          let categorories_ID = producto[10];

          this.categoriesService.createCategories(
            categorories_Name,
            categorories_ID
          );

          let x = await (
            await this.ProductService.crear_product(
              producto_ID,
              nombre,
              barcode,
              precio,
              imagen,
              categorories_ID,
              stock,
              descripcion
            )
          ).subscribe(
            () => {
              this.count = i;

              console.log('espere resultado');
              // this.router.navigate("/home");
            },
            () => {
              console.log('error');
              // this.loginError = true;
            }
          );
        }
      }

      let x = this.data.slice(1);
      console.log(x);
    };

    reader.readAsBinaryString(target.files[0]);
  }
}
