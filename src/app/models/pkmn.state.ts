import { PkmnModel,PkmnListModel } from "./pkmn.interface";

export interface PkmnListState{
  loading: boolean,
  pkmnList: Readonly<PkmnListModel>;
}

export interface PkmnState{
  loading: boolean,
  pkmn: Readonly<PkmnModel>;
}

export interface PkmnFilterState{
  loading: boolean,
  pkmn: Readonly<PkmnModel>;
  pkmnFiltered: PkmnListModel;
}