export interface PkmnModel{
  id: string;
  name: string;
  imgUrl: string;
  types: string[];
  moves: string[];
  stats: StatListModel[];
  species: string[];
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
