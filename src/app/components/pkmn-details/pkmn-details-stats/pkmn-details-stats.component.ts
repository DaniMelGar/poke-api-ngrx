import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StatListModel, StatModel } from 'src/app/models/pkmn.interface';


@Component({
  selector: 'app-pkmn-details-stats',
  templateUrl: './pkmn-details-stats.component.html',
  styleUrls: ['./pkmn-details-stats.component.css']
})
export class PkmnDetailsStatsComponent {
  @Input() stats: StatListModel[] = [];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  dataSource = new MatTableDataSource<StatListModel>();
  displayedColumns = ['name', 'base_stat'];

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(){
    this.dataSource = new MatTableDataSource<StatListModel>(this.stats);
    //this.dataSource.paginator = this.paginator;
  }

   ngAfterViewInit() {
     this.dataSource.sort = this.sort;
   }

}

