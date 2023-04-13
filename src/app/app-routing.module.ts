import { PkmnDetailsComponent } from './components/pkmn-details/pkmn-details.component';
import { PkmnListComponent } from './components/pkmn-list/pkmn-list.component';
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

const routes: Routes = [
  {
    path: 'pkmn-list',
    component: PkmnListComponent,
    canActivate: [() => inject(IsAuthenticatedGuard).canActivate()],
  },
  {
    path: 'pkmn-details/:name',
    component: PkmnDetailsComponent,
    canActivate: [() => inject(IsAuthenticatedGuard).canActivate()],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
