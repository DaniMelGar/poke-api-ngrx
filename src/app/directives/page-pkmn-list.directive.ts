import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPagePkmnList]'
})
export class PagePkmnListDirective {

  @Input() offset: number = 0
  @Input() action: any

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  onClick(): void{
    const element = this.elementRef.nativeElement
    if(this.action === 'next') element.href = `/pkmn-list?offset=${this.offset+21}`
  }

}
