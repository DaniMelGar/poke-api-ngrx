import { PkmnModel,PkmnListModel } from "./pkmn.interface";

export interface PkmnListState{
  loading: boolean,
  pkmnList: Readonly<PkmnListModel>;
}
