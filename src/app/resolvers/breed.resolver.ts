import { inject } from '@angular/core';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { of, take, mergeMap, Observable, EMPTY } from 'rxjs';

import { CatsService } from '../cats.service';
import { IBreed } from '../interfaces/breed';

/**
 * This resolver allows you to load the names of cat breeds before rendering the component
 * @param route The activated route snapshot, which contains information about the current route.
 * @param state The router state snapshot, providing details about the current router state.
 * @returns {Observable<IBreed[]>} An observable of an array of cat breed data. It ensures the breed data is available before rendering the component.
 */
export const breedResolver: ResolveFn<IBreed[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<IBreed[]> => {
  const catsService = inject(CatsService);

  switch (state.url) {
    case '/':
      return catsService.getBreeds().pipe(
        take(1),
        mergeMap((breeds) => {
          if (breeds) {
            return of(breeds);
          } else {
            return EMPTY;
          }
        })
      );

    default:
      return EMPTY;
  }
};
