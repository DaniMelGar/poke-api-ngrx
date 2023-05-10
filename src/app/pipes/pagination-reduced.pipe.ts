import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationReduced',
})
export class PaginationReducedPipe implements PipeTransform {
  transform(pages: number[], actualPage: number): number[] {
    var infLimit: number = 0;
    var supLimit: number = pages.length;

    if (actualPage < 6) {
      infLimit = 2;
    } else {
      infLimit = actualPage - 4;
    }

    if (actualPage > pages.length - 4) {
      supLimit = pages.length - 1;
    } else {
      supLimit = actualPage + 4;
    }

    return pages.slice(infLimit - 1, supLimit);
  }
}
