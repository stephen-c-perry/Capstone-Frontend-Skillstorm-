import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
// import { BrowserModule } from '@angular/platform-browser';

import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TimeOff } from '../models/TimeOff';
import { RequestTimeOffServiceService } from '../services/request-time-off-service.service';
import { CardModule, CardTemplates } from 'primeng/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-timeoff',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CalendarModule, ToastModule, ButtonModule, DialogModule, DropdownModule, CardModule, NoopAnimationsModule],
  templateUrl: './timeoff.component.html',
  styleUrls: ['./timeoff.component.css']
})
export class TimeOffComponent implements OnInit {
  timeOffRequests: TimeOff[] = [];
  timeOffForm!: FormGroup;
  leaveTypes = ['Annual Leave', 'Sick Leave', 'Personal Leave'];
  timeOffDialog: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private timeOffService: RequestTimeOffServiceService
  ) {}

  ngOnInit() {
    this.timeOffForm = this.fb.group({
      reason: ['', Validators.required],
      typeOfLv: ['', Validators.required],
      lvStartDate: [null, Validators.required],
      lvEndDate: [null, Validators.required]
    });
  }

  openNew() {
    this.timeOffForm.reset();
    this.timeOffDialog = true;
  }

  hideDialog() {
    this.timeOffDialog = false;
  }

  submitRequest() {
    if (this.timeOffForm.invalid) {
      return;
    }

    const timeOffRequest: TimeOff = {
      ...this.timeOffForm.value,
      
    };
    this.timeOffService.getTimeOffRequests().subscribe(
      (requests: TimeOff[]) => this.timeOffRequests = requests,
      (error) => console.error('Error fetching time off requests:', error)
    );

    this.timeOffService.submitTimeOffRequest(timeOffRequest).subscribe(
      response => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Time off request submitted!'});
        this.hideDialog();
      },
      error => { 
        this.messageService.add({severity:'error', summary:'Error', detail:'Failed to submit time off request'});
        console.error(error); 
      }
    );
  }
}


// getList() {
//   return this.httpClient.get<TModel[]>(`${this.baseUrl}${this.resourceEndpoint}`);
// }

// getById(id: number) {
//   return this.httpClient.get<TModel>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
// }

// add(dto: TDto) {
//   return this.httpClient.post<TModel>(`${this.baseUrl}${this.resourceEndpoint}`, dto);
// }

// update(dto: TDto) {
//   return this.httpClient.put<TModel>(`${this.baseUrl}${this.resourceEndpoint}`, dto);
// }

// remove(id: number) {
//   return this.httpClient.delete<number>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
// }
// }