import { onNgrxForms } from 'ngrx-forms';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { createInitialGlobalState, GlobalState } from './global.state';
import * as Actions from './global.actions';

/** The reducer for this returns the state */
export function globalReducer(
  state = createInitialGlobalState(),
  action: Action
): GlobalState {
  return globalReducerCreator(state, action);
}

/** A reducer creator */
const globalReducerCreator: ActionReducer<GlobalState, Action> = createReducer(
  createInitialGlobalState(),

  on(Actions.receiveArtistSearchResults, (state, action) => {
    return {
      ...state,
      isLoading: false,
      results: action?.response?.results?.artistmatches?.artist ?? [],
    };
  }),

  onNgrxForms()
);
