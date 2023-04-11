import { Injectable } from '@angular/core';
import { Observable,map,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { FetchedPkmnListModel, PkmnListModel, PkmnModel } from '../models/pkmn.interface';

@Injectable({
  providedIn: 'root'
})
export class PkmnService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  /*getPkmnList(): Observable<any>{
    return this.http.get(this.apiUrl + 'pokemon?limit=100000&offset=0');
  }*/

  getPkmnList(): Observable<PkmnListModel[]>{
    return this.http.get<FetchedPkmnListModel>(this.apiUrl + 'pokemon?limit=100000&offset=0')
    .pipe(
      map( this.transformPkmnListIntoPkmn )
    )
  }

  private transformPkmnListIntoPkmn(resp: FetchedPkmnListModel): PkmnListModel[]{

    return resp.results.map(
      (pkmn: any) =>{
        const urlArr = pkmn.url.split('/');
        const id = urlArr[6];
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return{
          id,
          imgUrl,
          name: pkmn.name,
        }
      }
    )

  }

  getPkmnListPag(offset: any): Observable<PkmnListModel[]>{
    return this.http.get<FetchedPkmnListModel>(`${this.apiUrl}pokemon?limit=21&offset=${offset}`)
    .pipe(
      map( this.transformPkmnListIntoPkmn )
    );
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
