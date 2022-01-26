import { MainViewDataService } from './services/main-view-data.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { MainViewRoutingModule } from './main-view-routing.module';
import { SharedModule } from '../../shared/shared/shared.module';
import { MainViewListComponent } from './components/pages/main-view-list/main-view-list.component';
import { MAIN_VIEW_MODULE_STATE_KEY } from './store/main-view-module.state';
import { mainViewModuleReducerMap } from './store/main-view-module.reducer';
import { mainViewModuleEffects } from './store/main-view-module.effects';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [MainViewComponent, MainViewListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainViewRoutingModule,
    SharedModule,

    /* NGRX */
    StoreModule.forFeature(
      MAIN_VIEW_MODULE_STATE_KEY,
      mainViewModuleReducerMap
    ),
    EffectsModule.forFeature(mainViewModuleEffects),
  ],
  providers: [MainViewDataService]
})
export class MainViewModule {}
