import { Injectable } from '@angular/core';
import { ActivationEnd, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as RouterActions from './router.actions';
import { Location } from '@angular/common';
import { AppState } from '../app.state';



@Injectable()
export class AppRouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location,
        private store: Store<AppState>
    ) {
        this.listenToRouterLoading();
        this.listenToRouterNavigation();
    }


    // TODO: WORK IN PROGRESS WITH RELATIVE ROUTES
    navigate$ =
        createEffect(() =>
            this.actions$.pipe(
                ofType(RouterActions.routerGo),
                map((action) => action),
                tap(({ path, queryParams }) => this.router.navigate(path, { queryParams })),
            ),
            { dispatch: false }
        );


    navigateBack$ =
        createEffect(() =>
            this.actions$.pipe(
                ofType(RouterActions.routerGoBack),
                tap(() => this.location.back()),
            ),
            { dispatch: false }
        );



    // Listens to router events and dispatches actions to the store
    private listenToRouterLoading(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationStart
                || event instanceof NavigationEnd
                || event instanceof NavigationCancel
                || event instanceof NavigationError)
        ).subscribe(event => {
            const startingNavigation = event instanceof NavigationStart;
            this.store.dispatch(RouterActions.routeChange({
                routeIsLoading: startingNavigation
            }));
        });
    }

    private listenToRouterNavigation(): void {
        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd)
        ).subscribe((event) => {
            if (event instanceof ActivationEnd) {
                const params = event && event.snapshot && event.snapshot.params;
                const path = event && event.snapshot && event.snapshot && event.snapshot.routeConfig && event.snapshot.routeConfig.path;
                this.store.dispatch(RouterActions.routeNavigation({
                    params,
                    path,
                }));
            }
        });
    }
}
