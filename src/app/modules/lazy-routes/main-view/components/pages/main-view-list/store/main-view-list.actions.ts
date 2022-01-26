import { TopArtistsResponseDTO } from './../../../../../../../data-types/interfaces/top-artists-response.interface';
import { createAction, props } from '@ngrx/store';

const BASE_ID = '[Main View : Main View List]';

export const initializePage = createAction(
    getMainViewListActionId('initializePage'),
);


export const getPageData = createAction(
    getMainViewListActionId('getPageData'),
);


export const receivePageData = createAction(
    getMainViewListActionId('receivePageData'),
    props<{ data: TopArtistsResponseDTO }>()
);


/** Creates a unique ID with the prefix relative to the component */
function getMainViewListActionId(subId: string): string {
    return `${BASE_ID} ${subId}`;
}
