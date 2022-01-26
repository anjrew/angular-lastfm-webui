import { GlobalState } from './global.state';
import { getSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors();


export const selectGlobal = (state: AppState) => state.global;

export const selectArtistsSearchControl = createSelector(
  selectGlobal,
  (state: GlobalState) => state.artistsControl
);

export const selectResults = createSelector(
  selectGlobal,
  (state: GlobalState) => state.results
);
