import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../interfaces/Cat';
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
   * @returns {Observable<Cat[]>} - an array of Cat objects
   */

  getCats(limit: number): Observable<Cat[]> {
    return this.http.get<Cat[]>(environment.apiUrl, {
      params: new HttpParams().set('limit', limit),
    });
  }
}
