import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, map, of, startWith, takeUntil } from 'rxjs';
import { PkmnListModel } from 'src/app/models/pkmn.interface';
import { loadPkmnList } from 'src/app/state/actions/pkmn-list.actions';
import { selectPkmnList } from 'src/app/state/selectors/pkmn-list.selectors';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css'],
})
export class NavVarComponent {
  pkmnCtrl = new FormControl('');
  pkmnList$: Observable<any> = of([]);
  pokemons: PkmnListModel[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<any>, private aroute: ActivatedRoute) {
    this.pkmnList$ = this.pkmnCtrl.valueChanges.pipe(
      startWith(''),
      map((pkmn) => (pkmn ? this.filterPkmn(pkmn) : this.pokemons.slice()))
    );
  }

  ngOnInit(): void {
    this.aroute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const offset = params['offset'];
        this.store.dispatch(loadPkmnList({ offset: offset }));
        this.pkmnList$ = this.store.select(selectPkmnList);
        this.pkmnList$.subscribe((pkmn) => (this.pokemons = pkmn));
      });
  }

  private filterPkmn(pkmn: string): PkmnListModel[] {
    const filterValue = pkmn.toLowerCase();
    return this.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(filterValue)
    );
  }
}
