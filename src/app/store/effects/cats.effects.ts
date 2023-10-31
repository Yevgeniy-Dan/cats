import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { CatsService } from 'src/app/cats.service';
import { loadCats, loadCatsComplete } from '../actions/cats.actions';

@Injectable()
export class CatsEffects {
  loadCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCats),
      mergeMap((action: any) => {
        return this.catsService.getCats(action!.quantity, action?.breed).pipe(
          map((cats) => loadCatsComplete({ cats })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private catsService: CatsService) {}
}
