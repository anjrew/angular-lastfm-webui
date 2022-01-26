import { SharedModule } from './../../shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsViewComponent } from './components/pages/details-view/details-view.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { detailsModuleReducerMap } from './store/details-module.reducer';
import { DETAILS_MODULE_STATE_KEY } from './store/details-module.state';
import { detailsModuleEffects } from './store/details-module.effects';
import { DetailsDataService } from './services/details-data.service';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  declarations: [DetailsComponent, DetailsViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    DetailsRoutingModule,

    SharedModule,

    /* NGRX */
    StoreModule.forFeature(DETAILS_MODULE_STATE_KEY, detailsModuleReducerMap),
    EffectsModule.forFeature(detailsModuleEffects),
  ],
  providers: [
    DetailsDataService,

  ],
})
export class DetailsViewModule {}
