import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import {loadPkmnSpecie} from './../../../state/actions/pkmn-list.actions';
import { selectPkmnSpecie } from 'src/app/state/selectors/pkmn-list.selectors';
import { SpecieModel } from 'src/app/models/pkmn.interface';

@Component({
  selector: 'app-pkmn-details-evolutions',
  templateUrl: './pkmn-details-evolutions.component.html',
  styleUrls: ['./pkmn-details-evolutions.component.css']
})
export class PkmnDetailsEvolutionsComponent {

  @Input() species: any;
  specie$: Observable<SpecieModel> = of()

  constructor(private store: Store<any>){ }

  ngOnInit(): void {
    this.store.dispatch(loadPkmnSpecie({url: this.species.url}))
    this.specie$ = this.store.select(selectPkmnSpecie)
    //console.log(this.specie$.pipe(tap(evolution_chain)))
  }

}
