import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pkmn-details-stats',
  templateUrl: './pkmn-details-stats.component.html',
  styleUrls: ['./pkmn-details-stats.component.css']
})
export class PkmnDetailsStatsComponent {
  @Input() stats: any;
}
