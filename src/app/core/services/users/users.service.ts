import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';
// import { ApplicationUser } from '../models/application-user';
import { environment } from 'src/environments/environment';
import { UsersResult } from '../../models/users';
// import { RegisterUser } from '../models/Iresponse';
// import { LoginResult, RegisterResult } from '../models/Iresult';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}api/accounts`;
  private timer: Subscription | null = null;
  //   private _user = new BehaviorSubject<ApplicationUser | null>(null);
  //   private _register = new BehaviorSubject<RegisterUser | null>(null);

  constructor(private http: HttpClient) {}

  getLocalStorage() {
    localStorage.getItem('access_token');
  }

  public users() {
    const auth_token = this.getLocalStorage();

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    };

    // const headers = {
    //   Authorization: 'Bearer my-token',
    //   'My-Custom-Header': 'foobar',
    // };
    return this.http
      .get<UsersResult>(`${this.apiUrl}/users`, { headers: headers })
      .pipe(
        map((x) => {
          console.log(x);
          //   this._user.next({
          //     username: x.username,
          //     role: x.role,
          //     originalUserName: x.originalUserName,
          //   });
          //   this.setLocalStorage(x);
          // this.startTokenTimer();
          return x;
        })
      );
  }
  public ValidationToken(): boolean {
    let expirationString = localStorage.getItem('expiration');
    if (expirationString != null) {
      let expiration = Date.parse(expirationString);
      if (expiration < Date.now()) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  //   user$ = this._user.asObservable();
}
