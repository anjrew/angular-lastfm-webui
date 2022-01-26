import { MainViewModuleState,  MAIN_VIEW_MODULE_STATE_KEY } from './main-view-module.state';
import { createFeatureSelector } from '@ngrx/store';


export const selectMainViewModule = createFeatureSelector<MainViewModuleState>( MAIN_VIEW_MODULE_STATE_KEY);
