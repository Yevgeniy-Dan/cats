import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cat } from '../interfaces/Cat';
import { Breed } from '../interfaces/Breed';

import { environment } from 'environment/environment';

/**API service for providing endpoints to a server with cats */
@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param limit used  to indicate the number of results returned
   * @returns {Observable<Cat[]>}  an array of Cat objects
   */

  getCats(limit: number, breed?: string): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${environment.apiUrl}/images/search`, {
      params: new HttpParams()
        .set('limit', limit)
        .set('breed_ids', breed || '')
        .set('has_breeds', 1), // pull cats only with a certain breed
    });
  }

  /**
   *
   * @returns {Observable<Breed[]>} - a list of breeds
   */

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${environment.apiUrl}/breeds`);
  }
}
