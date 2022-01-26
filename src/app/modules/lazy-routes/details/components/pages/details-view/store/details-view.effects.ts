import { filter } from 'rxjs/operators';
/* ANGULAR */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

/* APP */
import { DetailsDataService } from './../../../../services/details-data.service';

/* RXJS */
import { of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

/* NGRX */
import { appError } from './../../../../../../../store/global/global.actions';
import { AppState } from 'src/app/store/app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DetailsViewActions from './details-view.actions';
import * as GlobalSelectors from 'src/app/store/global/global.selectors';
import * as RouterActions from 'src/app/store/router/router.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class DetailsViewEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private dataService: DetailsDataService
  ) {}

  initializePage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailsViewActions.initializePage),
      map(() => DetailsViewActions.getPageData())
    )
  );

  reload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailsViewActions.reload),
      switchMap((action) => [
        RouterActions.routerGo({ path: action.data.path }),
      ])
    )
  );

  reactToPageReload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouterActions.routerGo),
      filter((action) => action.path.some((el) => el.includes('detail'))),
      debounceTime(300),
      switchMap((action) => [DetailsViewActions.getPageData()])
    )
  );

  getInfoData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailsViewActions.getPageData),
      withLatestFrom(
        this.store$.select(GlobalSelectors.selectRouteParam('artist'))
      ),
      switchMap(([, artist]) =>
        this.dataService
          .getArtistInfo(artist?.split('-').join(' ') ?? getArtistFromUrl())
          .pipe(
            map((data) => DetailsViewActions.receivePageInfoData({ data })),
            catchError((_: HttpErrorResponse | Error) => of(appError({message: `Error getting artist info`})))
          )
      )
    )
  );

  getAlbumData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailsViewActions.getPageData),
      withLatestFrom(
        this.store$.select(GlobalSelectors.selectRouteParam('artist'))
      ),
      switchMap(([, artist]) =>
        this.dataService
          .getArtistTop5Albums(
            artist?.split('-').join(' ') ?? getArtistFromUrl()
          )
          .pipe(
            map((data) => DetailsViewActions.receiveAlbumData({ data })),
            catchError((_: HttpErrorResponse | Error) => of(appError({message: `Error getting top albums of artist`})))
          )
      )
    )
  );

  getTrackData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DetailsViewActions.getPageData),
      withLatestFrom(
        this.store$.select(GlobalSelectors.selectRouteParam('artist'))
      ),
      switchMap(([, artist]) =>
        this.dataService
          .getArtistTop5Tracks(
            artist?.split('-').join(' ') ?? getArtistFromUrl()
          )
          .pipe(
            map((data) => DetailsViewActions.receiveTrackData({ data })),
            catchError((_: HttpErrorResponse | Error) => of(appError({ message : `Error getting top tracks of artist`})))
          )
      )
    )
  );
}

function getArtistFromUrl(): string {
  const elements = window.location.hash.split('/');
  console.log(elements);
  return elements[elements.length - 1].split('-').join(' ') as string;
}
