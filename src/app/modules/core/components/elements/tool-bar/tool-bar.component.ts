import { AppState } from 'src/app/store/app.state';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getEncodedUrlParam } from 'src/app/functions/url.functions';
import * as GlobalSelectors from 'src/app/store/global/global.selectors';
import * as DetailsActions from 'src/app/modules/lazy-routes/details/components/pages/details-view/store/details-view.actions';
import * as GlobalActions from 'src/app/store/global/global.actions';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  public artistSearchControl$ = this.store$.select(
    GlobalSelectors.selectArtistsSearchControl
  );
  public filteredOptions$ = this.store$.select(GlobalSelectors.selectResults);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store$: Store<AppState>
  ) {}

  public reload(path: Array<string>): void {
    this.store$.dispatch(DetailsActions.reload({ data: { path } }));
  }

  public getToken(): void {
    this.store$.dispatch(GlobalActions.authenticateApp());
  }

  public getEncoded = getEncodedUrlParam;
}
