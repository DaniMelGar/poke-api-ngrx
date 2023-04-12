import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Directive({
  selector: '[appPagePkmnList]'
})
export class PagePkmnListDirective {

  @Input() offset: number = 0
  @Input() action: any

  constructor(private elementRef: ElementRef, private router: Router) { }

  @HostListener('click')
  onClick(): void{
    const element = this.elementRef.nativeElement
    if (this.action === 'next') {
      element.href = `/pkmn-list?offset=${+this.offset + environment.pkmnPageLimit}`;
      // const offset = element.href
      // this.router.navigate(['/pkmn-list'], { queryParams: { offset } });

    } else if (this.action === 'previous') {
      element.href = `/pkmn-list?offset=${+this.offset - environment.pkmnPageLimit}`;
    } else if (this.action === 'number') {
      element.href = `/pkmn-list?offset=${(this.offset*environment.pkmnPageLimit) - environment.pkmnPageLimit}`;
    }else if (this.action === 'first') {
      element.href = `/pkmn-list?offset=0`;
    }else if (this.action === 'last') {
      element.href = `/pkmn-list?offset=${environment.totalNumberOfPkmn - environment.pkmnPageLimit + 1}`;
    }
  }
}
