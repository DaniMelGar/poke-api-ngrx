import { loadPkmnList } from './../../state/actions/pkmn-list.actions';
import { selectPkmnListLoading, selectPkmnList } from './../../state/selectors/pkmn-list.selectors';
import { Observable, Subject, of, take, takeUntil } from 'rxjs';
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
  offset : any
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<any>, private router: Router, private aroute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.loading$ = this.store.select(selectPkmnListLoading) //true, false

    this.aroute.queryParams.pipe(
      takeUntil(this.unsubscribe$)
      ).subscribe(params => {
        const offset = params['offset'];
        this.store.dispatch(loadPkmnList({offset: offset}))
        this.pkmnList$ = this.store.select(selectPkmnList)
      });

  }


  searchPkmnByName(name: string): void{
    this.router.navigate(['/pkmn-details', name]);
  }

}

