import { pkmnReducer } from './reducers/pkmn.reducers';
import { pkmnFilterReducer } from './reducers/pkmn-filter.reducer';
import { pkmnListReducer} from './reducers/pkmn-list.reducers';
import { PkmnListState, PkmnState, PkmnFilterState } from '../models/pkmn.state';
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  pkmnList: PkmnListState;
  pkmn: PkmnState;
  pkmnFilter: PkmnFilterState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pkmnList: pkmnListReducer,
  pkmn: pkmnReducer,
  pkmnFilter: pkmnFilterReducer,
}
