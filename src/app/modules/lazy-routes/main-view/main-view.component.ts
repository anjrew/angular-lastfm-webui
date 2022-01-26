import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: []
})
export class MainViewComponent {

    public getState(outlet: RouterOutlet): void {
        // return outlet.activatedRouteData.state;
    }

}

