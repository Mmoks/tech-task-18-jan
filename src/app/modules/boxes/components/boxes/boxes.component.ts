import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: 'boxes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxesComponent {}
