import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../interfaces/Cat';

/**API service for providing endpoints to a server with cats */
@Injectable({
  providedIn: 'root',
})
export class CatsService {
  private apiUrl = 'https://api.thecatapi.com/v1/images/search';

  constructor(private http: HttpClient) {}

  /**
   *
   * @param limit used  to indicate the number of results returned
   * @returns {Observable<Cat[]>} - an array of Cat objects
   */

  getCats(limit: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl, {
      params: new HttpParams().set('limit', limit),
    });
  }
}
