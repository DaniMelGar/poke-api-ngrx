import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pkmn-card',
  templateUrl: './pkmn-card.component.html',
  styleUrls: ['./pkmn-card.component.css'],
})
export class PkmnCardComponent {
  @Input() pkmn: any;

  constructor() {}

  containsFav(id: Number): boolean {
    var storedArray = JSON.parse(sessionStorage.getItem('fav')!);
    var contains = false;
    for (let i = 0; i < storedArray.length; i++) {
      if (storedArray[i] == id) {
        contains = true;
      }
    }
    return contains;
  }
}
