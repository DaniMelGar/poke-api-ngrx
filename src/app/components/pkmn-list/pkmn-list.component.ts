import { loadPkmnList } from './../../state/actions/pkmn-list.actions';
import { selectPkmnListLoading, selectPkmnList } from './../../state/selectors/pkmn-list.selectors';
import { Observable, of, take } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
//import { offset } from '@popperjs/core';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.css']
})
export class PkmnListComponent {

  loading$: Observable<boolean> = of(false)
  pkmnList$: Observable<any> = of([])
  cont: number
  offset : any

  constructor(private store: Store<any>, private router: Router, private route: ActivatedRoute) {
    this.cont = 1
    this.offset = route.snapshot.paramMap.get('offset')
  }

  ngOnInit(): void {

    this.loading$ = this.store.select(selectPkmnListLoading) //true, false

    this.store.dispatch(loadPkmnList(this.offset))

    this.pkmnList$ = this.store.select(selectPkmnList)

    this.resetCont()

  }

  increment(): number{
    return this.cont++
  }

  resetCont(): void{
    this.cont = 1
  }

  searchPkmnByName(name: string): void{
    this.router.navigate(['/pkmn-details', name]);
  }

}

