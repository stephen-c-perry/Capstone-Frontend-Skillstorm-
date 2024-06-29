import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Paystub } from '../models/paystub';

@Injectable({
  providedIn: 'root'
})
export class PaystubsService {

  constructor(private http: HttpClient) { }

  getData() { 
    return this.http.get<Paystub[]>(environment.apiUrl) 
  }

}

