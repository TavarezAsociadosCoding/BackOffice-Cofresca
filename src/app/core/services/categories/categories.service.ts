import { Injectable, OnDestroy } from '@angular/core';
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
import { environment } from 'src/environments/environment';
import { Categories } from '../../models/categories/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}/api/`;
  private timer: Subscription | null = null;

  constructor(private http: HttpClient) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public categories() {
    return this.http.get<Categories[]>(`${this.apiUrl}categories`).pipe(
      map((x) => {
        console.log(x);
        return x;
      })
    );
  }

  public createCategories(_CategoryName: string, _id: number) {
    return this.http
      .post(this.apiUrl + 'categories', {
        CategoryName: _CategoryName,
        id: _id,
      })
      .toPromise();
  }

  public updateCategories(_id: number, _CategoryName: string) {
    return this.http
      .put(this.apiUrl + `categories?id=${_id}`, {
        CategoryName: _CategoryName,
        id: _id,
      })
      .toPromise();
  }
}
