import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getPkmnList(): Observable<any>{
    return this.http.get(this.apiUrl + 'pokemon?limit=100000&offset=0');
  }

}
