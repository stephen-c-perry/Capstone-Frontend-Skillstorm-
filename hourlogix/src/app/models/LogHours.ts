export interface LogHours {
  empId: string;
  date: Date;
  timeIn: string;
  timeOut: string;
  timeType: string;
  totalHours: number;
}

//should timeIn and timeOut be strings or time objects?