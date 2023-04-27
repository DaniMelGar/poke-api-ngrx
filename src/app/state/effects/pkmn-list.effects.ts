import { PkmnService } from './../../services/pkmn.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

@Injectable()
export class PkmnListEffects {
  loadPkmnList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Pkmn List] Load pkmnList'),
      mergeMap((action: any) =>
        this.pkmnService.getPkmnListPag(action.offset).pipe(
          map((pkmnList) => ({
            type: '[Pkmn List] Loaded pkmnList success',
            pkmnList,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  /* loadPkmnByName$ = createEffect(() => this.actions$.pipe(
      ofType('[Pkmn List] Load pkmn by name'),
      mergeMap((action: any) => this.pkmnService.getPkmnByName(action.name)//TODO Retorna la data [...]
          .pipe(
              map(pkmn => ({ type: '[Pkmn List] Loaded pkmn by name success', pkmn })),
              catchError(() => EMPTY)
          ))
    )
    ); */

  loadPkmnByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Pkmn Details] Load pkmn by name'),
      mergeMap((action: any) =>
        this.pkmnService.getPkmnByName(action.name).pipe(
          map((pkmn) => ({
            type: '[Pkmn Details] Loaded pkmn by name success',
            pkmn,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // loadPkmnSpecie$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Pkmn Details Evolutions] Load specie by url'),
  //   mergeMap((action: any) => this.pkmnService.getSpecieByUrl(action.url)
  //       .pipe(
  //           map(specie => ({ type: '[Pkmn Details Evolutions] Loaded specie by url success', specie })),
  //           catchError(() => EMPTY)
  //       ))
  // )
  // );

  loadPkmnEvolutionChain$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Pkmn Details Evolutions] Load evolutionChain by name success'),
      mergeMap((action: any) =>
        this.pkmnService.getPkmnEvolutionChainByName(action.name).pipe(
          tap((e) => console.log(e)),
          map((evolutionChain) => ({
            type: '[Pkmn Details Evolutions] Loaded evolutionChain by name success',
            evolutionChain,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private pkmnService: PkmnService) {}
}
