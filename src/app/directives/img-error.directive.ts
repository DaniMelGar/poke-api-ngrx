import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgError]'
})
export class ImgErrorDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  loadDefaultImg(): void{
    const element = this.elementRef.nativeElement
    element.src = 'https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-File.png'
  }

}
