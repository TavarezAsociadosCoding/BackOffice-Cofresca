import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  of,
  Subscription,
  throwError,
} from 'rxjs';
import { map, tap, delay, finalize, catchError } from 'rxjs/operators';
// import { ApplicationUser } from '../models/application-user';
import { environment } from 'src/environments/environment';
import { UsersResult } from '../../models/users';
import {
  CreateProductResult,
  Products,
  ProductsResult,
} from '../../models/products';
import { Orders } from '../../interceptors/orders';
// import { RegisterUser } from '../models/Iresponse';
// import { LoginResult, RegisterResult } from '../models/Iresult';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}/api/`;
  private timer: Subscription | null = null;
  //   private _user = new BehaviorSubject<ApplicationUser | null>(null);
  //   private _register = new BehaviorSubject<RegisterUser | null>(null);

  constructor(private http: HttpClient) {}

  getLocalStorage() {
    localStorage.getItem('access_token');
  }

  public products() {
    return this.http.get<Products[]>(`${this.apiUrl}products`).pipe(
      map((x) => {
        console.log(x);
        return x;
      })
    );
  }

  public crear_product(
    Id,
    Name,
    BarCode,
    Prices,
    image,
    categoryId,
    stock,
    description,
    type
  ) {
    return this.http
      .post<CreateProductResult>(`${this.apiUrl}products`, {
        Id: Id,
        Name: Name,
        BarCode: '000',
        Prices: Prices,
        CategoryId: categoryId,
        image: image,
        Description: description,
        Stock: stock,
        Type: type,
      })
      .pipe(
        map((x) => {
          console.log('resultado creando producto ', x);
          return x;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status != 200) {
            // handle error
          } else {
            // return error
            return throwError(error);
          }
        })
      );
  }

  public updateProduct(
    Id,
    Name,
    BarCode,
    Prices,
    image,
    categoryId,
    stock,
    description,
    type
  ) {
    return this.http
      .put<CreateProductResult>(`${this.apiUrl}products/${Id}`, {
        Id: Id,
        Name: Name,
        BarCode: '000',
        Prices: Prices,
        CategoryId: categoryId,
        image: image,
        Description: description,
        Stock: stock,
        Type: type,
      })
      .pipe(
        map((x) => {
          console.log('resultado actualizando producto', x);
          return x;
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status != 200) {
            // handle error
          } else {
            // return error
            return throwError(error);
          }
        })
      );
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  //   user$ = this._user.asObservable();
  ///Host/api/orders
  public getData(): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.apiUrl + 'orders/Status/Pendientes');
  }
}
