import {
  PkmnModel,
  PkmnListModel,
  PkmnEvolutionChainModel,
} from './pkmn.interface';

export interface PkmnListState {
  loading: boolean;
  pkmnList: Readonly<PkmnListModel>;
}

export interface PkmnState {
  loading: boolean;
  pkmn: Readonly<PkmnModel>;
}

// export interface SpecieState{
//   specie: Readonly<SpecieModel>;
// }

export interface PkmnEvolutionChainState {
  evolutionChain: Readonly<PkmnEvolutionChainModel>;
}
export interface PkmnFilterState {
  loading: boolean;
  pkmn: Readonly<PkmnModel>;
  pkmnFiltered: PkmnListModel;
}
