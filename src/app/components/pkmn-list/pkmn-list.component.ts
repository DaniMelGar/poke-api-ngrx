import { loadPkmnList, loadPkmnByName } from './../../state/actions/pkmn-list.actions';
import { selectPkmnListLoading, selectPkmnList } from './../../state/selectors/pkmn-list.selectors';
import { Observable } from 'rxjs';
import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.css']
})
export class PkmnListComponent {

  loading$: Observable<boolean> = new Observable()
  pkmnList$: Observable<any> = new Observable()
  cont: number

  constructor(private store: Store<any>) {
    this.cont = 1
  }

  ngOnInit(): void {

    this.loading$ = this.store.select(selectPkmnListLoading) //true, false

    this.store.dispatch(loadPkmnList())

    this.pkmnList$ = this.store.select(selectPkmnList)

    this.resetCont()

  }

  increment(): number{
    return this.cont++
  }

  resetCont(){
    this.cont = 1
  }

  searchPkmnByName(name: string){
    this.store.dispatch(loadPkmnByName({name}))
  }

}

