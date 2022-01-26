import { Action, createReducer, on } from '@ngrx/store';
import { DetailsViewState, createInitialDetailsViewState } from './details-view.state';
import * as Actions from './details-view.actions';
import { appError } from 'src/app/store/global/global.actions';
import { onNgrxForms } from 'ngrx-forms';


/* The main reducer for the DetailsView*/
const reducer = createReducer(
  createInitialDetailsViewState(),

  on(Actions.initializePage, (state) => {
    return { ...state, isLoading: true };
  }),

  on(Actions.getPageData, (state) => {
    return { ...state, isLoading: true };
  }),

  on(Actions.reload, (state) => {
    return { ...state, isLoading: true };
  }),

  on(Actions.receivePageInfoData, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isInitialized: true,
      artistInfo: action.data.artist,
    };
  }),

  on(Actions.receiveTrackData, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isInitialized: true,
      tracks: action.data.toptracks.track,
    };
  }),

  on(Actions.receiveAlbumData, (state, action) => {
    return {
      ...state,
      isLoading: false,
      isInitialized: true,
      albums: action.data.topalbums.album,
    };
  }),

  on(appError, (state) => ({ ...state, isLoading: false })),

  onNgrxForms()
);


export function detailsViewReducer(
    state: DetailsViewState = createInitialDetailsViewState(),
    action: Action
): DetailsViewState {
    return reducer(state, action);
}
