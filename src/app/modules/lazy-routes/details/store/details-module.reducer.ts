/* NGRX */
import { ActionReducerMap } from '@ngrx/store';
import { detailsViewReducer } from '../components/pages/details-view/store/details-view.reducer';
import { DetailsModuleState } from './details-module.state';


export const detailsModuleReducerMap: ActionReducerMap<DetailsModuleState> = {
  detailsView: detailsViewReducer
};
