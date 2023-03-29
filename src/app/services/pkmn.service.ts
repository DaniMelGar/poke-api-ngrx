import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  private url: string = 'https://pokeapi.co/api/v2/';
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getPkmnList(): Observable<any>{
    return of(this.http.get(this.url + 'pokemon?limit=100000&offset=0'))
  }

}
