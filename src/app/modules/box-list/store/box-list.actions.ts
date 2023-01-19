import { createAction, props } from '@ngrx/store';

import { Box } from 'graphql/generated';

export const loadBoxList = createAction('[Source] Load Box List');
export const boxListLoaded = createAction(
  '[Source] Box List Loaded',
  props<{ boxes: Box[] }>()
);
export const boxListNotLoaded = createAction(
  '[Source] Box List Loaded',
  props<{ error: any }>()
);
