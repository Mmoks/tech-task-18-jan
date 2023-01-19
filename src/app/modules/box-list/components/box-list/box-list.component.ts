import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Box } from 'graphql/generated';
import { Observable } from 'rxjs';

import { selectAllBoxes, selectLoading } from '../../store/box-list.selectors';
import * as boxListActions from '../../store/box-list.actions';

@Component({
  selector: 'app-box-list',
  templateUrl: 'box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListComponent implements OnInit {
  boxList$: Observable<Box[]> = this.store.select(selectAllBoxes);
  loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(boxListActions.loadBoxList());
  }

  trackBy(index: number, item: Box): string {
    return item.id;
  }
}
