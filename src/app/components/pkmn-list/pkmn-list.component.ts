import { environment } from './../../../environments/environment';
import { loadPkmnList } from './../../state/actions/pkmn-list.actions';
import {
  selectPkmnListLoading,
  selectPkmnList,
} from './../../state/selectors/pkmn-list.selectors';
import { Observable, Subject, of, takeUntil, take, map } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  offset: any;
  private unsubscribe$ = new Subject<void>();
  totalNumberOfPkmn: number = 0;
  filteredPkmnList$: Observable<any> | undefined;
  searchTerm: string = '';

  constructor(
    private store: Store<any>,
    private aroute: ActivatedRoute,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectPkmnListLoading); //true, false

    if (this.loading$) {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    }

    this.aroute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const offset = params['offset'];
        this.store.dispatch(loadPkmnList({ offset: offset }));
      });

    this.store
      .select(selectPkmnList)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((pkmnList) => {
        this.pkmnList$ = of(pkmnList);
      });

    this.filteredPkmnList$ = this.pkmnList$.pipe(
      map((pkmnList: any[]) =>
        pkmnList.filter((pkmn: any) =>
          pkmn.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      )
    );

    this.totalNumberOfPkmn = environment.totalNumberOfPkmn;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
