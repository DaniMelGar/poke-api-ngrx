import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pkmn-card',
  templateUrl: './pkmn-card.component.html',
  styleUrls: ['./pkmn-card.component.css']
})
export class PkmnCardComponent {

  @Input() pkmn: any

  constructor(){}
}
