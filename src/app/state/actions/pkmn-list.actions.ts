import { PkmnModel, PkmnListModel, SpecieModel } from './../../models/pkmn.interface';
import { createAction, props } from '@ngrx/store';

export const loadPkmnList = createAction(
  '[Pkmn List] Load pkmnList',
  props<{ offset: any }>()
);

export const loadedPkmnList = createAction(
  '[Pkmn List] Loaded pkmnList success',
  props<{ pkmnList: PkmnListModel }>()
);

export const loadPkmnByName = createAction(
  '[Pkmn List] Load pkmn by name',
  props<{ name : string }>()
);

export const loadedPkmnByName = createAction(
  '[Pkmn List] Loaded pkmn by name success',
  props<{ pkmn: PkmnModel, name : string }>()
);

export const loadPkmnSpecie = createAction(
  '[Pkmn Details Evolutions] Load specie by url',
  props<{ url: any }>()
);

export const loadedPkmnSpecie = createAction(
  '[Pkmn Details Evolutions] Loaded specie by url success',
  props<{ specie: SpecieModel, url: any }>()
);
