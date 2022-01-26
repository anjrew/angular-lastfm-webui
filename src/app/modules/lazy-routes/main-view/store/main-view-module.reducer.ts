/* NGRX */
import { ActionReducerMap } from '@ngrx/store';
import { mainViewListReducer } from '../components/pages/main-view-list/store/main-view-list.reducer';
import { MainViewModuleState } from './main-view-module.state';


export const mainViewModuleReducerMap: ActionReducerMap<MainViewModuleState> = {
  view: mainViewListReducer
};
