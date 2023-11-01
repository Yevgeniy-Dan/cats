import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/index';
import { quantityFilterValues } from 'src/app/constants/filters.constants';
import { loadCats } from 'src/app/store/actions/cats.actions';
import { IBreed } from 'src/app/interfaces/breed';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

/** Component for managing filters (e.g., breed and quantity). */
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  resolvedBreeds: IBreed[];
  quantityFilterValues: number[] = quantityFilterValues;

  filterForm: FormGroup = this.fb.group({
    breeds: [null],
    quantity: [10],
  });

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.resolvedBreeds = this.route.snapshot.data['breeds'];
  }

  changeQuantityValue(quantity: number) {
    this.filterForm.get('quantity')?.setValue(quantity);
    this.store.dispatch(loadCats({ quantity: quantity }));
  }

  changeBreed(breeds: IBreed[]): void {
    const currentQuantity = this.filterForm.get('quantity')!.value;

    this.filterForm.get('breeds')?.setValue(breeds);

    const breedList = breeds.map((breed) => breed.id).join(',');

    this.store.dispatch(
      loadCats({ quantity: currentQuantity, breed: breedList })
    );
  }
}
