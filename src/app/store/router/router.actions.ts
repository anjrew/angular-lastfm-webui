import { ActivatedRoute } from '@angular/router';
import { createAction, props } from '@ngrx/store';

const BASE_ID = '[Router]';

export const routeChange =
    createAction(
        getRouterActionId('Route Change'),
        props<{ routeIsLoading: boolean }>()
    );


export const routeNavigation =
    createAction(
        getRouterActionId('Route navigation'),
        props<{ params: object, path?: string | null }>()
    );


export const routerGo =
    createAction(
        getRouterActionId('go'),
        props<{
            path: string[];
            queryParams?: object;
            relativeTo?: ActivatedRoute
            // extras?: NavigationExtras;
        }>()
    );


export const routerGoBack =
    createAction(
        getRouterActionId('Go back')
    );


export const routerGoForward =
    createAction(
        getRouterActionId('Go forward')
    );



/** Creates a unique ID with the prefix relative to the component */
export function getRouterActionId(subId: string): string {
    return `${BASE_ID} ${subId}`;
}

