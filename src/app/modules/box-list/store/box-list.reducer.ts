import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Box } from 'graphql/generated';

import * as boxListActions from './box-list.actions';

export const featureName = 'boxList';

export const adapter: EntityAdapter<Box> = createEntityAdapter<Box>({
  selectId: (item) => item.id,
  sortComparer: false,
});

export interface IBoxListState extends EntityState<Box> {
  loading: boolean;
}

const initialState: IBoxListState = {
  ...adapter.getInitialState(),
  loading: false,
};

const userReducer = createReducer(
  initialState,
  on(boxListActions.loadBoxList, (state) => ({ ...state, loading: true })),

  on(boxListActions.boxListLoaded, (state, { boxes }) => ({
    ...state,
    ...adapter.setAll(boxes, state),
  })),

  on(boxListActions.boxListLoaded, boxListActions.boxListLoaded, (state) => ({
    ...state,
    loading: false,
  }))
);

export function reducer(state: IBoxListState | undefined, action: Action) {
  return userReducer(state, action);
}

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectBoxIds = selectIds;

export const selectBoxEntities = selectEntities;

export const selectAllBoxes = selectAll;

export const selectBoxListTotal = selectTotal;
