import { RouterReducerState } from '@ngrx/router-store';
import { GlobalState } from './global/global.state';


/* The model of the app state of the entire application */
export interface AppState {
  router: RouterReducerState;
  global: GlobalState;
}


