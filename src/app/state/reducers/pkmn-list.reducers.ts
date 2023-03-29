import { loadPkmnList, loadedPkmnList } from '../actions/pkmn-list.actions';
import { PkmnListState } from '../../models/pkmn-list.state';
import { createReducer, on } from '@ngrx/store';


export const initialState: PkmnListState = {loading: false, pkmnList: []};

export const pkmnListReducer = createReducer(
  initialState,
  on(loadPkmnList, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedPkmnList, (state, { pkmnList }) => {
      return { ...state, loading: false, pkmnList }
  })
);
