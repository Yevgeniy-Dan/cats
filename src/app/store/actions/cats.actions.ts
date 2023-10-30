import { createAction, props } from '@ngrx/store';
import { Cat } from 'src/app/interfaces/Cat';

/** Names for actions to achieve consistency across calls from different components*/
export const LOAD_CATS = 'Initial Load Cats';
export const LOAD_CATS_COMPLETE = 'Complete Load Cats';

/** Trigger action to trigger the effect in ngrx and extract photos */
export const loadCats = createAction(
  LOAD_CATS,
  props<{ qty: number; breed?: string }>()
);

/** Called after the result is returned from the server */
export const loadCatsComplete = createAction(
  LOAD_CATS_COMPLETE,
  props<{ cats: Cat[] }>()
);
