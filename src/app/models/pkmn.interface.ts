export interface PkmnModel{
  id: number;
  name: string;
  imgUrl: string;
}

export interface PkmnListModel{
  count: number;
  next: number;
  previous: number;
  results: string[];
}
