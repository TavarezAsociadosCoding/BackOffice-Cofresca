import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from '../../models/profile/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly apiUrl = `${environment.apiUrl}api/`;

  constructor(private http: HttpClient) {}

  public async GetProfile(userId: string) {
    return this.http
      .get<Profile>(this.apiUrl + `accounts/profile/${userId}`)
      .toPromise();
  }
}
