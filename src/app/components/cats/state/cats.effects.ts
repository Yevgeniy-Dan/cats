import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { CatsService } from 'src/app/services/cats.service';
import {
  LOAD_CATS,
  LOAD_CATS_COMPLETE,
  loadCatsComplete,
} from './cats.actions';

@Injectable()
export class CatsEffects {
  /** Create an effect for loading cats */
  loadCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_CATS), // Listen for LOAD_CATS action
      mergeMap((action: any) => {
        // Call the CatsService to get cats and dispatch an action
        return this.catsService.getCats(action!.qty, action?.breed).pipe(
          map((cats) => loadCatsComplete({ cats })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private catsService: CatsService) {}
}
