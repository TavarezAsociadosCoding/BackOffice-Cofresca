import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from '../../models/profile/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly apiUrl = `${environment.apiUrl}/api/accounts/`;

  constructor(private http: HttpClient) {}

  public async GetProfile(userId: string) {
    return this.http
      .get<Profile>(this.apiUrl + `accounts/profile/${userId}`)
      .toPromise();
  }

  public ActivateUser(userId: string) {
    return this.http
      .put(this.apiUrl + `accounts/activate_profile`, {
        UserId: userId,
        IsActive: true,
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

  public editProfile(userId: string, _profile: Profile) {
    console.log(_profile);
    return this.http
      .put<Profile>(`${this.apiUrl}editUser/${userId}`, {
        companyName: _profile.companyName,
        rnc: _profile.rnc,
        phone: _profile.phone,
        address: _profile.address,
        phoneGerente: _profile.phoneGerente,
        hoursDelivery: _profile.hoursDelivery,
      })
      .pipe(
        map((x) => {
          console.log(x);
          return x;
        })
      );
  }
}
