import { PkmnListState, PkmnState } from './../../models/pkmn-list.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

//TODO: Es el selector que tiene relacion con la propiedad "pkmnList"

export const selectPkmnListFeature = (state: AppState) => state.pkmnList;//TODO: PADRE
export const selectPkmnByNameFeature = (state: AppState) => state.pkmn;

export const selectPkmnList = createSelector(
  selectPkmnListFeature,
  (state: PkmnListState) => state.pkmnList //TODO: HIJO
);

export const selectPkmnListLoading = createSelector(
  selectPkmnListFeature,
  (state: PkmnListState) => state.loading //TODO: HIJO
);

export const selectPkmn = createSelector(
  selectPkmnByNameFeature,
  (state: PkmnState) => state.pkmn //TODO: HIJO
);

export const selectPkmnLoading = createSelector(
  selectPkmnByNameFeature,
  (state: PkmnState) => state.loading //TODO: HIJO
);
