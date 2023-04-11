import { PkmnDetailsComponent } from './components/pkmn-details/pkmn-details.component';
import { PkmnListComponent} from './components/pkmn-list/pkmn-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'pkmn-list',
    component: PkmnListComponent
  },
  {
    path: 'pkmn-details/:name',
    component: PkmnDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
