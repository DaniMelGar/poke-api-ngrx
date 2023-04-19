import { pkmnReducer, specieReducer } from './reducers/pkmn.reducers';
import { pkmnListReducer} from './reducers/pkmn-list.reducers';
import { PkmnListState, PkmnState, SpecieState } from '../models/pkmn.state';
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  pkmnList: PkmnListState;
  pkmn: PkmnState;
  specie: SpecieState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pkmnList: pkmnListReducer,
  pkmn: pkmnReducer,
  specie: specieReducer,
}
