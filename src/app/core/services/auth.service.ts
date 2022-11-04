import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';
import { ApplicationUser } from '../models/application-user';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../models/Iresponse';
import { LoginResult, RegisterResult } from '../models/Iresult';
import { Profile } from '../models/profile/profile';

// interface LoginResult {
//   username: string;
//   role: string;
//   originalUserName: string;
//   accesstoken: string;
//   refreshToken: string;
// }

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private readonly apiUrl = `${environment.apiUrl}api/accounts`;
  private timer: Subscription | null = null;
  private _user = new BehaviorSubject<ApplicationUser | null>(null);
  private _register = new BehaviorSubject<RegisterUser | null>(null);

  user$ = this._user.asObservable();

  // private storageEventListener(event: StorageEvent) {
  //   if (event.storageArea === localStorage) {
  //     if (event.key === "logout-event") {
  //       // this.stopTokenTimer();
  //       this._user.next(null);
  //     }
  //     if (event.key === "login-event") {
  //       // this.stopTokenTimer();
  //       this.http.get<LoginResult>(`${this.apiUrl}`).subscribe((x) => {
  //         this._user.next({
  //           username: x.username,
  //           role: x.role,
  //           originalUserName: x.originalUserName,
  //         });
  //       });
  //     }
  //   }
  // }

  constructor(private router: Router, private http: HttpClient) {
    // window.addEventListener("storage", this.storageEventListener.bind(this));
  }

  ngOnDestroy(): void {
    // window.removeEventListener("storage", this.storageEventListener.bind(this));
  }
  public getUserIdStorage(): string {
    return localStorage.getItem('userId');
  }

  login(username: string, password: string) {
    // const body = JSON.stringify({ username: username, password: password });

    return this.http
      .post<LoginResult>(`${this.apiUrl}/login`, {
        username: username,
        password: password,
      })
      .pipe(
        map((x) => {
          if (x.success == true) {
            this._user.next({
              username: x.username,
              role: x.role,
              originalUserName: x.originalUserName,
            });
            this.setLocalStorage(x);
            return x;
          }
          return x;
          // this.startTokenTimer();
        })
      );
  }

  public profile() {
    const auth_token = this.getLocalStorage();

    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });

    return this.http
      .post<LoginResult>(`${this.apiUrl}/profile`, { headers: headers })
      .pipe(
        map((x) => {
          this._user.next({
            username: x.username,
            role: x.role,
            originalUserName: x.originalUserName,
          });
          this.setLocalStorage(x);
          // this.startTokenTimer();
          return x;
        })
      );
  }
  public editProfile(userId: string, _profile: Profile) {
    return this.http
      .put<Profile>(`${this.apiUrl}/editUser/${userId}`, {
        companyName: _profile.companyName,
        rnc: _profile.rnc,
        phone: _profile.phone,
        address: _profile.address,
        phoneGerente: _profile.phoneGerente,
      })
      .pipe(
        map((x) => {
          console.log(x);
          // this._register.next({
          //   message: x.message,
          //   success: x.success,
          // });
          return x;
        })
      );
    // .pipe(
    //   map((x) => {
    //     // this.setLocalStorage(x);
    //     return x;
    //   })
    // );
  }
  register({
    username,
    firstname,
    lastname,
    Email,
    Phone,
    Indentification,
    Password,
    ConfirmPassword,
  }) {
    // const body = JSON.stringify({ username: username, password: password });

    return this.http
      .post<RegisterResult>(`${this.apiUrl}/register`, {
        firstName: firstname,
        lastName: lastname,
        email: Email,
        phone: Phone,
        indentification: Indentification,
        userName: username,
        password: Password,
        confirmPassword: ConfirmPassword,
      })
      .pipe(
        map((x) => {
          console.log(x);
          this._register.next({
            message: x.message,
            success: x.success,
          });
          // this.setLocalStorage(x);
          // this.startTokenTimer();
          return x;
        })
      );
  }

  logout() {
    this.clearLocalStorage();
    // this.http
    //   .post<unknown>(`${this.apiUrl}/logout`, {})
    //   .pipe(
    //     finalize(() => {
    //       this.clearLocalStorage();
    //       this._user.next(null);
    //       this.stopTokenTimer();
    //       this.router.navigate(["login"]);
    //     })
    //   )
    //   .subscribe();
  }

  // refreshToken(): Observable<LoginResult | null> {
  //   const refreshToken = localStorage.getItem("refresh_token");
  //   if (!refreshToken) {
  //     this.clearLocalStorage();
  //     return of(null);
  //   }

  //   return this.http
  //     .post<LoginResult>(`${this.apiUrl}/refresh-token`, { refreshToken })
  //     .pipe(
  //       map((x) => {
  //         this._user.next({
  //           username: x.username,
  //           role: x.role,
  //           originalUserName: x.originalUserName,
  //         });
  //         this.setLocalStorage(x);
  //         // this.startTokenTimer();
  //         return x;
  //       })
  //     );
  // }

  setLocalStorage(x: LoginResult) {
    localStorage.setItem('access_token', x.accesstoken);
    localStorage.setItem('expiration', x.expiration);
    localStorage.setItem('userId', x.userid);

    // localStorage.setItem('login-event', 'login' + Math.random());
  }

  clearLocalStorage() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');

    // localStorage.removeItem('refresh_token');
    // localStorage.setItem('logout-event', 'logout' + Math.random());
  }
  getLocalStorage() {
    localStorage.getItem('access_token');
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
      // const accessToken = localStorage.getItem("access_token");
      // if (!accessToken) {
      //   return false;
      // }
    }
    return false;
  }
  private getTokenRemainingTime() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return 0;
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    return expires.getTime() - Date.now();
  }

  // private startTokenTimer() {
  //   const timeout = this.getTokenRemainingTime();
  //   this.timer = of(true)
  //     .pipe(
  //       delay(timeout),
  //       tap({
  //         next: () => this.refreshToken().subscribe(),
  //       })
  //     )
  //     .subscribe();
  // }

  // private stopTokenTimer() {
  //   this.timer?.unsubscribe();
  // }
}
