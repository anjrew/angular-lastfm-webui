import { Artist } from './../../data-types/interfaces/top-artists-response.interface';
import { createFormControlState, FormControlState } from 'ngrx-forms';

export const ARTISTS_SEARCH_CONTROL_KEY = 'artistsSearch';

/* GLOBAL REDUCER */
export interface GlobalState {
  isInitialized: boolean;
  artistsControl: FormControlState<string>;
  results: Array<Artist>;
}

export function createInitialGlobalState(): GlobalState {
  return {
    isInitialized: false,
    artistsControl: createFormControlState(ARTISTS_SEARCH_CONTROL_KEY, ''),
    results: []
  };
}
