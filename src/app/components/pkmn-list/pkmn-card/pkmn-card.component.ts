import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pkmn-card',
  templateUrl: './pkmn-card.component.html',
  styleUrls: ['./pkmn-card.component.css']
})
export class PkmnCardComponent {

  @Input() pkmn: any

  constructor(private router: Router){}


  searchPkmnByName(name: string): void{
    this.router.navigate(['/pkmn-details', name]);
  }
}
