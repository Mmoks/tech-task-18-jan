import { createAction, props } from '@ngrx/store';

import { User, Wallet } from 'graphql/generated';

export const login = createAction('[USER] Login');

export const loadUser = createAction('[USER] Load');

export const userLoaded = createAction(
  '[USER] Loaded',
  props<{ user: User }>()
);

export const userNotLoaded = createAction(
  '[USER] Not Loaded',
  props<{ error: any }>()
);

export const subscribeOnUpdateWallet = createAction(
  '[USER] Subscribe On Update Wallet'
);

export const walletUpdated = createAction(
  '[USER] Wallet Updated',
  props<{ wallet: Wallet | null }>()
);

export const subscriptionFailed = createAction(
  '[USER] Wallet Subscription Failed',
  props<{ error: any }>()
);
