import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/interfaces/Cat';
import { CatsService } from 'src/app/services/cats.service';

/**
 * The component is used to obtain cat objects
 */
@Component({
  selector: 'app-cats-list',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  /**quantity of results (default - 10)   */
  private qty: number = 10;
  /**array for storing photos of cats */
  cats: Cat[] = [];

  constructor(private catService: CatsService) {}

  ngOnInit(): void {
    // call to api to get photos
    this.catService.getCats(this.qty).subscribe((cats) => (this.cats = cats));
  }
}
