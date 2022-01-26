import { TopArtists } from './../../../../../../../data-types/interfaces/top-artists-response.interface';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { StandardPageState } from 'src/app/data-types/interfaces/standard-page-state.interface';

/* STATE */
export interface MainViewListState extends StandardPageState {
  form: FormGroupState<{ country: string }>;
  topArtists?: TopArtists;
}

export const MAIN_VIEW_FORM_KEY = `MAIN_VIEW_FORM_KEY`;

/* INITIAL STATE */
export function createInitialMainViewListState(): MainViewListState {
  return {
    form: createFormGroupState<{ country: string }>(MAIN_VIEW_FORM_KEY, {
      country: 'spain',
    }),
    isInitialized: false,
    isLoading: false,
    topArtists: undefined
  };
}
