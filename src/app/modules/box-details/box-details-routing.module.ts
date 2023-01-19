import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoxDetailsComponent } from './components/box-details/box-details.component';

const routes: Routes = [
  {
    path: '',
    component: BoxDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxDetailsRoutingModule {}
