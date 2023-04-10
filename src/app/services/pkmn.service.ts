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

  getPkmnListPag(offset: string): Observable<any>{
    return this.http.get(`${this.apiUrl}pokemon?limit=20&offset=${offset}`);
  }

  /*getAll(): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=151`).pipe(
      map(res => {
        return res.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));
      })
    );
  }*/

  /* getPkmnByName(name: string): Observable<any>{
    return this.http.get(this.apiUrl + 'pokemon/' + name);
  } */

  getPkmnByName(name: string): Observable<any>{
    const url = `${this.apiUrl}pokemon/${name}`;
    return this.http.get(url);
  }

}
