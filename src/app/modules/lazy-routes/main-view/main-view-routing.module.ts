import { MainViewListComponent } from './components/pages/main-view-list/main-view-list.component';
/* ANGULAR */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* COMPONENTS */
import { MainViewComponent } from './main-view.component';

const home = 'view';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: home,
  },
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: home,
        component: MainViewListComponent,
        data: { state: 1 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainViewRoutingModule {}
