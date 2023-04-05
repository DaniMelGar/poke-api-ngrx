import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgIconTypeError]'
})
export class ImgIconTypeErrorDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  loadDefaultImg(): void{
    const element = this.elementRef.nativeElement
    element.src = 'https://th.bing.com/th/id/OIP.idyRVNqDRMeV0_DqIHO2PQAAAA?pid=ImgDet&rs=1'
  }

}
