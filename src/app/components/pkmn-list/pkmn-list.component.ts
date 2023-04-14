import { loadPkmnList } from './../../state/actions/pkmn-list.actions';
import {
  selectPkmnListLoading,
  selectPkmnList,
} from './../../state/selectors/pkmn-list.selectors';
import { Observable, of, take } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.css'],
})
export class PkmnListComponent {
  verify() {
    this.authService.verify().subscribe((response) => {
      console.log(response);
    });
  }

  loading$: Observable<boolean> = of(false);
  pkmnList$: Observable<any> = of([]);
  cont: number;

  constructor(
    private store: Store<any>,
    private router: Router,
    private authService: AuthService
  ) {
    this.cont = 1;
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectPkmnListLoading); //true, false

    this.store.dispatch(loadPkmnList());

    this.pkmnList$ = this.store.select(selectPkmnList);

    this.resetCont();
  }

  increment(): number {
    return this.cont++;
  }

  resetCont(): void {
    this.cont = 1;
  }

  searchPkmnByName(name: string): void {
    this.router.navigate(['/pkmn-details', name]);
  }
}
