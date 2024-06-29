export interface TimeOff {
    employeeId: number;
    firstName: string;
    lastName: string;
    email: string;
    reason: string;
    hoursOfLvRequested: number; // auto calculated
    typeofLv: string;
    lvStartDate: Date;
    lvEndDate: Date;
    status: string;
}