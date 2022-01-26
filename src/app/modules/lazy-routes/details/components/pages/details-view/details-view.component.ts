/* ANGULAR */
import { ChangeDetectionStrategy, Component } from '@angular/core';

/* APP */

/* NGRX */
import { DetailsViewFacade } from './store/details-view.facade';

/* RXJS */
import { Observable } from 'rxjs';

@Component({
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [DetailsViewFacade],
})
export class DetailsViewComponent {

  public isLoading$: Observable<boolean> = this.facade.isLoading$;
  public artistInfo$ = this.facade.artistInfo$;
  public tracks$ = this.facade.tracks$;
  public albums$ = this.facade.albums$;

  constructor(public facade: DetailsViewFacade) {
    this.facade.initialize();
  }
}
