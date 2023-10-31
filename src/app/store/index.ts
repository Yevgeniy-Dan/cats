import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICat } from '../interfaces/cat';

export const catsFeatureKey = 'cats';

export interface CatsState {
  cats: ICat[];
  loading: boolean;
}

export interface AppState {
  cats: CatsState;
}

export const selectCats = createFeatureSelector<CatsState>(catsFeatureKey);

export const selectCatsPhotos = createSelector(
  selectCats,
  (state: CatsState) => state.cats
);

export const selectCatsLoading = createSelector(
  selectCats,
  (state: CatsState) => state.loading
);
