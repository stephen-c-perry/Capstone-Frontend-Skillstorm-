import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateValidator, TimeValidator } from '../validators/custom-validators';

@Component({
  selector: 'app-log-hours',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './log-hours.component.html',
  styleUrls: ['./log-hours.component.css']
})
export class LogHoursComponent {

  showForm = true;

  constructor(private fb: FormBuilder) {}

  logHours: FormGroup = this.fb.group({
    empId: ['', Validators.required],
    startDate: ['', Validators.required],
    timeIn: ['', Validators.required],
    timeOut: ['', Validators.required],
    endDate: ['', Validators.required],
    totalHours: ['', Validators.required],
    addEntry: this.fb.array([])
  }, { validators: [TimeValidator(), DateValidator()] });

  get addEntry() {
    return this.logHours.get('addEntry') as FormArray;
  }

  newFormGroup(): FormGroup {
    return this.fb.group({
      empId: [''],
      startDate: ['', Validators.required],
      timeIn: ['', Validators.required],
      timeOut: ['', Validators.required],
      endDate: ['', Validators.required],
      totalHours: ['']
    }, { validators: [TimeValidator(), DateValidator()] });
  }

  addNewFormGroup() {
    this.addEntry.push(this.newFormGroup());
  }

  removeFormGroup(index: number) {
    this.addEntry.removeAt(index);
  }

  onSubmit() {
    // TODO: Implement POST logic here
  }
}
