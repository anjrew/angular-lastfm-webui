import { ArtistSearchDTO } from './../../data-types/interfaces/artist-search.interface';
import { createAction, props } from '@ngrx/store';

const BASE_ID = '[Global App Actions]';

export const initializeApp = createAction(geGlobalActionsId('initializeApp'));

export const appInitialized = createAction(geGlobalActionsId('appInitialized'));

export const authenticateApp = createAction(
  geGlobalActionsId('authenticateApp')
);

export const appAuthenticated = createAction(
  geGlobalActionsId('appAuthenticated')
);

export const authTokenDialogDismissed = createAction(
  geGlobalActionsId('authTokenDialogDismissed')
);

export const appAuthentificationFail = createAction(
  geGlobalActionsId('appAuthentificationFail')
);

export const removeSplashScreen = createAction(
  geGlobalActionsId('removeSplashScreen')
);

export const getArtistSearchResults = createAction(
  geGlobalActionsId('getArtistSearchResults')
);

export const receiveArtistSearchResults = createAction(
  geGlobalActionsId('receiveArtistSearchResults'),
  props<{ response: ArtistSearchDTO }>()
);

export const appError = createAction(
  geGlobalActionsId('appError'),
  props<{ message: string }>()
);

export const appErrorDismissed = createAction(
  geGlobalActionsId('appErrorDismissed')
);

/** Creates a unique ID with the prefix relative to the component */
function geGlobalActionsId(subId: string): string {
  return `${BASE_ID} ${subId}`;
}
