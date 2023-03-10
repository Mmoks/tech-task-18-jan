import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxListComponent } from './components/box-list/box-list.component';

const routes: Routes = [
  {
    path: '',
    component: BoxListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxListRoutingModule {}
