import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICat } from './interfaces/cat';
import { IBreed } from './interfaces/breed';

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
   * @returns {Observable<ICat[]>}  an array of Cat objects
   */

  getCats(limit: number, breed?: string): Observable<ICat[]> {
    return this.http.get<ICat[]>(`${environment.apiUrl}/images/search`, {
      params: new HttpParams()
        .set('limit', limit)
        .set('breed_ids', breed || '')
        .set('has_breeds', 1),
    });
  }

  /**
   *
   * @returns {Observable<IBreed[]>} - a list of breeds
   */

  getBreeds(): Observable<IBreed[]> {
    return this.http.get<IBreed[]>(`${environment.apiUrl}/breeds`);
  }
}
