import { Action, createReducer, on } from '@ngrx/store';
import * as catsActions from '../actions/cats.actions';
import { CatsState } from '..';

export const initialState: CatsState = {
  cats: [],
  loading: true,
};

const catsReducer = createReducer(
  initialState,
  on(catsActions.loadCats, (state) => {
    return { ...state, loading: true };
  }),
  on(catsActions.loadCatsComplete, (state, { cats }) => {
    return { ...state, cats, loading: false };
  })
);

/** The main cats reducer function */
export function reducer(state: CatsState | undefined, action: Action) {
  return catsReducer(state, action);
}
