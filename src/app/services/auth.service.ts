import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as moment from 'moment';
import { ApiService } from './api.service';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_NAME = 'auth_token';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token() {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private apiService: ApiService) {
    //Do not verify expiration
    this._isLoggedIn$.next(!!this.token);
  }

  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
        console.log(response.token);
      })
    );
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem(this.TOKEN_NAME);
  }

  verify() {
    return this.apiService.verify().pipe(
      tap((response: any) => {
        console.log(response.foo);
      })
    );
  }
}
