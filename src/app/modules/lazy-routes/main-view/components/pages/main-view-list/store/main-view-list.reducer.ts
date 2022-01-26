import { Action, createReducer, on } from '@ngrx/store';
import { MainViewListState, createInitialMainViewListState } from './main-view-list.state';
import * as Actions from './main-view-list.actions';
import { appError } from 'src/app/store/global/global.actions';
import { onNgrxForms } from 'ngrx-forms';


/* The main reducer for the MainViewList*/
const reducer = createReducer(createInitialMainViewListState(),

    on(Actions.initializePage, (state) => {
        return { ...state, isLoading: true };
    }),

    on(Actions.getPageData, (state) => {
        return { ...state, isLoading: true };
    }),

    on(Actions.receivePageData, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isInitialized: true,
            topArtists: action.data.topartists
        };
    }),

    on(appError, (state) => ({ ...state, isLoading: false })),

    onNgrxForms()

);


export function mainViewListReducer(
    state: MainViewListState = createInitialMainViewListState(),
    action: Action
): MainViewListState {
    return reducer(state, action);
}
