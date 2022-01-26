import { ArtistTopTracksDTO } from './../../../../../../../data-types/interfaces/artist-top-tracks.interface';
import { ArtistInfoDto } from './../../../../../../../data-types/interfaces/artist-info.interface';
import { createAction, props } from '@ngrx/store';
import { ArtistTopAlbumsDTO } from 'src/app/data-types/interfaces/artist-top-albums.interface';

const BASE_ID = '[Details : Details View]';

export const initializePage = createAction(
  getDetailsViewActionId('initializePage')
);

export const reload = createAction(
  getDetailsViewActionId('reload'),
  props<{ data: { path: Array<string> } }>()
);

export const getPageData = createAction(getDetailsViewActionId('getPageData'));

export const receivePageInfoData = createAction(
  getDetailsViewActionId('receivePageData'),
  props<{ data: ArtistInfoDto }>()
);

export const receiveTrackData = createAction(
  getDetailsViewActionId('receiveTrackData'),
  props<{ data: ArtistTopTracksDTO }>()
);

export const receiveAlbumData = createAction(
  getDetailsViewActionId('receiveAlbumData'),
  props<{ data: ArtistTopAlbumsDTO }>()
);

/** Creates a unique ID with the prefix relative to the component */
function getDetailsViewActionId(subId: string): string {
  return `${BASE_ID} ${subId}`;
}
