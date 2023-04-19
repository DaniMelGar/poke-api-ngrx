import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFavClick]',
})
export class FavClickDirective {
  @Input() id: string = '';

  constructor(private router: Router) {}

  @HostListener('click')
  onClick(): void {
    localStorage.setItem('ids', this.id);
    console.log(this.id);
  }
}
