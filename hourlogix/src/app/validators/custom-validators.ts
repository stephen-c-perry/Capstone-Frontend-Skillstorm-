import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validator for ensuring startDate is before endDate
export function DateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = control.get('startDate')?.value;
      const endDate = control.get('endDate')?.value;
  
      // Checks for start date and end date entry
      if (!startDate || !endDate) {
        return null;
      }
  
      // Convert dates to Date objects
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
  
      // Check if start date is after end date
      if (startDateObj > endDateObj) {
        // Return error if invalid
        return { startDateBeforeEndDate: true };
      }
  
      return null; // No error
    };
}


export function TimeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const startTime = control.get('timeIn')?.value;
    const endTime = control.get('timeOut')?.value;

    // Checks for start time and end time entry
    if (!startTime || !endTime) {
      return null;
    }

    // Convert times to objects this should probably change assuming I use date objects rather than strings
    const startTimeDate = typeof startTime === 'string' ? new Date(`1970-01-01T${startTime}:00`) : startTime;
    const endTimeDate = typeof endTime === 'string' ? new Date(`1970-01-01T${endTime}:00`) : endTime;

    // Check if start time is after end time
    if (startTimeDate > endTimeDate) {
      // Return error if invalid
      return { startTimeBeforeEndTime: true };
    }

    return null; // No error
  };
}

