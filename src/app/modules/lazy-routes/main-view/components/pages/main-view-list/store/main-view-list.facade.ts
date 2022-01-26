import { Injectable } from '@angular/core';

/* NGRX */
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import * as Selectors from './main-view-list.selectors';
import * as Actions from './main-view-list.actions';


@Injectable()
export class MainViewListFacade {
  /* STATES */
  public isLoading$ = this.store$.select(Selectors.selectIsLoading);

  public countryFormControl$ = this.store$.select(
    Selectors.selectCountryFormControl
  );

  public topArtists$ = this.store$.select(Selectors.selectTopArtists);

  constructor(private store$: Store<AppState>) {}

  /* ACTIONS */
  initialize = () => this.store$.dispatch(Actions.initializePage());
}
