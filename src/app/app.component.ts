import { AppState } from './store/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from './store/global/global.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(store$: Store<AppState>) {
    store$.dispatch(Actions.initializeApp());
  }
}
