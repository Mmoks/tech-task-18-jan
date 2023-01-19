import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BoxDetailsComponent } from './components/box-details/box-details.component';
import { BoxDetailsRoutingModule } from './box-details-routing.module';

@NgModule({
  declarations: [BoxDetailsComponent],
  imports: [
    CommonModule,
    BoxDetailsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class BoxDetailsModule {}
