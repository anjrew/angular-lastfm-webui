import { AppState } from '@app/store/app.state';

/* NGRX */
import { RouterReducerState } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';


export const selectRouter = (state: AppState) => state.router;


export const {
    selectCurrentRoute,   // select the current route
    selectQueryParams,    // select the current route query params
    selectQueryParam,     // factory function to select a query param
    selectRouteParams,    // select the current route params
    selectRouteParam,     // factory function to select a route param
    selectRouteData,      // select the current route data
    selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);


export const selectEntireUrl = createSelector(
    selectRouter,
    (router: RouterReducerState) => router?.state?.url
);


