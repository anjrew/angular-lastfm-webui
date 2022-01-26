import { Injectable } from '@angular/core';

/* NGRX */
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import * as Selectors from './details-view.selectors';
import * as Actions from './details-view.actions';


@Injectable()
export class DetailsViewFacade {
  /* STATES */
  public isLoading$ = this.store$.select(Selectors.selectIsLoading);

  public artistInfo$ = this.store$.select(Selectors.selectArtistInfo);
  public tracks$ = this.store$.select(Selectors.selectTracks);
  public albums$ = this.store$.select(Selectors.selectAlbums);

  constructor(private store$: Store<AppState>) {}

  /* ACTIONS */
  initialize = () => this.store$.dispatch(Actions.initializePage());
}
