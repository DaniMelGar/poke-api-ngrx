import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavClick]',
})
export class FavClickDirective {
  @Input() id: Number = 0;

  constructor() {}

  @HostListener('click')
  onClick(): void {
    var storedArray = JSON.parse(sessionStorage.getItem('fav')!);
    var deleted = false;
    for (let i = 0; i < storedArray.length; i++) {
      if (storedArray[i] == this.id) {
        storedArray.splice(i, 1);
        deleted = true;
      }
    }
    if (!deleted) {
      storedArray.push(this.id);
    }
    sessionStorage.setItem('fav', JSON.stringify(storedArray));
  }
}
