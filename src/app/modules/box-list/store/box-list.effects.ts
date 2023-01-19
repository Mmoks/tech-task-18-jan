import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { BoxListApiService } from '../services/box-list-api.service';

import * as boxListActions from './box-list.actions';

@Injectable()
export class BoxListEffects {
  loadBoxList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(boxListActions.loadBoxList),
      switchMap(() =>
        this.boxListApiService.loadBoxes().pipe(
          map(({ data }) => data.boxes.edges?.map((item) => item.node)),
          map((boxes) => boxListActions.boxListLoaded({ boxes })),
          catchError((error) => of(boxListActions.boxListNotLoaded({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private boxListApiService: BoxListApiService
  ) {}
}
