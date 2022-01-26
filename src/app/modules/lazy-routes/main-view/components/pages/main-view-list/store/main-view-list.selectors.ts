import { createSelector } from '@ngrx/store';
import { selectMainViewModule } from '../../../../store/main-view-module.selectors';
import { MainViewModuleState } from '../../../../store/main-view-module.state';
import { MainViewListState } from './main-view-list.state';

export const selectMainViewList = createSelector(
  selectMainViewModule,
  (state: MainViewModuleState) => state.view,
);

export const selectIsLoading = createSelector(
  selectMainViewList,
  (state: MainViewListState) => state.isLoading,
);

export const selectTopArtists = createSelector(
  selectMainViewList,
  (state: MainViewListState) => state.topArtists,
);

export const selectForm = createSelector(
  selectMainViewList,
  (state: MainViewListState) => state.form,
);

export const selectCountryFormControl = createSelector(
  selectForm,
  (form) => form.controls.country
);
