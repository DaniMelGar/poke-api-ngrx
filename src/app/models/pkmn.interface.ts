export interface PkmnModel{
  id: string;
  name: string;
  imgUrl: string;
  types: string[];
  moves: string[];
  stats: string[];
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
