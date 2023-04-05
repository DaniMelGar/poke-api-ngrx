import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pkmn-details-types',
  templateUrl: './pkmn-details-types.component.html',
  styleUrls: ['./pkmn-details-types.component.css']
})
export class PkmnDetailsTypesComponent {
  @Input() types: any;
}

//<img *ngIf="type.type.name | titlecase as type"  style="padding-left: 20px;" src='{{ "https://archives.bulbagarden.net/media/upload/d/d5/" + type + "IC_Colo.png" }}'/>
