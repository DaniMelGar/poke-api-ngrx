import { loadPkmnByName } from './../../state/actions/pkmn-list.actions';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPkmnLoading, selectPkmn } from './../../state/selectors/pkmn-list.selectors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pkmn-details',
  templateUrl: './pkmn-details.component.html',
  styleUrls: ['./pkmn-details.component.css']
})
export class PkmnDetailsComponent {

  loading$: Observable<boolean> = new Observable()
  pkmn$: Observable<any> = new Observable()
  name: string = ""

  constructor(private store: Store<any>, private route: ActivatedRoute){}

  ngOnInit(): void {

    const name = this.route.snapshot.paramMap.get('name');

    this.loading$ = this.store.select(selectPkmnLoading) //true, false

    this.store.dispatch(loadPkmnByName({ name: this.name }))

    this.pkmn$ = this.store.select(selectPkmn)

  }

}
