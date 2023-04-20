import { PkmnService } from './../../../services/pkmn.service';
import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import {loadPkmnSpecie} from './../../../state/actions/pkmn-list.actions';
import { selectPkmnSpecie } from 'src/app/state/selectors/pkmn-list.selectors';
import { PkmnModel, SpecieModel } from 'src/app/models/pkmn.interface';

@Component({
  selector: 'app-pkmn-details-evolutions',
  templateUrl: './pkmn-details-evolutions.component.html',
  styleUrls: ['./pkmn-details-evolutions.component.css']
})
export class PkmnDetailsEvolutionsComponent {

  @Input() name: string = ""
  // specie$: Observable<SpecieModel> = of()
  //evolutions$: Observable<any> = this.pkmnService.getPkmnEvolutionsByName('bulbasaur');


  constructor(private store: Store<any>, private pkmnService: PkmnService){

  }

  ngOnInit(): void {
    // this.store.dispatch(loadPkmnSpecie({url: this.species.url}))
    // this.specie$ = this.store.select(selectPkmnSpecie)
    //console.log(this.specie$.pipe(tap(evolution_chain)))

    // this.store.dispatch(loadPkmnEvolutions({pkmn: this.pkmn}))
    // this.evolutions$ = this.store.select(selectPkmnEvolutions)
    this.pkmnService.getPkmnEvolutionsByName(this.name).subscribe(res => console.log(this.pkmnService.convertPokemonEvolutionChain(res)))

  }

}
