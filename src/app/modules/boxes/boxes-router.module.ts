import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxesComponent } from './components/boxes/boxes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: '',
    component: BoxesComponent,
    children: [
      {
        path: 'list',
        loadChildren: () =>
          import('../box-list/box-list.module').then((m) => m.BoxListModule),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../box-details/box-details.module').then(
            (m) => m.BoxDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxesRouterModule {}
