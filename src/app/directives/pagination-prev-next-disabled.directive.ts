import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPaginationPrevNextDisabled]'
})
export class PaginationPrevNextDisabledDirective {

  @Input() actualPage: number = 0
  @Input() lastPage: number = 0
  @Input() action: string = ''


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void{
    const element = this.elementRef.nativeElement
    if (this.action === 'previous' && this.actualPage === 1) {
      this.renderer.addClass(element, 'disabled');

    } else if (this.action === 'next' && this.actualPage === this.lastPage) {
      this.renderer.addClass(element, 'disabled');
    }

  }

}
