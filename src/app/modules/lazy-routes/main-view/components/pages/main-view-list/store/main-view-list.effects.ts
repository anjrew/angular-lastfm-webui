import { appError } from './../../../../../../../store/global/global.actions';
/* ANGULAR */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

/* APP */
import { MainViewDataService } from '../../../../services/main-view-data.service';

/* RXJS */
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

/* NGRX */
import { TypedAction } from '@ngrx/store/src/models';
import { AppState } from 'src/app/store/app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MainViewListActions from './main-view-list.actions';
import * as Selectors from './main-view-list.selectors';
import { Store } from '@ngrx/store';
import { SetValueAction } from 'ngrx-forms';
import { MAIN_VIEW_FORM_KEY } from './main-view-list.state';

@Injectable()
export class MainViewListEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private dataService: MainViewDataService
  ) {}

  initializePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainViewListActions.initializePage),
      map(() => MainViewListActions.getPageData())
    )
  );

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MainViewListActions.getPageData),
      withLatestFrom(this.store$.select(Selectors.selectCountryFormControl)),
      switchMap(([, control]) =>
        this.dataService.getTop10ArtistsByCountry(control.value).pipe(
          map((data) => MainViewListActions.receivePageData({ data })),
          catchError((_: HttpErrorResponse | Error) =>
            of(appError({ message: `Error getting artists by country` }))
          )
        )
      )
    )
  );

  /**  React to form changes to get data */
  reactToFormChanges$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<SetValueAction<string>>(SetValueAction.TYPE),
        /* Filter out all none form requests */
        filter((action) => action.controlId.includes(MAIN_VIEW_FORM_KEY)),
        /* Wait for a short time until typing stops */
        debounceTime(500),
        /* Extract the  type from the Action control ID by splitting it up */
        map(() => MainViewListActions.getPageData())
      ) /* Create effect end */
  );
}
