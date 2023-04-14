import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { environment } from './../../environments/environment';

@Directive({
  selector: '[appPagePkmnListItemActive]'
})
export class PagePkmnListItemActiveDirective {

  @Input() offset: number = 0
  @Input() page: number = 0

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void{
    const element = this.elementRef.nativeElement
    if((this.page * environment.pkmnPageLimit) - environment.pkmnPageLimit === +this.offset){
      this.renderer.addClass(element, 'active');
    }

  }

}
