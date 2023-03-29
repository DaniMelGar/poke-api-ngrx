import { pkmnListReducer } from './reducers/pkmn-list.reducers';
import { PkmnListState } from './../models/pkmn-list.state';
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  pkmnList: PkmnListState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pkmnList: pkmnListReducer
}
