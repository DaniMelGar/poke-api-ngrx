import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pkmn-details-types',
  templateUrl: './pkmn-details-types.component.html',
  styleUrls: ['./pkmn-details-types.component.css']
})
export class PkmnDetailsTypesComponent {
  @Input() types: any;
}
