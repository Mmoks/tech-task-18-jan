import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxesRouterModule } from './boxes-router.module';
import { BoxesComponent } from './components/boxes/boxes.component';

@NgModule({
  declarations: [BoxesComponent],
  imports: [CommonModule, BoxesRouterModule],
})
export class BoxesModule {}
