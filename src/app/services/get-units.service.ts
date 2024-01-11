import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  constructor(private httpClient: HttpClient) {}

  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  getAllUnits(): Observable<UnitsResponse> {
    return this.httpClient.get<UnitsResponse>(this.apiUrl);
  }
}
