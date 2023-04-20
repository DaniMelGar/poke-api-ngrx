import { Observable } from "rxjs";

export interface PkmnModel{
  id: number;
  name: string;
  sprites: any;
  types: string[];
  moves: string[];
  stats: StatListModel[];
  species: any;
}

export interface Pokemon {
  name: string;
  url: string;
  evolves_to: Pokemon[];
}

export interface PkmnResponse {
  name: string;
  response: any;
  evolves_to: PkmnResponse[];
}

export interface FetchedPkmnListModel{
  count: number;
  next: number;
  previous: number;
  results: string[];
}

export interface PkmnListModel{
  id: string;
  name: string;
  imgUrl: string;
}

export interface StatListModel{
  base_stat: number;
  effort: number;
  stat: StatModel;
}

export interface StatModel{
  name: string;
  url: string;
}

export interface SpecieModel{
  evolution_chain: string;
}

export interface PkmnEvolutionsModel{
  name : string,
  evolves_to: PkmnEvolutionsModel[]
}
