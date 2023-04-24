import { PkmnListEffects } from './state/effects/pkmn-list.effects';
import { ROOT_REDUCERS } from './state/app.state';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PkmnListComponent } from './components/pkmn-list/pkmn-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { PkmnDetailsComponent } from './components/pkmn-details/pkmn-details.component';
import { PkmnDetailsTypesComponent } from './components/pkmn-details/pkmn-details-types/pkmn-details-types.component';
import { PkmnDetailsStatsComponent } from './components/pkmn-details/pkmn-details-stats/pkmn-details-stats.component';
import { ImgErrorDirective } from './directives/img-error.directive';
import { ImgIconTypeDirective } from './directives/img-icon-type.directive';
import { ImgIconTypeErrorDirective } from './directives/img-icon-type-error.directive';
import { PaginationPkmnListComponent } from './components/pkmn-list/pagination-pkmn-list/pagination-pkmn-list.component';
import { PagePkmnListDirective } from './directives/page-pkmn-list.directive';
import { PagePkmnListItemActiveDirective } from './directives/page-pkmn-list-item-active.directive';
import { PaginationReducedPipe } from './pipes/pagination-reduced.pipe';
import { PaginationPrevNextDisabledDirective } from './directives/pagination-prev-next-disabled.directive';
import { PkmnCardComponent } from './components/pkmn-list/pkmn-card/pkmn-card.component';
import { NavVarComponent } from './components/nav-var/nav-var.component';
import { PkmnCardClickableDirective } from './directives/pkmn-card-clickable.directive';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProvider } from './services/auth.interceptor';
import { PkmnDetailsEvolutionsComponent } from './components/pkmn-details/pkmn-details-evolutions/pkmn-details-evolutions.component';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AppComponent,
    PkmnListComponent,
    PkmnDetailsComponent,
    PkmnDetailsTypesComponent,
    PkmnDetailsStatsComponent,
    LoginComponent,
    ImgErrorDirective,
    ImgIconTypeDirective,
    ImgIconTypeErrorDirective,
    PaginationPkmnListComponent,
    PagePkmnListDirective,
    PagePkmnListItemActiveDirective,
    PaginationReducedPipe,
    PaginationPrevNextDisabledDirective,
    PkmnCardComponent,
    NavVarComponent,
    PkmnCardClickableDirective,
    PkmnDetailsEvolutionsComponent,
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PkmnListEffects]),
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatTreeModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
