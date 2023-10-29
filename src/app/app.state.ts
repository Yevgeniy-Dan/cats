import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as catsStore from './components/cats/state';

/** Define the interface of the application state */
export interface AppState {
  catsState: catsStore.CatsState;
}

/** Defining the application state */
export const initialState: AppState = {
  catsState: catsStore.initialState,
};

/** Defining the reducers on the top level up */
export const reducers: ActionReducerMap<AppState> = {
  catsState: catsStore.reducer,
};

/** Defining the effects' array on the top level up */
export const effects: Array<any> = [catsStore.CatsEffects];

/** Selector to get cats' slice of state */
export const selectCats = (state: AppState) => state.catsState;

/** Selector for selecting cat objects */
export const selectCatsPhotos = createSelector(
  selectCats,
  (state: catsStore.CatsState) => state.cats
);
