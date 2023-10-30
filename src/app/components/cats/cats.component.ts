import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppState,
  selectCatsLoading,
  selectCatsPhotos,
} from 'src/app/app.state';

import { Cat } from 'src/app/interfaces/Cat';

import { loadCats } from '../../store';

/**
 * The component is used to obtain cat objects
 */
@Component({
  selector: 'app-cats-list',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  /** Array for storing photos of cats */
  cats$?: Observable<Cat[]>;
  loading$?: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCats();
    // Select cats photos from app state
    this.cats$ = this.store.pipe(select(selectCatsPhotos));
    // Select loading state from app state
    this.loading$ = this.store.pipe(select(selectCatsLoading));
  }

  /** Initial call to server for selecting cats photos (default 10) */
  private getCats(): void {
    this.store.dispatch(loadCats({ qty: 10 }));
  }
}
