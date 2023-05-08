import { pkmnReducer, evolutionChainReducer } from './reducers/pkmn.reducers';
import { pkmnListReducer } from './reducers/pkmn-list.reducers';
import {
  PkmnEvolutionChainState,
  PkmnListState,
  PkmnState,
  PkmnFilterState,
} from '../models/pkmn.state';
import { pkmnFilterReducer } from './reducers/pkmn-filter.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { PkmnEvolutionChainModel } from '../models/pkmn.interface';

export interface AppState {
  pkmnList: PkmnListState;
  pkmn: PkmnState;
  //specie: SpecieState;
  evolutionChain: PkmnEvolutionChainState;
  pkmnFilter: PkmnFilterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  pkmnList: pkmnListReducer,
  pkmn: pkmnReducer,
  //specie: specieReducer,
  evolutionChain: evolutionChainReducer,
  pkmnFilter: pkmnFilterReducer,
};
