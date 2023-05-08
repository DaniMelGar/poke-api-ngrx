import { loadPkmnByName, loadedPkmnByName,filteredPkmnByName } from '../actions/pkmn-list.actions';
import { PkmnState, PkmnFilterState } from '../../models/pkmn.state';
import { createReducer, on } from '@ngrx/store';

export const initialState: PkmnFilterState = { loading: false, pkmn: null as any, pkmnFiltered: null as any };

export const pkmnFilterReducer = createReducer(
  initialState,
  on(loadPkmnByName, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedPkmnByName, (state, { pkmn }) => {
    return { ...state, loading: false, pkmn };
  }),
  on(filteredPkmnByName, (state, { pkmnFiltered }) => {
    return { ...state, pkmnFiltered };
  })
);
