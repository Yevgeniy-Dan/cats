import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState,
  selectCatsLoading,
  selectCatsPhotos,
} from 'src/app/store/index';

import { ICat } from 'src/app/interfaces/cat';

import { loadCats } from 'src/app/store/actions/cats.actions';

/**
 * The component is used to obtain cat objects
 */
@Component({
  selector: 'app-cats-list',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  catsPhotos$?: Observable<ICat[]>;
  catsLoading$?: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCats();
    this.catsPhotos$ = this.store.pipe(select(selectCatsPhotos));
    this.catsLoading$ = this.store.pipe(select(selectCatsLoading));
  }

  /** Initial call to server for selecting cats photos (default 10) */
  private getCats(): void {
    this.store.dispatch(loadCats({ quantity: 10 }));
  }
}
