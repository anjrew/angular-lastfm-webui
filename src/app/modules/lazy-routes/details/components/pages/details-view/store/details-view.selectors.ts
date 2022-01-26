import { createSelector } from '@ngrx/store';
import { selectDetailsModule } from '../../../../store/details-module.selectors';
import { DetailsModuleState } from '../../../../store/details-module.state';

import { DetailsViewState } from './details-view.state';

export const selectDetailsView = createSelector(
  selectDetailsModule,
  (state: DetailsModuleState) => state.detailsView,
);

export const selectIsLoading = createSelector(
  selectDetailsView,
  (state: DetailsViewState) => state.isLoading,
);

export const selectArtistInfo= createSelector(
  selectDetailsView,
  (state: DetailsViewState) => state.artistInfo,
);

export const selectTracks = createSelector(
  selectDetailsView,
  (state: DetailsViewState) => state.tracks
);

export const selectAlbums = createSelector(
  selectDetailsView,
  (state: DetailsViewState) => state.albums
);
