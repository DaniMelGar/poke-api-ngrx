import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap, tap, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {
  FetchedPkmnListModel,
  PkmnListModel,
  PkmnModel,
  PkmnResponse,
  Pokemon,
  PkmnEvolutionChainModel,
} from '../models/pkmn.interface';
import { convertPokemonEvolutionChain, transformPkmnListIntoPkmn } from 'src/utils';

@Injectable({
  providedIn: 'root',
})
export class PkmnService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  /*getPkmnList(): Observable<any>{
    return this.http.get(this.apiUrl + 'pokemon?limit=100000&offset=0');
  }*/

  getPkmnList(): Observable<PkmnListModel[]> {
    return this.http
      .get<FetchedPkmnListModel>(this.apiUrl + 'pokemon?limit=100000&offset=0')
      .pipe(map(transformPkmnListIntoPkmn));
  }



  getPkmnListPag(offset: any): Observable<PkmnListModel[]> {
    return this.http
      .get<FetchedPkmnListModel>(
        `${this.apiUrl}pokemon?limit=${environment.pkmnPageLimit}&offset=${offset}`
      )
      .pipe(map(transformPkmnListIntoPkmn));
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

  getPkmnByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon/${name}`);
    // .pipe(
    //   map((resp: any) => ({
    //     id: resp.id,
    //     name,
    //     sprites: resp.sprites,
    //     types: resp.types,
    //     moves: resp.moves,
    //     stats: resp.stats,
    //     species: resp.species,
    //     chain: resp.chain,
    //   }))
    // );
  }

  // getSpecieByUrl(url: any): Observable<any>{
  //   return this.http.get(url);
  // }

  // getSpecieByUrl(url: any): Observable<SpecieModel> {
  //   return this.http.get(url).pipe(
  //     map((specie: any) => {
  //       return {
  //         evolution_chain: specie.evolution_chain,
  //       };
  //     })
  //   );
  // }

  // getEvolutionChainBySpecieUrl(url: any): Observable<any>{
  //   return this.http.get(url);
  // }

  // private getEvolutionChainBySpecie(url: any): Observable<any>{
  //   return this.http.get(url).pipe(
  //     map((specie: any) =>{
  //       return{
  //         this.http.get(specie.evolution_chain)
  //       }
  //     })
  //   );
  // }

  getPkmnEvolutionsByName(name: string): Observable<any> {
    // console.log("service:"+name)
    // return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
    return this.getPkmnByName(name).pipe(
      switchMap((pokemonResponse) =>
        this.http
          .get<any>(pokemonResponse.species.url)
          .pipe(
            switchMap((speciesResponse) =>
              this.http.get<any>(speciesResponse.evolution_chain.url)
            )
          )
      ),
      map((evolutionChainResponse) => convertPokemonEvolutionChain(evolutionChainResponse))
    );
  }




}
