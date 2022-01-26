/* App */
import { NgModule } from '@angular/core';

/* Store */
import { StoreModule } from '@ngrx/store';

/* Reducer */
import { appReducers } from './app.reducer-map';

/* Dev tools */
import { buildSpecificModules } from '../build-specifics/index';

/* Effects */
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './app.effects-map';

/* Router */
import { NavigationActionTiming, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';


@NgModule({
    imports: [

        /* NgRx below */
        EffectsModule.forRoot(appEffects),

        /* ROUTER CONFIG */
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal,
            navigationActionTiming: NavigationActionTiming.PostActivation
        }),

        StoreModule.forRoot(appReducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true,
            },
        }),

        // Instrumentation must be imported after importing StoreModule
        ...buildSpecificModules,

    ]
})
export class AppNgrxStoreModule { }
