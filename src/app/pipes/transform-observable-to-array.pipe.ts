import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PkmnEvolutionChainModel } from '../models/pkmn.interface';

@Pipe({
  name: 'transformObservableToArray',
})
export class TransformObservableToArrayPipe implements PipeTransform {
  transform(items: Observable<any>): any[] {
    // const datos = Array.of(items.pipe(
    //   map((data: any) => {
    //   return {
    //     name: data.name,
    //     evolves_to: data.evolves_to,
    //   };
    // });))
    // return datos;
    return Array.of(items);
  }
}
