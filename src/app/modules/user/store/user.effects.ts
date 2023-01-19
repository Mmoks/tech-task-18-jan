import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WalletType } from 'graphql/generated';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap, filter } from 'rxjs/operators';

import { loginUrl } from '../constants/login-url.const';
import { UserApiService } from '../services/user-api.service';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.loadUser),
      switchMap(() =>
        this.userApiService.loadUser().pipe(
          map(({ data }) => userActions.userLoaded({ user: data.currentUser })),
          catchError((error) => of(userActions.userNotLoaded({ error })))
        )
      )
    );
  });

  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(userActions.login),
        tap(() => (window.location.href = loginUrl))
      );
    },
    { dispatch: false }
  );

  subscribeOnUpdateWallet$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.subscribeOnUpdateWallet),
      switchMap(() =>
        this.userApiService.onUpdateWallet().pipe(
          map(({ data }) => data?.updateWallet.wallet),
          filter((wallet) => wallet?.name === WalletType.Main),
          map((wallet) =>
            userActions.walletUpdated({
              wallet: wallet || null,
            })
          ),
          catchError((error) => of(userActions.subscriptionFailed({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService
  ) {}
}
