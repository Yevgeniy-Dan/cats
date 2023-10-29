import { Action, createReducer, on } from '@ngrx/store';
import * as catsActions from './cats.actions';
import { CatsState, initialState } from './cats.state';

const catsReducer = createReducer(
  initialState,
  on(catsActions.loadCats, (state) => {
    return { ...state, loading: true };
  }),
  // Handle the loadCatsComplete action
  on(catsActions.loadCatsComplete, (state, { cats }) => {
    return { ...state, cats, loading: false }; // Update the state with new cats data
  })
);

/** The main cats reducer function */
export function reducer(state: CatsState | undefined, action: Action) {
  return catsReducer(state, action); //Delegate to the catsReducer created above
}
