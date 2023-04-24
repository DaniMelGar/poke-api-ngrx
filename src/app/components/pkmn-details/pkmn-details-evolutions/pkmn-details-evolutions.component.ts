import { PkmnService } from './../../../services/pkmn.service';
import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, tap } from 'rxjs';
import {loadPkmnEvolutionChain} from './../../../state/actions/pkmn-list.actions';
import { selectPkmnEvolutionChain } from 'src/app/state/selectors/pkmn-list.selectors';
////  FLAT NODES
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
//// NESTED NODES
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { PkmnEvolutionChainModel } from 'src/app/models/pkmn.interface';

interface EvolutionNode {
  name: string;
  evolves_to?: EvolutionNode[];
}

interface EvolutionFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-pkmn-details-evolutions',
  templateUrl: './pkmn-details-evolutions.component.html',
  styleUrls: ['./pkmn-details-evolutions.component.css']
})
export class PkmnDetailsEvolutionsComponent {

  @Input() name: string = ""
  // specie$: Observable<SpecieModel> = of()
  evolutionChain$: Observable<PkmnEvolutionChainModel> = of()
  evolutions: PkmnEvolutionChainModel[] = []

  ///////FLAT NODES

  // private transformer = (node: EvolutionNode, level: number) => {
  //   return {
  //     expandable: !!node.evolves_to && node.evolves_to.length > 0,
  //     name: node.name,
  //     level: level,
  //   };
  // }

  // treeControl = new FlatTreeControl<EvolutionFlatNode>(
  //   node => node.level, node => node.expandable);

  // treeFlattener = new MatTreeFlattener(
  //     this.transformer, node => node.level, node => node.expandable, node => node.evolves_to);

  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  // hasChild = (_: number, node: EvolutionFlatNode) => node.expandable;

  /////////NESTED NODES

  treeControl = new NestedTreeControl<PkmnEvolutionChainModel>(node => node.evolves_to);
  dataSource = new MatTreeNestedDataSource<PkmnEvolutionChainModel>();

  hasChild = (_: number, node: EvolutionNode) => !!node.evolves_to && node.evolves_to.length > 0;

  constructor(private store: Store<any>, private pkmnService: PkmnService){

  }

  ngOnInit(): void {
    // this.store.dispatch(loadPkmnSpecie({url: this.species.url}))
    // this.specie$ = this.store.select(selectPkmnSpecie)
    //console.log(this.specie$.pipe(tap(evolution_chain)))

    this.store.dispatch(loadPkmnEvolutionChain({name: this.name}))
    this.evolutionChain$ = this.store.select(selectPkmnEvolutionChain)
    this.evolutionChain$.pipe(tap( (res) => {
      console.log(res)
      return this.dataSource.data = Array.of(res)
    }))
    // this.pkmnService.getPkmnEvolutionChainByName(this.name).subscribe(res => console.log(res))
    console.log(this.evolutionChain$)

    // this.pkmnService.getPkmnEvolutionChainByName(this.name).subscribe(
    //   evolutions => this.evolutions = evolutions
    // )

    // console.log('evolutions: '+this.evolutions)

    //this.dataSource.data = this.evolutionChain$
    // this.evolutionChain = this.evolutions$ as PkmnEvolutionChainModel[]
    // this.evolutions = Array.of(this.evolutionChain$)
    //this.dataSource.data = Array.of(this.evolutionChain$)



  }



}
