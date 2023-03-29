import { PkmnModel } from "./pkmn.interface";

export interface PkmnListState{
  loading: boolean,
  pkmnList: ReadonlyArray<PkmnModel>;
}
