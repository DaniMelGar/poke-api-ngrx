import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private BE = environment.BE_API_URL;

  login(email: string, password: string) {
    return this.http.post(this.BE + 'token', { email, password });
  }

  verify() {
    return this.http.get(this.BE + 'verify');
  }
}
