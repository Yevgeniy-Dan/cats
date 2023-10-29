import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCatsPhotos } from 'src/app/app.state';

import { loadCats } from './state';

/**
 * The component is used to obtain cat objects
 */
@Component({
  selector: 'app-cats-list',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  /** Quantity of results (default - 10)   */
  private qty: number = 10;
  /** Array for storing photos of cats */
  cats$: Observable<any> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getCats();
    // Select cats photos from app state
    this.cats$ = this.store.pipe(select(selectCatsPhotos));
  }

  /** Initial call to server for selecting cats photos */
  private getCats(): void {
    this.store.dispatch(loadCats({ qty: this.qty }));
  }
}
