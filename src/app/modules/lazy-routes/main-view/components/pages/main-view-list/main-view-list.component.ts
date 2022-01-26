/* ANGULAR */
import { ChangeDetectionStrategy, Component } from '@angular/core';

/* APP */
import { Artist } from './../../../../../../data-types/interfaces/top-artists-response.interface';

/* NGRX */
import { MainViewListFacade } from './store/main-view-list.facade';

/* RXJS */
import { Observable } from 'rxjs';
import { getEncodedUrlParam } from 'src/app/functions/url.functions';

@Component({
  templateUrl: './main-view-list.component.html',
  styleUrls: ['./main-view-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [MainViewListFacade],
})
export class MainViewListComponent {
  public isLoading$: Observable<boolean> = this.facade.isLoading$;

  public countryFormControl$ = this.facade.countryFormControl$;

  public topArtists$ = this.facade.topArtists$;

  constructor(public facade: MainViewListFacade) {
    this.facade.initialize();
  }

  public trackBy = (_: number, artist: Artist) => artist.name;

  public getEncoded = getEncodedUrlParam;
}
