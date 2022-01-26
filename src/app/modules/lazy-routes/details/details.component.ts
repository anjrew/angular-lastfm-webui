import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'details-module',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: []
})
export class DetailsComponent {

    public getState(outlet: RouterOutlet): void {
        // return outlet.activatedRouteData.state;
    }

}

