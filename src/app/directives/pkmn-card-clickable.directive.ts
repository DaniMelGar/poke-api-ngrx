import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appPkmnCardClickable]'
})
export class PkmnCardClickableDirective {

  @Input() name: string = ''

  constructor(private router: Router) { }

  @HostListener('click')
  onClick(): void{
    this.router.navigate(['/pkmn-details', this.name]);
  }

}
