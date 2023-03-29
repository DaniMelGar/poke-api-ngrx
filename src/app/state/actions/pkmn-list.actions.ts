import { PkmnModel, PkmnListModel } from './../../models/pkmn.interface';
import { createAction, props } from '@ngrx/store';

export const loadPkmnList = createAction(
  '[Pkmn List] Load pkmnList'
);

export const loadedPkmnList = createAction(
  '[Pkmn List] Loaded pkmnList success',
  props<{ pkmnList: PkmnListModel }>()
);
