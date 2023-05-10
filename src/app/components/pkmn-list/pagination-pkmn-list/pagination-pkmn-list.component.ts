import { environment } from './../../../../environments/environment';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pagination-pkmn-list',
  templateUrl: './pagination-pkmn-list.component.html',
  styleUrls: ['./pagination-pkmn-list.component.css'],
})
export class PaginationPkmnListComponent {
  offset: any;
  private unsubscribe$ = new Subject<void>();
  pages: number[] = [];
  actualPage: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        this.offset = params['offset'];
      });

    this.pages = this.calcPagination(environment.totalNumberOfPkmn); //HARDCODE
    this.actualPage = this.calcActualPage(this.offset);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  private calcPagination(totalNumberPkmn: number): number[] {
    var aux: number[] = [];
    var i: number;
    for (i = 0; i < totalNumberPkmn; i += environment.pkmnPageLimit) {
      aux[aux.length] = aux.length + 1;
    }

    return aux;
  }

  private calcActualPage(offset: string): number {
    return (environment.pkmnPageLimit + +offset) / environment.pkmnPageLimit;
  }
}
