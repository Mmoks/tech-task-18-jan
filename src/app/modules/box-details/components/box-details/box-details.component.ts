import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Box } from 'graphql/generated';
import { Observable } from 'rxjs';

import { BoxDetailsStore } from './store/box-details.store';

@Component({
  selector: 'app-box-details',
  templateUrl: 'box-details.component.html',
  styleUrls: ['./box-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BoxDetailsStore],
})
export class BoxDetailsComponent implements OnInit {
  box$ = this.boxDetailsStore.box$;
  loading$ = this.boxDetailsStore.loading$;

  constructor(
    private route: ActivatedRoute,
    private boxDetailsStore: BoxDetailsStore
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.boxDetailsStore.loadBox(id as string);
  }

  open(box: Box): void {
    this.boxDetailsStore.openBox(box.id);
  }
}
