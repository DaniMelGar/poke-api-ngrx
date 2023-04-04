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

@NgModule({
  declarations: [
    AppComponent,
    PkmnListComponent,
    PkmnDetailsComponent,
    PkmnDetailsTypesComponent,
    PkmnDetailsStatsComponent,
    ImgErrorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([PkmnListEffects]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
