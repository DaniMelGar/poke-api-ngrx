import { loadPkmnList } from './../../state/actions/pkmn-list.actions';
import { selectPkmnListLoading, selectPkmnList } from './../../state/selectors/pkmn-list.selectors';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.css']
})
export class PkmnListComponent {

  loading$: Observable<boolean> = new Observable()
  pkmnList$: Observable<any> = new Observable()

  constructor(private store: Store<any>,) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectPkmnListLoading) //true, false

    this.store.dispatch(loadPkmnList())

    this.pkmnList$ = this.store.select(selectPkmnList)

  }

}
