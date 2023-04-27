import { PkmnService } from './../../../services/pkmn.service';
import { Component, Input, inject, Pipe } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, tap, toArray } from 'rxjs';
import { loadPkmnEvolutionChain } from './../../../state/actions/pkmn-list.actions';
import { selectPkmnEvolutionChain } from 'src/app/state/selectors/pkmn-list.selectors';
import { TransformObservableToArrayPipe } from './../../../pipes/transform-observable-to-array.pipe';
import { convertObservableToEvolutionChain } from 'src/utils';

////  FLAT NODES
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
//// NESTED NODES
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PkmnEvolutionChainModel } from 'src/app/models/pkmn.interface';

interface TreeNode {
  name: string;
  evolves_to?: TreeNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'Fruit',
    evolves_to: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Fruit loops' },
    ],
  },
  {
    name: 'Vegetables',
    evolves_to: [
      {
        name: 'Green',
        evolves_to: [{ name: 'Broccoli' }, { name: 'Brussel sprouts' }],
      },
      {
        name: 'Orange',
        evolves_to: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-pkmn-details-evolutions',
  templateUrl: './pkmn-details-evolutions.component.html',
  styleUrls: ['./pkmn-details-evolutions.component.css'],
})
export class PkmnDetailsEvolutionsComponent {
  @Input() name: string = '';
  evolutionChain$: Observable<PkmnEvolutionChainModel> = of();
  evolutions$: Observable<PkmnEvolutionChainModel[]> = of();

  ///////FLAT NODES

  private transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.evolves_to && node.evolves_to.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  // treeControl = new NestedTreeControl<FlatNode>(node => node.level, { initialData: [] });

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.evolves_to
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  /////////NESTED NODES

  // treeControl = new NestedTreeControl<PkmnEvolutionChainModel>(
  //   (node) => node.evolves_to
  // );
  // dataSource = new MatTreeNestedDataSource<any>();

  // hasChild = (_: number, node: EvolutionNode) =>
  //   !!node.evolves_to && node.evolves_to.length > 0;

  constructor(
    private store: Store<any>,
    private pkmnService: PkmnService //private pipe: TransformObservableToArrayPipe
  ) {
    this.dataSource.data = TREE_DATA;
    this.store.dispatch(loadPkmnEvolutionChain({ name: this.name }));
    this.store
      .select(selectPkmnEvolutionChain)
      .pipe(tap((e) => console.log(e)))
      .subscribe();
  }

  ngOnInit(): void {
    this.evolutionChain$ = this.store.select(selectPkmnEvolutionChain);

    this.pkmnService
      .getPkmnEvolutionChainByName(this.name)
      .subscribe((data) => {
        this.evolutions$ = of(data);
        this.dataSource.data = data;
      });
  }
}
