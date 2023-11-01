import { createAction, props } from '@ngrx/store';
import { ICat } from 'src/app/interfaces/cat';

export const LOAD_CATS_COMPLETE = 'Complete Load Cats';

/** Trigger action to trigger the effect in ngrx and extract photos */
export const loadCats = createAction(
  'Load Cats',
  props<{ quantity: number; breed?: string }>()
);

/** Called after the result is returned from the server */
export const loadCatsComplete = createAction(
  'Loal Cats Complete',
  props<{ cats: ICat[] }>()
);
