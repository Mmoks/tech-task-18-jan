import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';

export const selectUserState = createFeatureSelector<fromUser.IUserState>(
  fromUser.featureName
);

export const selectUser = createSelector(selectUserState, ({ user }) => user);

export const selectWallet = createSelector(
  selectUserState,
  ({ wallet }) => wallet
);
