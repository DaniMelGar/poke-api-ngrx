import { PkmnDetailsComponent } from './components/pkmn-details/pkmn-details.component';
import { PkmnListComponent} from './components/pkmn-list/pkmn-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pkmn-list',
    component: PkmnListComponent
  },
  {
    path: 'pkmn-details/:name',
    component: PkmnDetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
