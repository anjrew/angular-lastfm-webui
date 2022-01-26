import { DetailsViewComponent } from './components/pages/details-view/details-view.component';
/* ANGULAR */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* COMPONENTS */
import { DetailsComponent } from './details.component';


const home = ':artist';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: home,
  },
  {
    path: '',
    component: DetailsComponent,
    children: [
      {
        path: home,
        component: DetailsViewComponent,
        data: { state: 1 },
      },
    ],
  },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRoutingModule { }
