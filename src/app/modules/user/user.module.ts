import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureName, reducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserModule {}
