import { loadPkmnByName, loadedPkmnByName, loadPkmnSpecie, loadedPkmnSpecie} from '../actions/pkmn-list.actions';
import { PkmnState, SpecieState } from '../../models/pkmn.state';
import { createReducer, on } from '@ngrx/store';


export const initialState: PkmnState = {loading: false, pkmn: null as any};

export const initialStateSpecie: SpecieState = {specie: null as any};

export const pkmnReducer = createReducer(
  initialState,
  on(loadPkmnByName, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedPkmnByName, (state, { pkmn }) => {
    return { ...state, loading: false, pkmn }
}),

);

export const specieReducer = createReducer(
  initialStateSpecie,
  on(loadPkmnSpecie, (state) => {
    return { ...state}
  }),
  on(loadedPkmnSpecie, (state, { specie }) => {
    return { ...state, specie }
}),

);
