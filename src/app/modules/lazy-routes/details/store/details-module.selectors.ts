import { DetailsModuleState,  DETAILS_MODULE_STATE_KEY } from './details-module.state';
import { createFeatureSelector } from '@ngrx/store';


export const selectDetailsModule = createFeatureSelector<DetailsModuleState>( DETAILS_MODULE_STATE_KEY);
