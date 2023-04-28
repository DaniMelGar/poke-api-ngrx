import { PkmnService } from './../../../services/pkmn.service';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadPkmnEvolutionChain } from './../../../state/actions/pkmn-list.actions';
import { selectPkmnEvolutionChain } from 'src/app/state/selectors/pkmn-list.selectors';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
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

  constructor(
    private store: Store<any>,
    private pkmnService: PkmnService, //private pipe: TransformObservableToArrayPipe
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    // this.dataSource.data = TREE_DATA;

    iconRegistry.addSvgIcon(
      'closed-pokeball',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/closed-pokeball.svg'
      )
    );

    iconRegistry.addSvgIcon(
      'opened-pokeball',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/opened-pokeball.svg'
      )
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadPkmnEvolutionChain({ name: this.name }));
    this.evolutionChain$ = this.store.select(selectPkmnEvolutionChain);

    this.pkmnService
      .getPkmnEvolutionChainByName(this.name)
      .subscribe((data) => {
        this.evolutions$ = of(data);
        this.dataSource.data = data;
      });
  }
}
