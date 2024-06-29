import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeOff } from '../models/TimeOff';

@Injectable({
  providedIn: 'root',
})
export class RequestTimeOffServiceService {
  private baseUrl = 'http://localhost:8080/hourlogix/employee/requesttimeoff';

  constructor(private http: HttpClient) {}

  submitTimeOffRequest(timeOff: TimeOff) {
    return this.http.post<any>(this.baseUrl, timeOff);
  }

  getTimeOffRequests() {
    return this.http.get<TimeOff[]>(this.baseUrl);
  }
}
