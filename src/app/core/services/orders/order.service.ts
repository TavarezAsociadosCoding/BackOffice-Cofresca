import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription, throwError } from 'rxjs';
import { map, tap, delay, finalize, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsersResult } from '../../models/users';
import { CreateProductResult, Products } from '../../models/products';
import { Orders } from '../../models/order/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}api/`;
  private timer: Subscription | null = null;

  constructor(private http: HttpClient) {}

  //   getLocalStorage() {
  //     localStorage.getItem('access_token');
  //   }

  public orders() {
    return this.http.get<Orders[]>(`${this.apiUrl}orders`).pipe(
      map((x) => {
        console.log(x);
        return x;
      })
    );
  }

  //TODO:CATEGORIAS HARCODE
  //   public crear_product(
  //     Name,
  //     BarCode,
  //     Prices,
  //     image,
  //     categoryId,
  //     stock,
  //     description
  //   ) {
  //     let CategoryId = 1;
  //     const auth_token = this.getLocalStorage();

  //     // const payload = JSON.parse(body);
  //     return this.http
  //       .post<CreateProductResult>(`${this.apiUrl}products`, {
  //         Name: Name,
  //         BarCode: '000',
  //         Prices: Prices,
  //         CategoryId: 1,
  //         image: image,
  //         Description: description,
  //         Stock: stock,
  //       })
  //       .pipe(
  //         map((x) => {
  //           console.log('resultado creando producto ', x);
  //           return x;
  //         }),
  //         catchError((error: HttpErrorResponse) => {
  //           if (error.status != 200) {
  //             // handle error
  //           } else {
  //             // return error
  //             return throwError(error);
  //           }
  //         })
  //       );
  //   }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  //   user$ = this._user.asObservable();

  // i/orders/Change/1002/completo
  public UpdateOrder(id: string, order: any) {
    return this.http
      .post(this.apiUrl + `orders/Change/${id}`, {
        id: order.id,
        OrderDate: order.orderDate,
        TotalAmount: order.totalAmount,
        CustomerId: order.customerId,
        userId: order.userId,
        isExpress: order.isExpress,
        EmployeeId: order.employeeId,
        IsActive: order.isActive,
        Status: order.status,
        ShippingAddress: order.shippingAddress,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status != 200) {
            console.log(error);
          } else {
            console.log(error);
            // return error
            return throwError(error);
          }
          console.log(error);
        })
      )
      .toPromise();
  }
}
