import { loadPkmnByName } from './../../state/actions/pkmn-list.actions';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPkmnLoading, selectPkmn } from './../../state/selectors/pkmn-list.selectors';

@Component({
  selector: 'app-pkmn-details',
  templateUrl: './pkmn-details.component.html',
  styleUrls: ['./pkmn-details.component.css']
})
export class PkmnDetailsComponent {

  loading$: Observable<boolean> = new Observable()
  pkmn$: Observable<any> = new Observable()

  constructor(private store: Store<any>){}

  ngOnInit(): void {

    this.loading$ = this.store.select(selectPkmnLoading) //true, false

    //this.store.dispatch(loadPkmnByName(name))

    this.pkmn$ = this.store.select(selectPkmn)

  }

}
