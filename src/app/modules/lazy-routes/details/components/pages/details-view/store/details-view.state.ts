import { ArtistInfo } from './../../../../../../../data-types/interfaces/artist-info.interface';
import { StandardPageState } from 'src/app/data-types/interfaces/standard-page-state.interface';
import { Track } from 'src/app/data-types/interfaces/artist-top-tracks.interface';
import { Album } from 'src/app/data-types/interfaces/artist-top-albums.interface';

/* STATE */
export interface DetailsViewState extends StandardPageState {
  artistInfo?: ArtistInfo,
  tracks?: Track[],
  albums?: Album[]
}

/* INITIAL STATE */
export function createInitialDetailsViewState(): DetailsViewState {
  return {
    isInitialized: false,
    isLoading: false,
  };
}
