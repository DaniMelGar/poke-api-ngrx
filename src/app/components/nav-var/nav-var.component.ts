import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, map, of, startWith, takeUntil } from 'rxjs';
import { PkmnListModel } from 'src/app/models/pkmn.interface';
import {
  filteredPkmnByName,
  loadPkmnList,
} from 'src/app/state/actions/pkmn-list.actions';
import { selectPkmnList } from 'src/app/state/selectors/pkmn-list.selectors';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavVarComponent {

  pkmnCtrl = new FormControl('');
  pkmnList$: Observable<any> = of([]);
  pokemons: PkmnListModel[] = [];
  filteredPkmnList$: Observable<any> = of([]);
  searchTerm: string = '';

  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<any>, private aroute: ActivatedRoute, private router: Router) {
    this.store
    .select(filteredPkmnByName)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((pkmnListFiltered: any) => {
      console.log(pkmnListFiltered.pkmnFilter.pkmnFiltered)
      this.pkmnList$ = of(pkmnListFiltered.pkmnFilter.pkmnFiltered);
    });
  }

  ngOnInit(): void {
    this.pkmnCtrl.valueChanges.subscribe((pkmn) => {
      takeUntil(this.unsubscribe$)
      this.store.dispatch(
        filteredPkmnByName({
          pkmnFiltered: pkmn ? this.filterPkmn(pkmn) : this.pokemons.slice(),
        })
      );
    });

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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
