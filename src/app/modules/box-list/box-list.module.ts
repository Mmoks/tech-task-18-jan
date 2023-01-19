import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { BoxListComponent } from './components/box-list/box-list.component';
import { BoxListRoutingModule } from './box-list-routing.module';
import { featureName, reducer } from './store/box-list.reducer';
import { BoxListEffects } from './store/box-list.effects';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BoxListComponent],
  imports: [
    CommonModule,
    BoxListRoutingModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([BoxListEffects]),
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class BoxListModule {}
