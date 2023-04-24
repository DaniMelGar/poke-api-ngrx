import { PkmnService } from './../../../services/pkmn.service';
import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import {loadPkmnEvolutionChain} from './../../../state/actions/pkmn-list.actions';
import { selectPkmnEvolutionChain } from 'src/app/state/selectors/pkmn-list.selectors';
import { PkmnModel } from 'src/app/models/pkmn.interface';
import 'zone.js/dist/zone';

@Component({
  selector: 'app-pkmn-details-evolutions',
  templateUrl: './pkmn-details-evolutions.component.html',
  styleUrls: ['./pkmn-details-evolutions.component.css']
})
export class PkmnDetailsEvolutionsComponent {

  @Input() name: string = ""
  // specie$: Observable<SpecieModel> = of()
  evolutions$: Observable<any> = of()


  constructor(private store: Store<any>, private pkmnService: PkmnService){

  }

  ngOnInit(): void {
    // this.store.dispatch(loadPkmnSpecie({url: this.species.url}))
    // this.specie$ = this.store.select(selectPkmnSpecie)
    //console.log(this.specie$.pipe(tap(evolution_chain)))

    this.store.dispatch(loadPkmnEvolutionChain({name: this.name}))
    this.evolutions$ = this.store.select(selectPkmnEvolutionChain)

    //this.pkmnService.getPkmnEvolutionsByName(this.name).subscribe(res => console.log(res))
    //console.log(this.evolutions$)

  }

}
