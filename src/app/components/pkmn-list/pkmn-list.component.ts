import { environment } from './../../../environments/environment';
import { loadPkmnList } from './../../state/actions/pkmn-list.actions';
import {
  selectPkmnListLoading,
  selectPkmnList,
} from './../../state/selectors/pkmn-list.selectors';
import { Observable, Subject, of, takeUntil, take } from 'rxjs';
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
      }, 1000);
    }

    this.aroute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const offset = params['offset'];
        this.store.dispatch(loadPkmnList({ offset: offset }));
        this.pkmnList$ = this.store.select(selectPkmnList);
        //Es tan rapido que no se llega a ver practicamente el spinner
        //this.spinner.hide();
      });

    this.totalNumberOfPkmn = environment.totalNumberOfPkmn;
  }
}
