import { PkmnModel } from './../../models/pkmn.interface';
import { loadPkmnByName, loadedPkmnByName } from '../actions/pkmn-list.actions';
import { PkmnState } from '../../models/pkmn-list.state';
import { createReducer, on } from '@ngrx/store';


export const initialState: PkmnState = {loading: false, pkmn: null as any};

export const pkmnReducer = createReducer(
  initialState,
  on(loadPkmnByName, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedPkmnByName, (state, { pkmn }) => {
    return { ...state, loading: false, pkmn }
}),

);
