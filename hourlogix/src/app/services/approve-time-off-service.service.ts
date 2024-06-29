import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApproveTime } from '../models/ApproveTime';

@Injectable({
  providedIn: 'root'
})
export class ApproveTimeOffServiceService {
  private baseUrl = 'http://localhost:8080/hourlogix/manager/approvetimeoff';

  constructor(private http: HttpClient) {}

  getApproveTimes(): Observable<ApproveTime[]> {
    return this.http.get<ApproveTime[]>(this.baseUrl);
  }

  getRequestsByStatus(status: string): Observable<ApproveTime[]> {
    return this.http.get<ApproveTime[]>(`${this.baseUrl}/filter?status=${status}`);
  }

  updateApproveTimeStatus(employeeId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}/${employeeId}?status=${status}`;
    return this.http.put(url, null);  
  }
}
