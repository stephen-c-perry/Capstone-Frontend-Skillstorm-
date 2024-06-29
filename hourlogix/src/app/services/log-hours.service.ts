import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogHours } from '../models/LogHours';

@Injectable({
  providedIn: 'root'
})
export class LogHoursService {

  private dummyUrl = 'https://dummyapi.com/loghours'; // Replace with backend API

  constructor(private http: HttpClient) {}

  // Store logHours model properties into data variable and make a POST request to specified URL
  submitHours(data: LogHours): Observable<LogHours> {  
    return this.http.post<LogHours>(this.dummyUrl, data);
  }
}

