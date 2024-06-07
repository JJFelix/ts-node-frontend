import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from '../interface/httpResponse';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly API_BASE_URL = 'http://localhost:1417';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<CustomHttpResponse>{
    return this.http.get<CustomHttpResponse>(`${this.API_BASE_URL}/patients`);
  }
}
