/* APP */
import { CoreDataService } from './../../modules/core/services/core-data.service';
import { ModalService } from './../../modules/core/services/modal.service';
import { AuthService } from 'src/app/modules/core/services/auth.service';

/* ANGULAR */
import { Injectable } from '@angular/core';

/* NGRX */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GlobalActions from './global.actions';
import * as GlobalSelectors from 'src/app/store/global/global.selectors';
import { ARTISTS_SEARCH_CONTROL_KEY } from './global.state';
import { AppState } from 'src/app/store/app.state';
import { SetValueAction } from 'ngrx-forms';

/* RXJS */
import { map, switchMap } from 'rxjs/operators';
import { debounceTime, filter, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Injectable()
export class GlobalEffects {
  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private store$: Store<AppState>,
    private dataService: CoreDataService,
    private modalService: ModalService
  ) {}

  authenticateApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GlobalActions.authenticateApp),
      switchMap(() => this.auth.initialize()),
      switchMap((success) =>
        success
          ? [GlobalActions.appAuthenticated()]
          : [
              GlobalActions.appAuthentificationFail(),
              GlobalActions.appError({
                message:
                  'Getting web session failed. Check the secrets file is presents and the details are correct.',
              }),
            ]
      )
    )
  );

  showWebToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GlobalActions.appAuthenticated),
      switchMap(() =>
        this.modalService.openAuthTokenDialog(this.auth.bearerToken)
      ),
      map(() => GlobalActions.authTokenDialogDismissed())
    )
  );

  showAppError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GlobalActions.appError),
      switchMap((action) => this.modalService.showErrorToast(action.message)),
      map(() => GlobalActions.appErrorDismissed())
    )
  );

  getArtistSearchResults$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GlobalActions.getArtistSearchResults),
      withLatestFrom(
        this.store$.select(GlobalSelectors.selectArtistsSearchControl)
      ),
      switchMap(([, searchControl]) =>
        this.dataService.getArtistMatches(searchControl.value)
      ),
      map((response) => GlobalActions.receiveArtistSearchResults({ response }))
    )
  );

  /**  React to form changes to get data */
  reactToFormChanges$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<SetValueAction<string>>(SetValueAction.TYPE),
        /* Filter out all none form requests */
        filter((action) =>
          action.controlId.includes(ARTISTS_SEARCH_CONTROL_KEY)
        ),
        /* Wait for a short time until typing stops */
        debounceTime(500),
        /* Extract the  type from the Action control ID by splitting it up */
        map(() => GlobalActions.getArtistSearchResults())
      ) /* Create effect end */
  );
}
