import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subscription, throwError } from 'rxjs';
import { map, tap, delay, finalize, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsersResult } from '../../models/users';
import { CreateProductResult, Products } from '../../models/products';
import { Orders } from '../../models/order/order';
import { Invoices } from '../../models/invoices/invoices';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}/api/`;
  private timer: Subscription | null = null;

  constructor(private http: HttpClient) {}

  public invoices() {
    return this.http.get<Invoices[]>(`${this.apiUrl}invoices`).pipe(
      map((x) => {
        console.log(x);
        return x;
      })
    );
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
