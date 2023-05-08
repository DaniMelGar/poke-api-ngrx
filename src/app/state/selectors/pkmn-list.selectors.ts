import {
  PkmnListState,
  PkmnState,
  PkmnEvolutionChainState,
  PkmnFilterState,
} from '../../models/pkmn.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

//TODO: Es el selector que tiene relacion con la propiedad "pkmnList"

export const selectPkmnListFeature = (state: AppState) => state.pkmnList; //TODO: PADRE
export const selectPkmnByNameFeature = (state: AppState) => state.pkmn;
//export const selectPkmnSpecieFeature = (state: AppState) => state.specie;
export const selectPkmnEvolutionChainFeature = (state: AppState) =>
  state.evolutionChain;
export const selectPkmnFilteredFeature = (state: AppState) => state.pkmnFilter;

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

// export const selectPkmnSpecie = createSelector(
//   selectPkmnSpecieFeature,
//   (state: SpecieState) => state.specie //TODO: HIJO
// );

export const selectPkmnEvolutionChain = createSelector(
  selectPkmnEvolutionChainFeature,
  (state: PkmnEvolutionChainState) => state.evolutionChain //TODO: HIJO
);
export const selectPkmnFiltered = createSelector(
  selectPkmnFilteredFeature,
  (state: PkmnFilterState) => state.pkmnFiltered //TODO: HIJO
);
