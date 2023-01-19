import { Action, createReducer, on } from '@ngrx/store';
import { User, Wallet, WalletType } from 'graphql/generated';

import * as userActions from './user.actions';

export const featureName = 'user';

export interface IUserState {
  user: User | null;
  loading: boolean;
  wallet: Wallet | null;
}

const initialState: IUserState = {
  user: null,
  loading: false,
  wallet: null,
};

const userReducer = createReducer(
  initialState,
  on(userActions.loadUser, (state) => ({ ...state, loading: true })),

  on(userActions.userLoaded, (state, { user }) => ({
    ...state,
    user,
    wallet:
      user.wallets?.filter((wallet) => wallet?.name === WalletType.Main)[0] ??
      null,
  })),

  on(userActions.userLoaded, userActions.userNotLoaded, (state) => ({
    ...state,
    loading: false,
  })),

  on(userActions.walletUpdated, (state, { wallet }) => ({
    ...state,
    wallet,
  }))
);

export function reducer(state: IUserState | undefined, action: Action) {
  return userReducer(state, action);
}
