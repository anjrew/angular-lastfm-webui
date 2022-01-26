
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { routerReducer } from '@ngrx/router-store';
import { globalReducer } from './global/global.reducer';



/** The reducers to be passed to the Ngrx Store */
export const appReducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    global: globalReducer
};



