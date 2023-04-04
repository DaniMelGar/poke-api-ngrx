import { pkmnReducer } from './reducers/pkmn.reducers';
import { pkmnListReducer} from './reducers/pkmn-list.reducers';
import { PkmnListState, PkmnState } from '../models/pkmn.state';
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  pkmnList: PkmnListState;
  pkmn: PkmnState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pkmnList: pkmnListReducer,
  pkmn: pkmnReducer,
}
