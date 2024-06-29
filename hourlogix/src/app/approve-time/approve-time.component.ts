import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApproveTimeOffServiceService } from '../services/approve-time-off-service.service';
import { ApproveTime } from '../models/ApproveTime';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-approve-time',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxModule,
    NavComponent,
    TableModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './approve-time.component.html',
  styleUrls: ['./approve-time.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ApproveTimeComponent implements OnInit{
  leaveRequests: ApproveTime[] = [];
  selectedRequest: ApproveTime | null = null;
  filterForm!: FormGroup;
  private baseUrl = 'http://localhost:8080/hourlogix/manager/approvetimeoff';

  constructor(
    private fb: FormBuilder,
    private timeOffRequestService: ApproveTimeOffServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      status: [''] // Initialize with empty for "All"
    });

    this.getAllRequests();

    // Subscribe to filter changes (reactive)
    this.filterForm.get('status')!.valueChanges.subscribe(status => {
      this.onStatusChange(status);
    });
  }

  getAllRequests() {
    this.timeOffRequestService.getApproveTimes().subscribe(data => {
      console.log(data)
    })
  }

  onStatusChange(status: string) {
    if (status) {
      this.timeOffRequestService.getRequestsByStatus(status).subscribe(
        filteredRequests => this.leaveRequests = filteredRequests,
        error => {
          console.error('Error filtering requests:', error);
          // Add user-friendly error handling here
        }
      );
    } else {
      this.getAllRequests(); // Fetch all when status is empty
    }
  }

  updateStatus(request: ApproveTime, status: string) {
    this.confirmationService.confirm({
      message: `Are you sure you want to ${status} this request?`,
      accept: () => {

        this.timeOffRequestService.updateApproveTimeStatus(request.employeeId, status)
          .subscribe(response => {
            console.log(response)
      })
  
      } 
    }); 
  }
}
