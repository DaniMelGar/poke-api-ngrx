export interface PkmnModel{
  id: number;
  name: string;
  imgUrl: string;
  types: string[];
  moves: string[];
  stats: string[];
}

export interface PkmnListModel{
  count: number;
  next: number;
  previous: number;
  results: string[];
}
