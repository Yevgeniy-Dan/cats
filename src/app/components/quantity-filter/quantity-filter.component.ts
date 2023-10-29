import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { qtyFilterValues } from 'src/app/utils/filters';
import { loadCats } from '../cats/state';

@Component({
  selector: 'app-quantity-filter',
  templateUrl: './quantity-filter.component.html',
  styleUrls: ['./quantity-filter.component.css'],
})
export class FiltersComponent {
  qtyFilterValues: number[] = qtyFilterValues;
  qty: number = 10; /**TODO: achieve a "single source of truth" (SSOT) architecture */

  constructor(private store: Store<AppState>) {}

  onQtyChange(qty: number) {
    this.qty = qty;
    this.store.dispatch(loadCats({ qty }));
  }
}
