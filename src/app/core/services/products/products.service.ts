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
  private readonly apiUrl = `${environment.apiUrl}api/`;
  private timer: Subscription | null = null;
  //   private _user = new BehaviorSubject<ApplicationUser | null>(null);
  //   private _register = new BehaviorSubject<RegisterUser | null>(null);

  constructor(private http: HttpClient) {}

  getLocalStorage() {
    localStorage.getItem('access_token');
  }

  public products() {
    const auth_token = this.getLocalStorage();

    // const headers = {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${auth_token}`,
    // };

    // const headers = {
    //   Authorization: 'Bearer my-token',
    //   'My-Custom-Header': 'foobar',
    // };
    return this.http.get<Products[]>(`${this.apiUrl}products`).pipe(
      map((x) => {
        console.log(x);
        return x;
      })
    );
  }

  //TODO:CATEGORIAS HARCODE
  public crear_product(
    Name,
    BarCode,
    Prices,
    image,
    categoryId,
    stock,
    description
  ) {
    let CategoryId = 1;
    const auth_token = this.getLocalStorage();

    // const headers = {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${auth_token}`,
    // };

    // const headers = {
    //   Authorization: 'Bearer my-token',
    //   'My-Custom-Header': 'foobar',
    // };
    // "Name":"Piña",
    // "BarCode":"125",
    // "Prices":70,
    // "CategoryId":1,
    // "image":"https://todofrescord.com/wp-content/uploads/2019/03/pi%C3%B1a.jpg"

    // const body = JSON.stringify({
    //   Name: Name,
    //   BarCode: BarCode,
    //   Prices: Prices,
    //   CategoryId: 1,
    //   image: image,
    // });

    // const payload = JSON.parse(body);
    return this.http
      .post<CreateProductResult>(`${this.apiUrl}products`, {
        Name: Name,
        BarCode: '000',
        Prices: Prices,
        CategoryId: 1,
        image: image,
        Description: description,
        Stock: stock,
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

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  //   user$ = this._user.asObservable();
///Host/api/orders
  public getData():Observable<Orders[]>
  {
    return this.http.get<Orders[]>(this.apiUrl +'orders');
  }
}