import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Consultants } from '../../models/consultants/consultants';

const state = {
  checkoutItems: JSON.parse(localStorage['checkoutItems'] || '[]'),
};

@Injectable({
  providedIn: 'root',
})
export class ConsultantsService {
  private readonly apiUrl = `${environment.apiUrl}/api/`;

  constructor(private router: Router, private http: HttpClient) {}

  public async getConsultants() {
    return this.http
      .get<Array<Consultants>>(this.apiUrl + `consultants`)
      .toPromise();
  }

  public async postConsultants(header: string, body: string, type: string) {
    return this.http
      .post<Consultants>(this.apiUrl + `consultants`, {
        header: header,
        body: body,
        type: type,
      })
      .toPromise();
  }

  public async putConsultants(
    id: number,
    header: string,
    body: string,
    type: string
  ) {
    return this.http
      .put<Consultants>(this.apiUrl + `consultants?id=${id}`, {
        header: header,
        body: body,
        type: type,
      })
      .toPromise();
  }
}
