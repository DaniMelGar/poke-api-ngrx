import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {loadPkmnSpecie} from './../../../state/actions/pkmn-list.actions';
import { selectPkmnSpecie } from 'src/app/state/selectors/pkmn-list.selectors';

@Component({
  selector: 'app-pkmn-details-evolutions',
  templateUrl: './pkmn-details-evolutions.component.html',
  styleUrls: ['./pkmn-details-evolutions.component.css']
})
export class PkmnDetailsEvolutionsComponent {

  @Input() species: any;
  specie$: Observable<any> = of()

  constructor(private store: Store<any>){ }

  ngOnInit(): void {
    this.store.dispatch(loadPkmnSpecie({url: this.species.url}))
    this.specie$ = this.store.select(selectPkmnSpecie)
    //console.log(this.specie$.base_happiness)
  }

}
