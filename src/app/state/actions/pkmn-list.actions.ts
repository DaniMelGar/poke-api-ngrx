import { PkmnModel, PkmnListModel } from './../../models/pkmn.interface';
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
