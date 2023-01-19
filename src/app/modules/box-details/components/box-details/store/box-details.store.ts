import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';

import { Box, BoxOpening } from 'graphql/generated';
import { BoxDetailsApiService } from '../../../services/box-details-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface BoxDetailsState {
  box: Box | null;
  boxOpenings: BoxOpening[];
  loading: boolean;
}

@Injectable()
export class BoxDetailsStore extends ComponentStore<BoxDetailsState> {
  readonly box$: Observable<Box | null> = this.select(({ box }) => box);
  readonly loading$: Observable<boolean> = this.select(
    ({ loading }) => loading
  );

  constructor(
    private boxDetailsApiService: BoxDetailsApiService,
    private snackBar: MatSnackBar
  ) {
    super({ box: null, boxOpenings: [], loading: false });
  }

  readonly loadBox = this.effect((boxId$: Observable<string>) => {
    return boxId$.pipe(
      switchMap((boxId) => {
        return this.boxDetailsApiService.loadBox(boxId).pipe(
          tap({
            next: ({ data }) => this.setBox(data.box),
            error: (e) => this.logError(e),
          })
        );
      })
    );
  });

  readonly openBox = this.effect((boxId$: Observable<string>) => {
    return boxId$.pipe(
      tap(() => this.setLoading(true)),
      switchMap((boxId) => {
        return this.boxDetailsApiService.openBox({ boxId, amount: 1 }).pipe(
          map(({ data }) => data?.openBox.boxOpenings || []),
          tap({
            next: (boxOpenings) => this.setBoxOpenings(boxOpenings),
            error: (e) => this.logError(e),
          }),
          tap((boxOpenings) => {
            boxOpenings.forEach((opening) =>
              this.snackBar.open(
                `You won: ${opening.itemVariant?.name}!!!`,
                'Got it'
              )
            );
            this.setLoading(false);
          })
        );
      }),
      catchError((err) => {
        this.snackBar.open(`Error: ${err.message}`, 'Close');
        return of(err);
      })
    );
  });

  readonly setLoading = this.updater((state, value: boolean) => ({
    ...state,
    loading: value,
  }));

  readonly setBox = this.updater((state, box: Box) => ({
    ...state,
    box,
  }));

  readonly setBoxOpenings = this.updater(
    (state, boxOpenings: BoxOpening[]) => ({
      ...state,
      boxOpenings,
    })
  );

  private logError(error: any) {
    this.setLoading(false);
    console.error(error);
  }
}
