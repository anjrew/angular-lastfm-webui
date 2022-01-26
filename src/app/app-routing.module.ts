/* APP */

/* ANGULAR */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const home = 'main';

const routes: Routes = [
  {
    path: '',
    redirectTo: home,
    pathMatch: 'full',
  },

  {
    path: home,
    loadChildren: () =>
      import('src/app/modules/lazy-routes/main-view/main-view.module').then(
        (m) => m.MainViewModule
      ),
    data: { state: 1 },
  },

  {
    path: 'details',
    loadChildren: () =>
      import('src/app/modules/lazy-routes/details/details.module').then(
        (m) => m.DetailsViewModule
      ),
    data: { state: 2 },
  },

  /** This route catches all cases that do not match */
  { path: '**', redirectTo: home }, // Wildcard for any missed Routes
];
export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  useHash: true,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
