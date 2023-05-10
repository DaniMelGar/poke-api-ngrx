import { loadPkmnByName } from './../../state/actions/pkmn-list.actions';
import { Observable, Subject, of, takeUntil } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectPkmnLoading,
  selectPkmn,
} from './../../state/selectors/pkmn-list.selectors';
import { ActivatedRoute } from '@angular/router';
import { PkmnModel } from 'src/app/models/pkmn.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pkmn-details',
  templateUrl: './pkmn-details.component.html',
  styleUrls: ['./pkmn-details.component.css'],
})
export class PkmnDetailsComponent {
  loading$: Observable<boolean> = of(false);
  pkmn$: Observable<any> = of();
  name: string = '';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.name = this.route.snapshot.paramMap.get('name') as string;

      this.loading$ = this.store.select(selectPkmnLoading); //true, false

      this.store.dispatch(loadPkmnByName({ name: this.name }));

      this.pkmn$ = this.store.select(selectPkmn);
    });

    this.pkmn$ = this.store.select(selectPkmn);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
