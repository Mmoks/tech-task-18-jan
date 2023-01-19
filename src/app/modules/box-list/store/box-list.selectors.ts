import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromBoxList from './box-list.reducer';

export const selectBoxListState =
  createFeatureSelector<fromBoxList.IBoxListState>(fromBoxList.featureName);

export const selectBoxIds = createSelector(
  selectBoxListState,
  fromBoxList.selectBoxIds
);

export const selectBoxEntities = createSelector(
  selectBoxListState,
  fromBoxList.selectBoxEntities
);

export const selectAllBoxes = createSelector(
  selectBoxListState,
  fromBoxList.selectAllBoxes
);

export const selectBoxListTotal = createSelector(
  selectBoxListState,
  fromBoxList.selectBoxListTotal
);

export const selectLoading = createSelector(
  selectBoxListState,
  ({ loading }) => loading
);
