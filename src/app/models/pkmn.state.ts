import { PkmnModel,PkmnListModel, SpecieModel } from "./pkmn.interface";

export interface PkmnListState{
  loading: boolean,
  pkmnList: Readonly<PkmnListModel>;
}

export interface PkmnState{
  loading: boolean,
  pkmn: Readonly<PkmnModel>;
}

export interface SpecieState{
  specie: Readonly<SpecieModel>;
}
