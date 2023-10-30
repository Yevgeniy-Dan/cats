import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { qtyFilterValues } from 'src/app/utils/filters';
import { loadCats } from '../cats/state';
import { Breed } from 'src/app/interfaces/Breed';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

/** Component for managing filters (e.g., breed and quantity). */
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  resolvedBreeds: Breed[];
  qtyFilterValues: number[] = qtyFilterValues;

  filterForm: FormGroup = this.fb.group({
    breed: [null],
    qty: [10],
  });

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    // Initialize component with resolved breeds data.
    this.resolvedBreeds = this.route.snapshot.data['breeds'];
  }

  changeQty(qty: number) {
    // Handle changes in the quantity filter and trigger a store action.
    this.filterForm.get('qty')?.setValue(qty);
    this.store.dispatch(loadCats({ qty }));
  }

  changeBreed(breed: Breed): void {
    // Purpose: Handle changes in the breed filter and trigger a store action with updated parameters.
    const currentQty = this.filterForm.get('qty')!.value;

    // Change breed form value
    this.filterForm.get('breed')?.setValue(breed);

    this.store.dispatch(loadCats({ qty: currentQty, breed: breed.id }));
  }
}
